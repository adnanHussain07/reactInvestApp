import { Controller, useForm } from 'react-hook-form';

import { yupResolver } from '@hookform/resolvers/yup';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Icon from '@mui/material/Icon';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as yup from 'yup';
import _ from '@lodash';
import { removeList, renameList } from '../store/boardSlice';

/**
 * Form Validation Schema
 */
const schema = yup.object().shape({
  title: yup.string().required('You must enter a title'),
});

function BoardListHeader(props) {
  const dispatch = useDispatch();
  const board = useSelector(({ scrumboardApp }) => scrumboardApp.board);

  const [anchorEl, setAnchorEl] = useState(null);
  const [formOpen, setFormOpen] = useState(false);

  const { control, formState, handleSubmit, reset } = useForm({
    mode: 'onChange',
    defaultValues: {
      title: props.list.name,
    },
    resolver: yupResolver(schema),
  });

  const { isValid, dirtyFields, errors } = formState;

  useEffect(() => {
    if (!formOpen) {
      reset({
        title: props.list.name,
      });
    }
  }, [formOpen, reset, props.list.name]);

  useEffect(() => {
    if (formOpen && anchorEl) {
      setAnchorEl(null);
    }
  }, [anchorEl, formOpen]);

  function handleMenuClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleMenuClose() {
    setAnchorEl(null);
  }

  function handleOpenForm(ev) {
    ev.stopPropagation();
    setFormOpen(true);
  }

  function handleCloseForm() {
    setFormOpen(false);
  }

  function onSubmit(data) {
    dispatch(renameList({ boardId: board.id, listId: props.list.id, listTitle: data.title }));
    handleCloseForm();
  }

  return (
    <div {...props.handleProps}>
      <div className="flex items-center justify-between h-48 sm:h-64 px-8">
        <div className="flex items-center min-w-0 px-12">
          {formOpen ? (
            <ClickAwayListener onClickAway={handleCloseForm}>
              <form className="flex w-full" onSubmit={handleSubmit(onSubmit)}>
                <Controller
                  name="title"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      variant="outlined"
                      margin="none"
                      autoFocus
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton
                              type="submit"
                              disabled={_.isEmpty(dirtyFields) || !isValid}
                              size="large"
                            >
                              <Icon>check</Icon>
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                    />
                  )}
                />
              </form>
            </ClickAwayListener>
          ) : (
            <Typography className="text-16 font-medium cursor-pointer" onClick={handleOpenForm}>
              {props.list.name}
            </Typography>
          )}
        </div>
        <div className="">
          <IconButton
            aria-owns={anchorEl ? 'actions-menu' : null}
            aria-haspopup="true"
            onClick={handleMenuClick}
            variant="outlined"
            size="small"
          >
            <Icon className="text-20">more_vert</Icon>
          </IconButton>
          <Menu
            id="actions-menu"
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
            <MenuItem
              onClick={() => {
                dispatch(removeList({ boardId: board.id, listId: props.list.id }));
              }}
            >
              <ListItemIcon className="min-w-40">
                <Icon>delete</Icon>
              </ListItemIcon>
              <ListItemText primary="Remove List" />
            </MenuItem>
            <MenuItem onClick={handleOpenForm}>
              <ListItemIcon className="min-w-40">
                <Icon>edit</Icon>
              </ListItemIcon>
              <ListItemText primary="Rename List" />
            </MenuItem>
          </Menu>
        </div>
      </div>
    </div>
  );
}

export default BoardListHeader;
