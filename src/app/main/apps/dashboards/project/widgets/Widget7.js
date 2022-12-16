import Icon from '@mui/material/Icon';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemSecondaryAction from '@mui/material/ListItemSecondaryAction';
import ListItemText from '@mui/material/ListItemText';
import Paper from '@mui/material/Paper';
import Select from '@mui/material/Select';
import Typography from '@mui/material/Typography';
import { memo, useState } from 'react';
import MenuItem from '@mui/material/MenuItem';

function Widget7(props) {
  const [currentRange, setCurrentRange] = useState(props.widget.currentRange);

  function handleChangeRange(ev) {
    setCurrentRange(ev.target.value);
  }

  return (
    <Paper className="w-full rounded-20 shadow">
      <div className="flex items-center justify-between p-20 h-64 ">
        <Typography className="text-16 font-medium">{props.widget.title}</Typography>

        <Select
          value={currentRange}
          onChange={handleChangeRange}
          inputProps={{
            name: 'currentRange',
          }}
          classes={{ select: 'py-8' }}
          variant="filled"
        >
          {Object.entries(props.widget.ranges).map(([key, n]) => {
            return (
              <MenuItem key={key} value={key}>
                {n}
              </MenuItem>
            );
          })}
        </Select>
      </div>
      <List className="py-0">
        {props.widget.schedule[currentRange].map((item) => (
          <ListItem key={item.id}>
            <ListItemText
              classes={{ root: 'px-8', primary: 'font-medium text-16' }}
              primary={item.title}
              secondary={item.time}
            />
            <ListItemSecondaryAction>
              <IconButton aria-label="more" size="large">
                <Icon>more_vert</Icon>
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
    </Paper>
  );
}

export default memo(Widget7);
