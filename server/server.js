const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const compression = require('compression');
const rateLimit = require('express-rate-limit');
const jwt = require('jsonwebtoken')
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;
const jwtSecret = process.env.JWT_SECRET
const refreshSecret = process.env.REFRESH_SECRET
// Trust proxy setting (important for rate limiting and security)
app.set('trust proxy', 1);

// Serve static files from the React build directory
app.use(express.static(path.join(__dirname, '../client/build')));

// Security middleware
app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      styleSrc: ["'self'", "'unsafe-inline'"],
      scriptSrc: ["'self'"],
      imgSrc: ["'self'", "data:", "https:"],
    },
  },
}));

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message: 'Too many requests from this IP, please try again later.',
  standardHeaders: true,
  legacyHeaders: false,
  skipSuccessfulRequests: false,
  skipFailedRequests: false,
});
app.use('/api/', limiter);

// CORS configuration
app.use(cors({
  origin: process.env.NODE_ENV === 'production' 
    ? ['https://yourdomain.com'] 
    : ['http://localhost:3000'],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));

// Logging middleware
app.use(morgan('combined'));

// Compression middleware
app.use(compression());

// Body parsing middleware
app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '10mb' }));
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));

// Cookie parser
app.use(cookieParser());

// Custom middleware for request logging
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.path}`);
  next();
});
//generate token
const generateAccessToken = (user) =>{
  return jwt.sign({id:user.id,username:user.username},jwtSecret,)
}
const generateRefreshToken = (user) =>{
return jwt.sign({id :user.id,username: user.username},jwtSecret,{expiresIn :'7d'}) 
}
// API Routes
const users = [{
  id:'125055454762465',username :'houssem',password :'123'
},
{id:'1212646156545',username :'walid',password :'456'}]
app.post('/login',(req,res) =>{
const credentials = {username : req.body.username,password : req.body.password}
console.log(credentials)
 const user = users.find(user => user.username == credentials.username && user.password == credentials.password)
if (!user) {
  res.status(401).json({message:'invalid user'})
}
const accessToken  = generateAccessToken(user)
const refreshToken = generateRefreshToken(user)
console.log(refreshToken)
// set refreshToken in http Only
res.cookie('refreshToken' ,refreshToken,{
  httpOnly:true,
  sameSite:'strict',
  maxAge : 1000*60*60*24*7 // 7 days
})
res.status(200).json({accessToken})
})
//try to refresh token
app.post('/refresh',(req,res) =>{
  const refreshToken = req.cookies.refreshToken;
  if (!refreshToken) {
    res.status(401).json({message : 'no refreshToken redirect to login '})
  }
try {
    const decode = jwt.verify(refreshToken,refreshSecret)
  const user = users.find(user =>user.id === decode.id)
  if (!user){
    return res.status(401).json('invalid refresh token')
  }
  const accessToken = generateAccessToken(user)
  res.json({accessToken})
} catch (error) {
  res.status(401).json({message : 'invalid refresh token'})
}
}) 
// Example API routes
app.get('/api/users', (req, res) => {
  const users = [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
  ];
  res.json(users);
});

app.post('/api/users', (req, res) => {
  const { name, email } = req.body;
  if (!name || !email) {
    return res.status(400).json({ 
      error: 'Name and email are required',
    });
  }
  const newUser = {
    id: Date.now(),
    name,
    email,
    createdAt: new Date().toISOString(),
  };
  res.status(201).json(newUser);
});

app.put('/api/users/:id', (req, res) => {
  const { id } = req.params;
  const { name, email } = req.body;
  res.json({
    id: parseInt(id),
    name,
    email,
    updatedAt: new Date().toISOString(),
  });
});

app.delete('/api/users/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    message: `User ${id} deleted successfully`,
    deletedAt: new Date().toISOString(),
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Error:', err.stack);
  if (err.type === 'entity.parse.failed') {
    return res.status(400).json({ error: 'Invalid JSON payload' });
  }
  res.status(500).json({ 
    error: process.env.NODE_ENV === 'production' 
      ? 'Internal server error' 
      : err.message,
  });
});

// Serve React app for all non-API routes (in production and development)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

// Graceful shutdown
process.on('SIGTERM', () => {
  console.log('SIGTERM received. Shutting down gracefully...');
  server.close(() => {
    console.log('Process terminated');
  });
});

const server = app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`📝 Environment: ${process.env.NODE_ENV || 'development'}`);
  console.log(`🔗 Health check: http://localhost:${PORT}/api/health`);
});