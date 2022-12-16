import FusePageSimple from '@fuse/core/FusePageSimple';
import Fab from '@mui/material/Fab';
import Icon from '@mui/material/Icon';
import IconButton from '@mui/material/IconButton';
import withReducer from 'app/store/withReducer';
import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { styled } from '@mui/material/styles';
import Breadcrumb from './Breadcrumb';
import DetailSidebarContent from './DetailSidebarContent';
import DetailSidebarHeader from './DetailSidebarHeader';
import FileList from './FileList';
import MainSidebarContent from './MainSidebarContent';
import MainSidebarHeader from './MainSidebarHeader';
import reducer from './store';
import { selectFileById, getFiles } from './store/filesSlice';

const Root = styled(FusePageSimple)(({ theme }) => ({
  '& .FusePageSimple-header': {
    minHeight: 96,
    height: 96,
    [theme.breakpoints.up('sm')]: {
      minHeight: 160,
      height: 160,
    },
  },
  '& .FusePageSimple-sidebarHeader': {
    minHeight: 96,
    height: 96,
    [theme.breakpoints.up('sm')]: {
      minHeight: 160,
      height: 160,
    },
  },
  '& .FusePageSimple-rightSidebar': {
    width: 320,
  },
}));

function FileManagerApp() {
  const dispatch = useDispatch();
  const selectedItem = useSelector((state) =>
    selectFileById(state, state.fileManagerApp.files.selectedItemId)
  );

  const pageLayout = useRef(null);

  useEffect(() => {
    dispatch(getFiles());
  }, [dispatch]);

  return (
    <Root
      header={
        <div className="flex flex-col flex-1 p-8 sm:p-12 relative">
          <div className="flex items-center justify-between">
            <IconButton
              onClick={(ev) => {
                pageLayout.current.toggleLeftSidebar();
              }}
              aria-label="open left sidebar"
              size="large"
            >
              <Icon>menu</Icon>
            </IconButton>
            <motion.div initial={{ scale: 0 }} animate={{ scale: 1, transition: { delay: 0.2 } }}>
              <IconButton aria-label="search" size="large">
                <Icon>search</Icon>
              </IconButton>
            </motion.div>
          </div>
          <div className="flex flex-1 items-end">
            <Fab
              component={motion.div}
              initial={{ scale: 0 }}
              animate={{ scale: 1, transition: { delay: 0.6 } }}
              color="secondary"
              aria-label="add"
              className="absolute bottom-0 ltr:left-0 rtl:right-0 mx-16 -mb-28 z-999"
            >
              <Icon>add</Icon>
            </Fab>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { delay: 0.6 } }}
            >
              {selectedItem && (
                <Breadcrumb
                  selected={selectedItem}
                  className="flex flex-1 ltr:pl-72 rtl:pr-72 pb-12 text-16 sm:text-24 font-semibold"
                />
              )}
            </motion.div>
          </div>
        </div>
      }
      content={<FileList pageLayout={pageLayout} />}
      leftSidebarVariant="temporary"
      leftSidebarHeader={<MainSidebarHeader />}
      leftSidebarContent={<MainSidebarContent />}
      rightSidebarHeader={<DetailSidebarHeader />}
      rightSidebarContent={<DetailSidebarContent />}
      ref={pageLayout}
      innerScroll
    />
  );
}

export default withReducer('fileManagerApp', reducer)(FileManagerApp);
