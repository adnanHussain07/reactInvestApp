import FusePageSimple from '@fuse/core/FusePageSimple';
import withReducer from 'app/store/withReducer';
import { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { styled } from '@mui/material/styles';
import LabelsDialog from './dialogs/labels/LabelsDialog';
import NoteDialog from './dialogs/note/NoteDialog';
import NewNote from './NewNote';
import NoteList from './NoteList';
import NotesHeader from './NotesHeader';
import NotesSidebarContent from './NotesSidebarContent';
import reducer from './store';
import { getLabels } from './store/labelsSlice';
import { getNotes } from './store/notesSlice';

const Root = styled(FusePageSimple)(({ theme }) => ({
  '& .FusePageSimple-header': {
    minHeight: 72,
    height: 72,
  },
  '& .FusePageSimple-contentWrapper': {
    padding: 16,
    paddingBottom: 80,
    [theme.breakpoints.up('sm')]: {
      padding: 24,
    },
  },
  '& .FusePageSimple-content': {
    display: 'flex',
    minHeight: '100%',
  },
  '& .FusePageSimple-sidebar': {
    width: 256,
    border: 0,
  },
}));

function NotesApp(props) {
  const dispatch = useDispatch();

  const pageLayout = useRef(null);

  useEffect(() => {
    dispatch(getNotes());
    dispatch(getLabels());
  }, [dispatch]);

  return (
    <>
      <Root
        header={<NotesHeader pageLayout={pageLayout} />}
        content={
          <div className="flex flex-col w-full items-center">
            <NewNote />
            <NoteList />
            <NoteDialog />
            <LabelsDialog />
          </div>
        }
        leftSidebarContent={<NotesSidebarContent />}
        sidebarInner
        ref={pageLayout}
      />
    </>
  );
}

export default withReducer('notesApp', reducer)(NotesApp);
