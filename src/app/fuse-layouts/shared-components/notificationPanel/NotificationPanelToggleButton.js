import Badge from '@mui/material/Badge';
import Icon from '@mui/material/Icon';
import IconButton from '@mui/material/IconButton';
import { useSelector, useDispatch } from 'react-redux';
import withReducer from 'app/store/withReducer';
import reducer from './store';
import { addNotification, selectNotifications } from './store/dataSlice';
import { toggleNotificationPanel } from './store/stateSlice';
import NotificationModel from './model/NotificationModel';

function NotificationPanelToggleButton(props) {
  const notifications = useSelector(selectNotifications);

  const dispatch = useDispatch();
  function createNotification(obj) {
    dispatch(addNotification(NotificationModel(obj)));
  }
  return (
    <IconButton
      className="w-40 h-40"
      onClick={(ev) => {
        dispatch(toggleNotificationPanel());
        createNotification({
          message: 'Your investments are in profit',
          options: { variant: 'warning' },
        });

        createNotification({
          message: 'This is some general information.',
          options: { variant: 'info' },
        });
      }}
      size="large"
    >
      <Badge color="secondary" variant="dot" invisible={notifications.length === 0}>
        {props.children}
      </Badge>
    </IconButton>
  );
}

NotificationPanelToggleButton.defaultProps = {
  children: <Icon>notifications</Icon>,
};

export default withReducer('notificationPanel', reducer)(NotificationPanelToggleButton);
