import Icon from '@mui/material/Icon';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

function MainSidebarContent() {
  return (
    <List component="nav">
      <ListItem button dense>
        <ListItemIcon className="min-w-40">
          <Icon className="text-20">folder</Icon>
        </ListItemIcon>
        <ListItemText primary="My Files" />
      </ListItem>
      <ListItem button dense>
        <ListItemIcon className="min-w-40">
          <Icon className="text-20">star</Icon>
        </ListItemIcon>
        <ListItemText primary="Starred" />
      </ListItem>
      <ListItem button dense>
        <ListItemIcon className="min-w-40">
          <Icon className="text-20">folder_shared</Icon>
        </ListItemIcon>
        <ListItemText primary="Sharred with me" />
      </ListItem>
      <ListItem button dense>
        <ListItemIcon className="min-w-40">
          <Icon className="text-20">access_time</Icon>
        </ListItemIcon>
        <ListItemText primary="Recent" />
      </ListItem>
      <ListItem button dense>
        <ListItemIcon className="min-w-40">
          <Icon className="text-20">not_interested</Icon>
        </ListItemIcon>
        <ListItemText primary="Offline" />
      </ListItem>
    </List>
  );
}

export default MainSidebarContent;
