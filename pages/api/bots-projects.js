import data from './bots-projects.json';

export const getCssProjects = () => {
  return data;
};

export default (req, res) => {
  const projects = getCssProjects();
  res.json(projects);
};
