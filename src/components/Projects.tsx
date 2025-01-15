
import React, { useEffect, useState } from 'react';

interface Projeto {
    id: number;
    titulo: string;
    descricao: string;
    imagens: string[];
}

const Projects: React.FC = () => {
    const [projects, setProjects] = useState<Projeto[]>([]);

    useEffect(() => {
        fetch('http://localhost:5000/api/projetos')
            .then((res) => res.json())
            .then((data) => setProjects(data))
            .catch((error) => console.error('Erro ao buscar projetos:', error));
    }, []);

    return (
        <section id="projects" className="projects">
            <h2 style={{ textAlign: 'center' }}>Meus Projetos</h2>
            <a className="git" href="https://github.com/MizaelBarreto">Clique aqui para acessar projetos via GitHub</a>
            <div className="project-list">
                {projects.map((project) => (
                    <div key={project.id} className="project-card">
                        <h3>{project.titulo}</h3>
                        <div className="carousel">
                            {project.imagens.map((imagem, index) => (
                                <img key={index} src={imagem} alt={`Imagem do ${project.titulo}`} />
                            ))}
                        </div>
                        <p>{project.descricao}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
