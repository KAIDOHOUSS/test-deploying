import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <>
      <header className="app-header">
        <h1>404 - Page Not Found</h1>
        <p>The page you're looking for doesn't exist</p>
      </header>
      <main className="main-content">
        <div className="container">
          <div className="not-found">
            <div className="not-found-content">
              <h2>Oops! Something went wrong.</h2>
              <p>The page you're looking for might have been moved, deleted, or doesn't exist.</p>
              <Link to="/" className="btn btn-primary">Go Back Home</Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default NotFoundPage;