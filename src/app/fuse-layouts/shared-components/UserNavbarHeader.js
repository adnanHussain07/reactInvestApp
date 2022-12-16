import AppBar from '@mui/material/AppBar';
import { styled } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { useSelector } from 'react-redux';

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  '& .username, & .email': {
    transition: theme.transitions.create('opacity', {
      duration: theme.transitions.duration.shortest,
      easing: theme.transitions.easing.easeInOut,
    }),
  },

  '& .avatar': {
    background: theme.palette.background.default,
    transition: theme.transitions.create('all', {
      duration: theme.transitions.duration.shortest,
      easing: theme.transitions.easing.easeInOut,
    }),
    bottom: 0,
    '& > img': {
      borderRadius: '50%',
    },
  },
}));

function UserNavbarHeader(props) {
  const user = useSelector(({ auth }) => auth.user);

  return (
    <StyledAppBar
      position="static"
      color="primary"
      className="user relative flex flex-col items-center justify-center pt-24 pb-64 mb-32 z-0 shadow-0"
    >
      <Typography className="username text-18 whitespace-nowrap font-semibold mb-4" color="inherit">
        {user.data.displayName}
      </Typography>
      <Typography
        className="email text-13 opacity-50 whitespace-nowrap font-medium"
        color="inherit"
      >
        {user.data.email}
      </Typography>
      <div className="flex items-center justify-center absolute bottom-0 -mb-44">
        <Avatar
          className="avatar w-72 h-72 p-8 box-content"
          alt="user photo"
          src={
            user.data.photoURL && user.data.photoURL !== ''
              ? user.data.photoURL
              : 'assets/images/avatars/profile.jpg'
          }
        />
      </div>
    </StyledAppBar>
  );
}

export default UserNavbarHeader;
