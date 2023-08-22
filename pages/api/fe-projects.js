import data from './fe-projects.json';

export const getFEProjects = () => {
  return data;
};

export default (req, res) => {
  const projects = getFEProjects();
  res.json(projects);
};
