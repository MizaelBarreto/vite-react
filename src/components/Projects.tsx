import React, { useEffect, useState } from "react";

interface Projeto {
  id: number;
  titulo: string;
  descricao: string;
  imagens: string[];
}

const Projects: React.FC = () => {
  const [projects, setProjects] = useState<Projeto[]>([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/projetos")
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch((error) => console.error("Erro ao buscar projetos:", error));
  }, []);

  return (
    <section id="projects" className="projects">
      <h2 style={{ textAlign: "center" }}>Meus Projetos</h2>
      <a className="git" href="https://github.com/MizaelBarreto">
        Clique aqui para acessar projetos via GitHub
      </a>
      <div className="project-list">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

const ProjectCard: React.FC<{ project: Projeto }> = ({ project }) => {
  const [currentImage, setCurrentImage] = useState(0);

  const handlePrev = () => {
    setCurrentImage((prev) =>
      prev === 0 ? project.imagens.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentImage((prev) =>
      prev === project.imagens.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="project-card">
      <h3>{project.titulo}</h3>
      <div className="carousel">
        <button className="arrow left" onClick={handlePrev}>
          &#8249;
        </button>
        <img
          src={project.imagens[currentImage]}
          alt={`Imagem ${currentImage + 1} de ${project.titulo}`}
        />
        <button className="arrow right" onClick={handleNext}>
          &#8250;
        </button>
      </div>
      <p>{project.descricao}</p>
    </div>
  );
};

export default Projects;
 