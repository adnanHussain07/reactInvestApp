import FusePageCarded from '@fuse/core/FusePageCarded';
import withReducer from 'app/store/withReducer';
import { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useDeepCompareEffect } from '@fuse/hooks';
import { styled } from '@mui/material/styles';
import reducer from './store';
import { getLabels } from './store/labelsSlice';
import { getFilters } from './store/filtersSlice';
import { getFolders } from './store/foldersSlice';
import { getTodos } from './store/todosSlice';
import TodoDialog from './TodoDialog';
import TodoHeader from './TodoHeader';
import TodoList from './TodoList';
import TodoSidebarContent from './TodoSidebarContent';
import TodoSidebarHeader from './TodoSidebarHeader';
import TodoToolbar from './TodoToolbar';

const Root = styled(FusePageCarded)(({ theme }) => ({
  '& .FusePageCarded-header': {
    minHeight: 72,
    height: 72,
    alignItems: 'center',
    [theme.breakpoints.up('sm')]: {
      minHeight: 136,
      height: 136,
    },
  },
}));

function TodoApp(props) {
  const dispatch = useDispatch();

  const pageLayout = useRef(null);
  const routeParams = useParams();

  useEffect(() => {
    dispatch(getFilters());
    dispatch(getFolders());
    dispatch(getLabels());
  }, [dispatch]);

  useDeepCompareEffect(() => {
    dispatch(getTodos(routeParams));
  }, [dispatch, routeParams]);

  return (
    <>
      <Root
        header={<TodoHeader pageLayout={pageLayout} />}
        contentToolbar={<TodoToolbar />}
        content={<TodoList />}
        leftSidebarHeader={<TodoSidebarHeader />}
        leftSidebarContent={<TodoSidebarContent />}
        ref={pageLayout}
        innerScroll
      />
      <TodoDialog />
    </>
  );
}

export default withReducer('todoApp', reducer)(TodoApp);
