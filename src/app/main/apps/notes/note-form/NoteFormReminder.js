import Icon from '@mui/material/Icon';
import { DateTimePicker } from '@mui/lab';
import TextField from '@mui/material/TextField';

function NoteFormReminder(props) {
  const reminder = new Date(props.reminder);
  return (
    <DateTimePicker
      clearable
      showTodayButton
      disablePast
      value={reminder}
      onChange={props.onChange}
      renderInput={(_props) => (
        <TextField
          sx={{
            '& .MuiInputAdornment-root': {
              minWidth: 40,
              minHeight: 40,
              m: 0,
            },
            '& .MuiOutlinedInput-notchedOutline': {
              display: 'none',
            },
            '& .MuiInputBase-input': {
              position: 'absolute',
              pointerEvents: 'none',
              visibility: 'hidden',
            },
          }}
          {..._props}
        />
      )}
      components={{ OpenPickerIcon: () => <Icon fontSize="small">notifications_active</Icon> }}
    />
  );
}

export default NoteFormReminder;
