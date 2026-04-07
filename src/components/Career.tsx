import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Frontend Developer</h4>
                <h5>Syntax World</h5>
              </div>
              <h3>2026</h3>
            </div>
            <p>
              Worked on real client projects using HTML, CSS, JavaScript, and
              React.js. Built and maintained responsive websites, focusing on
              clean UI and performance. Collaborated in a team environment and
              contributed to reusable component-based development. Gained
              hands-on experience with API integration and modern frontend
              workflows.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Freelance WordPress Developer</h4>
                <h5>ApexReach</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Independently designed and developed a complete WordPress website
              for a client. Handled the full project lifecycle from requirements
              to deployment. Customized layouts using Elementor and ensured
              responsive design across devices. Focused on clean UI, usability,
              and basic SEO structure.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Frontend Developer (Self-Learning & Projects)</h4>
                <h5>Self-Employed</h5>
              </div>
              <h3>Present </h3>
            </div>
            <p>
              Building real-world projects using React.js, focusing on UI/UX,
              animations, and performance. Exploring workflow automation using
              n8n and integrating APIs into applications. Continuously improving
              problem-solving skills by working on practical implementations and
              debugging real issues. Actively preparing for frontend developer
              roles and contributing to personal projects.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
