import ProjectCard from '../../components/ProjectCard';
import { getFEProjects } from '../api/fe-projects';
// import { getCssProjects } from './api/bots-projects';
// import { getPyPiProjects } from './api/pypi-projects';
// import { getMiscProjects } from './api/misc-projects';
import styles from '../../styles/ProjectsPage.module.css';
import { useRouter } from "next/router";

const ProjectsPage = ({ frontend_projects }) => {
  const router = useRouter();
  const { tag } = router.query; // Get the 'tag' parameter from the URL

  let projects_with_tag = frontend_projects.filter((project) => {
    return project.tags.includes(tag);
  });

  return (
    <>
      {tag && projects_with_tag.length > 0 && (
        <>
          <center><h3>Pojects tagged with "{tag}"</h3></center>
          <hr />
          <div className={styles.container}>
            {projects_with_tag.map((project) => <ProjectCard key={project.id} project={project} />)}
          </div>
          <br />
        </>
      )}

      <center><h3>Frontend Projects</h3></center>
      <hr />
      <div className={styles.container}>
        {frontend_projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      <br />


      {/* <center><h4>Css</h4></center>
      <hr/>
      <div className={styles.container}>
        {bots_projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      <br/>
      <center><h4>PyPi Packages</h4></center>
      <hr/>
      <div className={styles.container}>
        {pypi_projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      <br/>
      <center><h4>Misc Projects</h4></center>
      <hr/>
      <div className={styles.container}>
        {misc_projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div> */}
    </>
  );
};

export async function getStaticProps() {
  const frontend_projects = getFEProjects();
  // const bots_projects = getCssProjects();
  // const pypi_projects = getPyPiProjects();
  // const misc_projects = getMiscProjects();

  return {
    props: { title: 'Projects', frontend_projects },
  };
}

export default ProjectsPage;
