import Card from '@mui/material/Card';
import Icon from '@mui/material/Icon';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import clsx from 'clsx';
import NotificationIcon from './NotificationIcon';

function NotificationCard(props) {
  const { item, className } = props;
  const { variant } = item.options;

  const handleClose = () => {
    if (props.onClose) {
      props.onClose(item.id);
    }
  };

  return (
    <Card
      className={clsx(
        'flex items-center relative w-full rounded-16 p-20 min-h-64 shadow',
        variant === 'success' && 'bg-green-600 text-white',
        variant === 'info' && 'bg-blue-700 text-white',
        variant === 'error' && 'bg-red-600 text-white',
        variant === 'warning' && 'bg-orange-600 text-white',
        className
      )}
      elevation={0}
    >
      <NotificationIcon value={variant} />
      <Typography component="div">{item.message}</Typography>
      <IconButton
        disableRipple
        className="top-0 right-0 absolute p-8"
        color="inherit"
        size="small"
        onClick={handleClose}
      >
        <Icon className="text-12 opacity-75" color="inherit">
          close
        </Icon>
      </IconButton>
      {item.children}
    </Card>
  );
}

export default NotificationCard;
