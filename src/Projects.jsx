import useFetchProjects from "./ContentfulClient";

const Projects = () => {
  const { isLoading, projects } = useFetchProjects();

  if (isLoading) {
    return (
      <section className="projects">
        <div className="loading"></div>
      </section>
    );
  }

  return (
    <section className="projects">
      <div className="title">
        <h2>Projects</h2>
        <div className="title-underline"></div>
      </div>
      <div className="projects-center">
        {projects.map((item) => {
          const { id, title, url, image } = item;
          return (
            <a
              href={url}
              key={id}
              className="project"
              target="_blank"
              rel="noreferrer"
            >
              <img src={image} alt={title} className="img" />
              <h5>{title}</h5>
            </a>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
