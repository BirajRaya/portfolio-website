// Profile.js
import React from 'react';
import { FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import ReactSwitch from 'react-switch';
import { Link } from 'react-router-dom';
import './profile.css';

const Profile = ({ isDark, setDarkTheme }) => {
  return (
    <div className="profile-container" data-theme={isDark ? "dark" : "light"}>
      <div className="profile-content">
        <p className="intro-text">Hello, I'm</p>
        <h1 className="name">Biraj Raya</h1>
        <p className="description">
          A software developer, transforming concepts into reality with code.
          Explore my resume or reach out to me.
        </p>
        
        <div className="button-container">
          <Link to="#">
            <button className="button primary">See Resume</button>
          </Link>
          <button className="button">Contact Info</button>
        </div>

        <div className="social-container">
          <a href="https://github.com/BirajRaya" target="_blank" rel="noopener noreferrer">
            <FaGithub className="social-icon" />
          </a>
          <a href="www.linkedin.com/in/biraj-raya" target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn className="social-icon" />
          </a>
          <a href="https://www.instagram.com/b_raz18/" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="social-icon" />
          </a>
        </div>
      </div>

      <div className="theme-switch">
        <span>{isDark ? "Dark Mode" : "Light Mode"}</span>
        <ReactSwitch 
          onChange={() => setDarkTheme(!isDark)} 
          checked={isDark}
          onColor="#74b9ff"
          offColor="#3498db"
          checkedIcon={false}
          uncheckedIcon={false}
          height={24}
          width={48}
        />
      </div>
    </div>
  );
};

// Content.js
const Content = ({ isDark }) => {
  const experiences = [
    {
      title: " IT Technician",
      company: "Election ontario",
      location: "Toronto, Canada",
      period: "Dec 2024 - Jan 2025",
      responsibilities: [
        "Provided technical support for hardware and software issues, ensuring minimal downtime for users.",
        "Managed and maintained networking systems, ensuring reliable and secure connections across devices.",
        "Installed, configured, and upgraded software and hardware components, adhering to best practices and company standards.",
        "Collaborated with the IT team to implement infrastructure upgrades and network enhancements for better scalability and performance"
      ],
      skills : ["Technical support", "IT service", "Networking", "Information Technology Infrastructure"]
    },
    {
      title: "Javascript Developer",
      company: "NepalITSolutions",
      location: "Kathmandu, Nepal",
      period: "Feb 2022 - Oct 2022",
      responsibilities: [
        "Developed and maintained web applications using React and Node.js",
        "Collaborated with cross-functional teams to define, design, and ship new features",
        "Implemented responsive design to enhance user experience across devices",
        "Participated in code reviews and provided constructive feedback to peers"
      ],
      skills : ["React", "Node.js", "Express"]

    }
  ];

  const projects = [
    {
      projectTitle: "RentalHUB : Vehicle Rental System",
      projectDescription: "RentalHUB is a full-stack dynamic web application for renting bikes and cars. It features user authentication, vehicle management, and a streamlined booking process. The system integrates PostgreSQL for data storage and uses Java, JSP, and Servlets for backend logic. Responsive design ensures a smooth experience across devices, while real-time updates enhance interactivity and booking status visibility..",
      demoLink: "#",
      githubLink: "https://github.com/BirajRaya/RentalHUB_BikeAndCarRental.git",
      skills: ["Java", "Jsp", "Servlet","Postgres", "Dynamic Web Application"],
      image: "image.png" 
    },
  ];
  const skills = [
    {
      category: "Languages",
      items: ["JavaScript", "Python", "TypeScript", "Java", "HTML/CSS" , "C#"]
    },
    {
      category: "Frameworks & Libraries",
      items: ["React.js", "Node.js", "Express.js", "Next.js", "Django", "ASP.NET Core"]
    },
    {
      category: "Databases",
      items: ["MongoDB", "PostgreSQL", "MySQL", "Firebase", "SQLite"]
    },
    {
      category: "Tools & Platforms",
      items: ["Git", "Docker", "AWS", "Linux"]
    }
  ];

  const education = [
    {
      degree: "Full Stack Software Development",
      school: "Lambton college",
      period: "2023 - Present",
      location: "Mississauga, Canada",
      achievements: [
        "GPA: 3.51/4.0",
        "Dean's List: First & Second Semester",
        "Lead developer for senior year project",
      ]
    },
    {
      degree: "Bachelor in Computer Science",
      school: "University of Wolverhampton",
      period: "2019 - 2022",
      location: "Kathmandu, Nepal",
      achievements: [
        "First Class Honours",
        "Winner of Regional Coding Competition"
      ]
    }
  ];
  const certifications = [
    {
      title: "React Developer Certification",
      issuer: "LinkedIn Learning",
      date: "Sep 2024",
      credentialLink: "https://www.linkedin.com/learning/certificates/13fdeaf083c6297f5d63bf50ce87fef3097d58173137c24ac61bc27a584328c5?accountId=56968457&u=56968457&success=true&authUUID=OFllt%2BYiQv%2BBOfp9JlirVg%3D%3D"
    }
  ];

  return (
    <div className="content-container" data-theme={isDark ? "dark" : "light"}>
      <section className="content-section">
        <h2 className="section-header">About Me</h2>
        <p className="section-text">
        With a strong foundation in software development, I specialize in building dynamic, scalable web applications that deliver seamless performance and enhanced user experiences. My work is driven by a passion for exploring new technologies, contributing to open-source projects, and continually sharpening my coding skills. I thrive on solving complex problems and designing innovative solutions that make a meaningful impact..<br/><br/>
        Beyond the technical realm, I enjoy exploring the outdoors, staying updated on emerging tech trends, and working on forward-thinking projects. I am deeply motivated by the belief that technology has the power to solve real-world challenges, and I am committed to using my skills to drive impactful advancements that improve lives and foster innovation.
        </p>
      </section>

      <section className="content-section">
        <h2 className="section-header">Experience</h2>
        {experiences.map((exp, index) => (
          <div key={index} className="experience-box">
            <div className="experience-header">
              <div>
                <h3 className="job-title">{exp.title}</h3>
                <p className="company-name">{exp.company}</p>
                <p className="location">{exp.location}</p>
              </div>
              <span className="job-date">{exp.period}</span>
            </div>

            <ul className="experience-list">
              {exp.responsibilities.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
            <div className="skills-list">
              <div className="skills-container">
                {exp.skills.map((skill, i) => (
                  <span key={i} className="skill-box">{skill}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </section>
      <section className="content-section">
        <h2 className="section-header">Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image-container">
                <img 
                  src={require(`../image/${project.image}`)} 
                  alt={project.projectTitle}
                  className="project-image"
                />
                <div className="project-links-overlay">
                  <a href target="_blank" rel="noopener noreferrer" className="button">
                    Live Demo
                  </a>
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="button">
                    GitHub
                  </a>
                </div>
              </div>
              <div className="project-info">
                <h3 className="project-title">{project.projectTitle}</h3>
                <p className="project-description">{project.projectDescription}</p>
                <div className="skills-container">
                  {project.skills.map((skill, i) => (
                    <span key={i} className="skill-box">{skill}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="content-section">
        <h2 className="section-header">Education</h2>
        {education.map((edu, index) => (
          <div key={index} className="experience-box">
            <div className="experience-header">
              <div>
                <h3 className="job-title">{edu.degree}</h3>
                <p className="company-name">{edu.school}</p>
                <p className="location">{edu.location}</p>
              </div>
              <span className="job-date">{edu.period}</span>
            </div>
            <ul className="experience-list">
              {edu.achievements.map((achievement, i) => (
                <li key={i}>{achievement}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

  
      <section className="content-section">
        <h2 className="section-header">Technical Skills</h2>
        <div className="simple-skills-grid">
          {skills.map((skillGroup, index) => (
            <div key={index} className="simple-skill-category">
              <h3 className="simple-category-title">
                {skillGroup.category}
              </h3>
              <div className="simple-skills-list">
                {skillGroup.items.map((skill, idx) => (
                  <span key={idx} className="simple-skill-item">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>



      <section className="content-section">
        <h2 className="section-header">Certifications</h2>
        {certifications.map((cert, index) => (
          <div key={index} className="experience-box">
            <div className="experience-header">
              <div>
                <h3 className="job-title">{cert.title}</h3>
                <p className="company-name">{cert.issuer}</p>
              </div>
              <span className="job-date">{cert.date}</span>
            </div>
            <div className="certification-link">
              <a href={cert.credentialLink} target="_blank" rel="noopener noreferrer" className="button">
                View Credential
              </a>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export { Profile, Content };