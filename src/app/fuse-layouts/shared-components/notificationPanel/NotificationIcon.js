import Icon from '@mui/material/Icon';

const NotificationIcon = ({ value }) => {
  switch (value) {
    case 'error': {
      return (
        <Icon className="mr-8 opacity-75" color="inherit">
          cancel
        </Icon>
      );
    }
    case 'success': {
      return (
        <Icon className="mr-8 opacity-75" color="inherit">
          check_circle
        </Icon>
      );
    }
    case 'warning': {
      return (
        <Icon className="mr-8 opacity-75" color="inherit">
          error_outline
        </Icon>
      );
    }
    case 'info': {
      return (
        <Icon className="mr-8 opacity-75" color="inherit">
          info
        </Icon>
      );
    }
    default: {
      return null;
    }
  }
};

export default NotificationIcon;
