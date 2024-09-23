import React, { useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

const MyProjects = () => {
  const projectRefs = useRef([]);
  const headingRef = useRef(null); // Ref for the heading

  useEffect(() => {
    const projectElements = projectRefs.current;
    const headingElement = headingRef.current; // Store heading element in a variable
    const observerOptions = {
      threshold: 0.2,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in-right');
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe each project card
    projectElements.forEach((el) => {
      if (el) observer.observe(el);
    });

    // Observe the heading
    if (headingElement) observer.observe(headingElement);

    return () => {
      projectElements.forEach((el) => {
        if (el) observer.unobserve(el);
      });
      if (headingElement) observer.unobserve(headingElement); // Cleanup for heading
    };
  }, []);

  const projects = [
    {
      title: 'COMPASS',
      description:
        'Full-stack Django and React app for companies to offer exclusive employee discounts, boosting loyalty and marketing.',
      techStack: 'React, Python, Django, Django REST Framework',
      githubLink: 'https://github.com/AbdelhayZaadaddi/MVP',
      liveLink: '', // No live link for this project
      emoji: '🔮',
    },
    {
      title: 'ALX Files Manager',
      description:
        'Backend Node.js project with MongoDB and Redis for managing files, including authentication, file uploads, permissions, and thumbnail generation.',
      techStack: 'Node.js, MongoDB, Redis, JWT, Express',
      githubLink: 'https://github.com/Muna-Yusuf/alx-files_manager.git',
      emoji: '📂',
    },
    {
      title: 'ALX Backend Development Projects',
      description:
        'A collection of backend development projects and exercises from the ALX Software Engineering program, covering topics like pagination, caching, internationalization, and queuing systems.',
      techStack: 'Node.js, Redis, JavaScript',
      githubLink: 'https://github.com/Muna-Yusuf/alx-backend',
      liveLink: '', // Add live link if available
      emoji: '🛠️',
    },
    {
      title: 'ALX Backend User Authentication Suite',
      description:
        'Comprehensive backend project for implementing and managing user authentication, including modules for personal data security, basic authentication, session authentication, and user authentication services.',
      techStack: 'Python, Flask, SQL, Regex, Cryptography',
      githubLink: 'https://github.com/Muna-Yusuf/alx-backend-user-data',
      liveLink: '', // Add live link if available
      emoji: '🛡️',
    },
    {
      title: 'ALX System Engineering and DevOps',
      description:
        'Comprehensive repository covering system engineering and DevOps tasks, including shell scripting, process management, networking, web server administration, load balancing, API management, and web stack debugging.',
      techStack: 'Bash, Linux, Networking, Web Servers, MySQL, APIs',
      githubLink:
        'https://github.com/Muna-Yusuf/alx-system_engineering-devops',
      liveLink: '', // Add live link if available
      emoji: '⚙️',
    },
    {
      title: 'Backend Development with JavaScript',
      description:
        'Repository featuring exercises and projects on backend development using JavaScript and TypeScript. Covers ES6 features, promises, classes, data manipulation, Node.js basics, and unit testing.',
      techStack: 'JavaScript, ES6, TypeScript, Node.js',
      githubLink: 'https://github.com/Muna-Yusuf/backend-development-js',
      liveLink: '', // Add live link if available
      emoji: '🖥️',
    },
  ];

  return (
    <div>
      <h2 className="projects-heading" ref={headingRef}>
        Some Things I've Built
      </h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div
            className="project-card"
            key={index}
            ref={(el) => (projectRefs.current[index] = el)}
          >
            <div className="project-links-top">
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} className="project-icon" />
              </a>
              {project.liveLink && (
                <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faExternalLinkAlt} className="project-icon" />
                </a>
              )}
            </div>
            <div className="project-header">
              <span className="project-title">{project.title}</span>
              <span className="project-emoji">{project.emoji}</span>
            </div>
            <p className="project-description">{project.description}</p>
            <p className="project-tech-stack">{project.techStack}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyProjects;
