import { yupResolver } from '@hookform/resolvers/yup';
import { DateTimePicker } from '@mui/lab';
import { Controller, useForm } from 'react-hook-form';
import FuseUtils from '@fuse/utils';
import _ from '@lodash';
import AppBar from '@mui/material/AppBar';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import { amber, red } from '@mui/material/colors';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import Divider from '@mui/material/Divider';
import FormControl from '@mui/material/FormControl';
import Icon from '@mui/material/Icon';
import IconButton from '@mui/material/IconButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as yup from 'yup';
import { selectLabels } from './store/labelsSlice';
import {
  removeTodo,
  addTodo,
  closeNewTodoDialog,
  closeEditTodoDialog,
  updateTodo,
} from './store/todosSlice';

const defaultValues = {
  id: '',
  title: '',
  notes: '',
  startDate: new Date(),
  dueDate: new Date(),
  completed: false,
  starred: false,
  important: false,
  deleted: false,
  labels: [],
};

/**
 * Form Validation Schema
 */
const schema = yup.object().shape({
  title: yup.string().required('You must enter a title'),
});

function TodoDialog(props) {
  const dispatch = useDispatch();
  const todoDialog = useSelector(({ todoApp }) => todoApp.todos.todoDialog);
  const labels = useSelector(selectLabels);

  const [labelMenuEl, setLabelMenuEl] = useState(null);
  const { watch, handleSubmit, formState, reset, control, setValue } = useForm({
    mode: 'onChange',
    defaultValues,
    resolver: yupResolver(schema),
  });

  const { errors, isValid, dirtyFields } = formState;
  const formId = watch('id');
  const formLabels = watch('labels');
  const dueDate = watch('deuDate');
  const startDate = watch('startDate');

  /**
   * Initialize Dialog with Data
   */
  const initDialog = useCallback(() => {
    /**
     * Dialog type: 'edit'
     */
    if (todoDialog.type === 'edit' && todoDialog.data) {
      reset({ ...todoDialog.data });
    }

    /**
     * Dialog type: 'new'
     */
    if (todoDialog.type === 'new') {
      reset({
        ...defaultValues,
        ...todoDialog.data,
      });
    }
  }, [todoDialog.data, todoDialog.type, reset]);

  /**
   * On Dialog Open
   */
  useEffect(() => {
    if (todoDialog.props.open) {
      initDialog();
    }
  }, [todoDialog.props.open, initDialog]);

  /**
   * Close Dialog
   */
  function closeTodoDialog() {
    return todoDialog.type === 'edit'
      ? dispatch(closeEditTodoDialog())
      : dispatch(closeNewTodoDialog());
  }

  /**
   * Form Submit
   */
  function onSubmit(data) {
    if (todoDialog.type === 'new') {
      dispatch(addTodo({ id: FuseUtils.generateGUID(), ...data }));
    } else {
      dispatch(updateTodo({ ...todoDialog.data, ...data }));
    }
    closeTodoDialog();
  }

  /**
   * Remove Event
   */
  function handleRemove() {
    dispatch(removeTodo(formId)).then(() => {
      closeTodoDialog();
    });
  }

  return (
    <Dialog {...todoDialog.props} onClose={closeTodoDialog} fullWidth maxWidth="sm" scroll="body">
      <AppBar position="static" elevation={0}>
        <Toolbar className="flex w-full">
          <Typography variant="subtitle1" color="inherit">
            {todoDialog.type === 'new' ? 'New Todo' : 'Edit Todo'}
          </Typography>
        </Toolbar>
      </AppBar>
      <form onSubmit={handleSubmit(onSubmit)}>
        <DialogContent classes={{ root: 'p-0' }}>
          <div className="mb-16">
            <div className="flex items-center justify-between p-12">
              <div className="flex">
                <Controller
                  name="completed"
                  control={control}
                  render={({ field: { onChange, value } }) => (
                    <IconButton
                      tabIndex={-1}
                      disableRipple
                      onClick={(ev) => onChange(!value)}
                      size="large"
                    >
                      {value ? (
                        <Icon color="secondary">check_circle</Icon>
                      ) : (
                        <Icon color="action">radio_button_unchecked</Icon>
                      )}
                    </IconButton>
                  )}
                />
              </div>

              <div className="flex items-center justify-start">
                <Controller
                  name="important"
                  control={control}
                  render={({ field: { onChange, value } }) => (
                    <IconButton onClick={() => onChange(!value)} size="large">
                      {value ? (
                        <Icon style={{ color: red[500] }}>error</Icon>
                      ) : (
                        <Icon>error_outline</Icon>
                      )}
                    </IconButton>
                  )}
                />

                <Controller
                  name="starred"
                  control={control}
                  render={({ field: { onChange, value } }) => (
                    <IconButton onClick={() => onChange(!value)} size="large">
                      {value ? (
                        <Icon style={{ color: amber[500] }}>star</Icon>
                      ) : (
                        <Icon>star_outline</Icon>
                      )}
                    </IconButton>
                  )}
                />

                <div>
                  <IconButton
                    aria-owns={labelMenuEl ? 'label-menu' : null}
                    aria-haspopup="true"
                    onClick={(ev) => setLabelMenuEl(ev.currentTarget)}
                    size="large"
                  >
                    <Icon>label</Icon>
                  </IconButton>
                  <Controller
                    name="labels"
                    control={control}
                    render={({ field: { onChange, value: formLabelsVal } }) => (
                      <Menu
                        id="label-menu"
                        anchorEl={labelMenuEl}
                        open={Boolean(labelMenuEl)}
                        onClose={() => setLabelMenuEl(null)}
                      >
                        {labels.length > 0 &&
                          labels.map((label) => (
                            <MenuItem
                              onClick={(ev) => onChange(_.xor(formLabelsVal, [label.id]))}
                              key={label.id}
                            >
                              <ListItemIcon className="min-w-24">
                                <Icon color="action">
                                  {formLabelsVal.includes(label.id)
                                    ? 'check_box'
                                    : 'check_box_outline_blank'}
                                </Icon>
                              </ListItemIcon>
                              <ListItemText
                                className="mx-8"
                                primary={label.title}
                                disableTypography
                              />
                              <ListItemIcon className="min-w-24">
                                <Icon style={{ color: label.color }} color="action">
                                  label
                                </Icon>
                              </ListItemIcon>
                            </MenuItem>
                          ))}
                      </Menu>
                    )}
                  />
                </div>
              </div>
            </div>
            <Divider className="mx-24" />
          </div>

          {formLabels.length > 0 && (
            <div className="flex flex-wrap w-full px-12 sm:px-20 mb-16">
              {formLabels.map((labelId) => {
                const label = _.find(labels, { id: labelId });
                return (
                  <Chip
                    avatar={
                      <Avatar classes={{ colorDefault: 'bg-transparent' }}>
                        <Icon className="text-20" style={{ color: label.color }}>
                          label
                        </Icon>
                      </Avatar>
                    }
                    label={label.title}
                    onDelete={(ev) =>
                      setValue(
                        'labels',
                        formLabels.filter((_id) => labelId !== _id)
                      )
                    }
                    className="mx-4 my-4"
                    classes={{ label: 'px-8' }}
                    key={labelId}
                  />
                );
              })}
            </div>
          )}

          <div className="px-16 sm:px-24">
            <FormControl className="mt-8 mb-16" required fullWidth>
              <Controller
                name="title"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Title"
                    autoFocus
                    error={!!errors.title}
                    helperText={errors?.title?.message}
                    required
                    variant="outlined"
                  />
                )}
              />
            </FormControl>

            <FormControl className="mt-8 mb-16" required fullWidth>
              <Controller
                name="notes"
                control={control}
                render={({ field }) => (
                  <TextField {...field} label="Notes" multiline rows="6" variant="outlined" />
                )}
              />
            </FormControl>

            <div className="flex -mx-4">
              <Controller
                name="startDate"
                control={control}
                defaultValue=""
                render={({ field: { onChange, value } }) => (
                  <DateTimePicker
                    value={value}
                    onChange={onChange}
                    maxDate={dueDate}
                    renderInput={(_props) => (
                      <TextField label="Start Date" className="mt-8 mb-16 mx-4" {..._props} />
                    )}
                  />
                )}
              />

              <Controller
                name="dueDate"
                control={control}
                defaultValue=""
                render={({ field: { onChange, value } }) => (
                  <DateTimePicker
                    value={value}
                    onChange={onChange}
                    minDate={startDate}
                    renderInput={(_props) => (
                      <TextField label="Due Date" className="mt-8 mb-16 mx-4" {..._props} />
                    )}
                  />
                )}
              />
            </div>
          </div>
        </DialogContent>

        {todoDialog.type === 'new' ? (
          <DialogActions className="justify-between px-8 py-16">
            <div className="px-16">
              <Button
                type="submit"
                variant="contained"
                color="secondary"
                disabled={_.isEmpty(dirtyFields) || !isValid}
              >
                Add
              </Button>
            </div>
          </DialogActions>
        ) : (
          <DialogActions className="justify-between px-8 py-16">
            <div className="px-16">
              <Button
                type="submit"
                variant="contained"
                color="secondary"
                disabled={_.isEmpty(dirtyFields) || !isValid}
              >
                Save
              </Button>
            </div>
            <IconButton className="min-w-auto" onClick={handleRemove} size="large">
              <Icon>delete</Icon>
            </IconButton>
          </DialogActions>
        )}
      </form>
    </Dialog>
  );
}

export default TodoDialog;
