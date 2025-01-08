import React from 'react';

const Projects: React.FC = () => {
  const projectList = [
    { title: "Projeto 1", description: "Descrição do projeto 1." },
    { title: "Projeto 2", description: "Descrição do projeto 2." },
    { title: "Projeto 3", description: "Descrição do projeto 3." },
  ];

  return (
    <section id="projects" className="projects">
      <h2>Meus Projetos</h2>
      <div className="project-grid">
        {projectList.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
