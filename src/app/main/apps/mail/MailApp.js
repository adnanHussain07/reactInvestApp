import FusePageCarded from '@fuse/core/FusePageCarded';
import withReducer from 'app/store/withReducer';
import { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import MailDetails from './mail/MailDetails';
import MailToolbar from './mail/MailToolbar';
import MailAppHeader from './MailAppHeader';
import MailAppSidebarContent from './MailAppSidebarContent';
import MailAppSidebarHeader from './MailAppSidebarHeader';
import MailList from './mails/MailList';
import MailsToolbar from './mails/MailsToolbar';
import reducer from './store';
import { getFilters } from './store/filtersSlice';
import { getFolders } from './store/foldersSlice';
import { getLabels } from './store/labelsSlice';

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
  '& .FusePageCarded-content': {
    display: 'flex',
    flexDirection: 'column',
  },
}));

function MailApp(props) {
  const dispatch = useDispatch();

  const pageLayout = useRef(null);
  const routeParams = useParams();

  useEffect(() => {
    dispatch(getFilters());
    dispatch(getFolders());
    dispatch(getLabels());
  }, [dispatch]);

  return (
    <Root
      header={<MailAppHeader pageLayout={pageLayout} />}
      contentToolbar={routeParams.mailId ? <MailToolbar /> : <MailsToolbar />}
      content={routeParams.mailId ? <MailDetails /> : <MailList />}
      leftSidebarHeader={<MailAppSidebarHeader />}
      leftSidebarContent={<MailAppSidebarContent />}
      ref={pageLayout}
      innerScroll
    />
  );
}

export default withReducer('mailApp', reducer)(MailApp);
