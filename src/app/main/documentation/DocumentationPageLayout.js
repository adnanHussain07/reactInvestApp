import Hidden from '@mui/material/Hidden';
import Icon from '@mui/material/Icon';
import IconButton from '@mui/material/IconButton';
import clsx from 'clsx';
import { useRef } from 'react';
import FuseNavigation from '@fuse/core/FuseNavigation/FuseNavigation';
import FusePageSimple from '@fuse/core/FusePageSimple/FusePageSimple';
import FuseSuspense from '@fuse/core/FuseSuspense';
import { renderRoutes } from 'react-router-config';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import DocumentationNavigation from './DocumentationNavigation';
import DocumentationPageBreadcrumb from './DocumentationPageBreadcrumb';

const Root = styled(FusePageSimple)(({ theme }) => ({
  height: '100%',
  '& .FusePageSimple-header': {
    minHeight: 64,
    height: 64,
  },
  '& .FusePageSimple-wrapper': {
    minHeight: 0,
  },
  '& .FusePageSimple-content': {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    padding: 16,
    [theme.breakpoints.up('md')]: {
      padding: 24,
    },
  },
  '& .FusePageSimple-sidebar': {
    width: 288,
    paddingTop: 8,
  },
  '& .description': {
    fontSize: 20,
    marginBottom: 40,
  },
}));

function DocumentationPageLayout({ content, route }) {
  const pageLayout = useRef(null);

  return (
    <Root
      header={
        <div className="flex items-center justify-center px-4 md:px-12 h-full w-full">
          <Hidden lgUp>
            <IconButton
              onClick={(ev) => pageLayout.current.toggleLeftSidebar()}
              aria-label="open left sidebar"
              size="large"
            >
              <Icon>menu</Icon>
            </IconButton>
          </Hidden>
          <div className="flex flex-1 items-center sm:justify-center px-8 lg:px-12">
            <Link
              color="inherit"
              to="/documentation"
              className="text-14 md:text-18 font-medium flex items-center"
              role="button"
            >
              <Icon className="mr-8">import_contacts</Icon> <span>Fuse React - Documentation</span>
            </Link>
          </div>
        </div>
      }
      content={
        <div className="max-w-2xl min-h-full flex flex-auto flex-col">
          <DocumentationPageBreadcrumb />
          <div className="flex flex-col flex-1 relative py-32">
            <FuseSuspense>{renderRoutes(route.routes)}</FuseSuspense>
          </div>
        </div>
      }
      leftSidebarContent={
        <FuseNavigation
          className={clsx('navigation')}
          navigation={DocumentationNavigation.children}
        />
      }
      innerScroll
      ref={pageLayout}
    />
  );
}

export default DocumentationPageLayout;
