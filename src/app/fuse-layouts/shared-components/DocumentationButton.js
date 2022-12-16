import Button from '@mui/material/Button';
import Icon from '@mui/material/Icon';
import { Link } from 'react-router-dom';

function DocumentationButton({ className }) {
  return (
    <Button
      component={Link}
      to="/documentation"
      role="button"
      className={className}
      variant="contained"
      color="primary"
    >
      <Icon className="text-16">import_contacts</Icon>
      <span className="mx-4">Documentation</span>
    </Button>
  );
}

export default DocumentationButton;
