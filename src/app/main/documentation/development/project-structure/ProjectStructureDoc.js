import Typography from '@mui/material/Typography';

function ProjectStructureDoc() {
  return (
    <>
      <Typography variant="h4" className="mb-40 font-700">
        Project Structure
      </Typography>

      <Typography className="mb-16" component="p">
        Here’s the project structure of the Fuse React:
      </Typography>

      <img
        src="assets/images/etc/fuse-react-project-structure.jpg"
        alt="fuse react project structure"
      />
    </>
  );
}

export default ProjectStructureDoc;
