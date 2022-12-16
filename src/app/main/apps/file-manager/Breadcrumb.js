import Icon from '@mui/material/Icon';
import Typography from '@mui/material/Typography';

function Breadcrumb({ className, selected }) {
  const arr = selected.location.split('>');

  return (
    <Typography className={className}>
      {arr.map((path, index) => (
        <span key={index} className="flex items-center">
          <span>{path}</span>
          {arr.length - 1 !== index && <Icon>chevron_right</Icon>}
        </span>
      ))}
    </Typography>
  );
}

export default Breadcrumb;
