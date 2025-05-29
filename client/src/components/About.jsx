import {teachers} from '../data/data'
import {comments} from '../data/data'
import { FaUserAlt } from "react-icons/fa";
import { FaUserTie } from "react-icons/fa6";
const AboutPage = () => {
  return (
    <>
      <header className="app-header">
        <h1>About Us</h1>
        <p>Learn more about our company and mission</p>
      </header>
      <main className="main-content">
        <div className="container">
          <div className="about-section">
            <h2>Our Story</h2>
            <p>We are a modern technology company focused on building innovative solutions that make a difference. Our team combines expertise in full-stack development with a passion for creating exceptional user experiences.</p>
            <div className="stats-grid">
              <div className="stat-item">
                <h3>500+</h3>
                <p>Projects Completed</p>
              </div>
              <div className="stat-item">
                <h3>50+</h3>
                <p>Happy Clients</p>
              </div>
              <div className="stat-item">
                <h3>5+</h3>
                <p>Years Experience</p>
              </div>
            </div>
          </div>
          <hr className='line'/>
           <section className="teachers-section">
      <h2 className="teachers-title">الأساتذة المدرسون</h2>
      <div className="teachers-grid">
        {teachers.map((teacher, index) => (
          <div key={index} className="teacher-card">
            <div className="teacher-image-placeholder"><FaUserTie/></div>
            <h3 className="teacher-name">{teacher.name} {teacher.surname}</h3>
            <p className="teacher-description">{teacher.description}</p>
          </div>
        ))}
      </div>
      <hr className='line'/>
      <div className='comments-grid'>
        {comments.map((comment) => <div className='comment-card'>
       <div style={{display:'flex',gap:'0.5rem',flexDirection:'row-reverse', alignItems:'center', color:'green'}}><div className='comment-logo'>
        <FaUserAlt alignmentBaseline="central"  color='grey' /> </div><strong> {comment.username}</strong> </div>
       <div className="comment">
        <p> {comment.comment} </p>
       </div>
        </div>)}
      </div>
    </section>
        </div>
      </main>
    </>
  );
};

export default AboutPage;