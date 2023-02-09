import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Icon from '@mui/material/Icon';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuItem from '@mui/material/MenuItem';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { logoutUser } from 'app/auth/store/userSlice';
import ResetPasswordDialog from './ResetPasswordDialog';
import { setLoggedIn } from 'app/auth/store/sharedData';

function UserMenu(props) {
  const dispatch = useDispatch();
  const user = useSelector(({ auth }) => auth.user);

  const [userMenu, setUserMenu] = useState(null);

  const userMenuClick = (event) => {
    setUserMenu(event.currentTarget);
  };

  const userMenuClose = () => {
    setUserMenu(null);
  };

  return (
    <>
      <Button
        className="min-h-40 min-w-40 px-0 md:px-16 py-0 md:py-6"
        onClick={userMenuClick}
        color="inherit"
      >
        <div className="hidden md:flex flex-col mx-4 items-end">
          <Typography component="span" className="font-semibold flex">
            {user.data.displayName}
          </Typography>
          <Typography className="text-11 font-medium capitalize" color="textSecondary">
            {user.roleName ? user.roleName : "Guest"}
          </Typography>
        </div>

        {user.data.photoURL ? (
          // <Avatar className="md:mx-4" alt="user photo" src={user.data.photoURL} />
          <Avatar className="md:mx-4" alt="user photo">
            <Icon className='text-32'>account_circle</Icon>
          </Avatar>
        ) : (
            <Avatar className="md:mx-4" alt="user photo">
              <Icon className='text-32'>account_circle</Icon>
            </Avatar>
            // <Avatar className="md:mx-4">{user.data.displayName[0]}</Avatar>
          )}
      </Button>

      <Popover
        open={Boolean(userMenu)}
        anchorEl={userMenu}
        onClose={userMenuClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        classes={{
          paper: 'py-8',
        }}
      >
        {!user.role || user.role.length === 0 ? (
          <>
            <MenuItem component={Link} to="/login" role="button">
              <ListItemIcon className="min-w-40">
                <Icon>lock</Icon>
              </ListItemIcon>
              <ListItemText primary="Login" />
            </MenuItem>
            <MenuItem component={Link} to="/register" role="button">
              <ListItemIcon className="min-w-40">
                <Icon>person_add</Icon>
              </ListItemIcon>
              <ListItemText primary="Register" />
            </MenuItem>
          </>
        ) : (
            <>
              <MenuItem component={Link} to="/venapp/profile" onClick={userMenuClose} role="button">
                <ListItemIcon className="min-w-40">
                  <Icon>account_circle</Icon>
                </ListItemIcon>
                <ListItemText primary="My Profile" />
              </MenuItem>
              {/* <MenuItem component={Link} to="/apps/mail" onClick={userMenuClose} role="button">
              <ListItemIcon className="min-w-40">
                <Icon>mail</Icon>
              </ListItemIcon>
              <ListItemText primary="Inbox" />
            </MenuItem> */}
              <MenuItem
                onClick={() => {
                  localStorage.removeItem('cred');
                  dispatch(setLoggedIn(false));
                  dispatch(logoutUser());
                  userMenuClose();
                }}
              >
                <ListItemIcon className="min-w-40">
                  <Icon>exit_to_app</Icon>
                </ListItemIcon>
                <ListItemText primary="Logout" />
              </MenuItem>
            </>
          )}
      </Popover>
    </>
  );
}

export default UserMenu;
