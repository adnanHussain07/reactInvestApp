import ClickAwayListener from '@mui/material/ClickAwayListener';
import Icon from '@mui/material/Icon';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import Tooltip from '@mui/material/Tooltip';
import clsx from 'clsx';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box } from '@mui/system';
import { resetNotesSearchText, setNotesSearchText } from './store/notesSlice';

function NotesSearch(props) {
  const dispatch = useDispatch();
  const searchText = useSelector(({ notesApp }) => notesApp.notes.notesSearchText);

  const [search, setSearch] = useState(false);

  function showSearch(ev) {
    ev.stopPropagation();
    setSearch(true);
    document.addEventListener('keydown', escFunction, false);
  }

  function hideSearch() {
    setSearch(false);
    dispatch(resetNotesSearchText());
    document.removeEventListener('keydown', escFunction, false);
  }

  function escFunction(event) {
    if (event.keyCode === 27) {
      hideSearch();
    }
  }

  function handleClickAway() {
    hideSearch();
  }

  return (
    <div className={clsx('flex', props.className)}>
      <Tooltip title="Click to search" placement="bottom">
        <div onClick={showSearch} onKeyDown={showSearch} role="button" tabIndex={0}>
          {props.trigger}
        </div>
      </Tooltip>

      {search && (
        <ClickAwayListener onClickAway={handleClickAway}>
          <div className="absolute left-0 right-0 top-0 bottom-0 h-full z-9999 px-8 sm:px-24">
            <Box
              sx={{
                backgroundColor: (theme) => theme.palette.primary.dark,
              }}
              className="flex items-center w-full h-full"
            >
              <Input
                placeholder="Search for anything"
                className="flex flex-1 py-0 px-16 h-64"
                disableUnderline
                fullWidth
                value={searchText}
                inputProps={{
                  'aria-label': 'Search',
                }}
                onChange={(ev) => dispatch(setNotesSearchText(ev))}
                autoFocus
              />

              <IconButton onClick={hideSearch} className="mx-8" size="large">
                <Icon>close</Icon>
              </IconButton>
            </Box>
          </div>
        </ClickAwayListener>
      )}
    </div>
  );
}

NotesSearch.propTypes = {};
NotesSearch.defaultProps = {
  trigger: (
    <IconButton className="w-64 h-64" size="large">
      <Icon>search</Icon>
    </IconButton>
  ),
};

export default NotesSearch;
