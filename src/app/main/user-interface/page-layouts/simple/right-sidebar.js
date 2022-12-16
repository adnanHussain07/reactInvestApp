import DemoContent from '@fuse/core/DemoContent';
import { styled } from '@mui/material/styles';
import DemoSidebarContent from '@fuse/core/DemoSidebarContent';
import FusePageSimple from '@fuse/core/FusePageSimple';
import Hidden from '@mui/material/Hidden';
import Icon from '@mui/material/Icon';
import IconButton from '@mui/material/IconButton';
import { useRef } from 'react';

const Root = styled(FusePageSimple)({
  '& .FusePageSimple-header': {},
  '& .FusePageSimple-toolbar': {},
  '& .FusePageSimple-content': {},
  '& .FusePageSimple-sidebarHeader': {},
  '& .FusePageSimple-sidebarContent': {},
});

function SimpleRightSidebarSample() {
  const pageLayout = useRef(null);

  return (
    <Root
      header={
        <div className="flex flex-col flex-1">
          <div className="flex items-center p-24 px-12">
            <div className="flex-1 lg:px-12">
              <h4>Header</h4>
            </div>
            <Hidden lgUp>
              <IconButton
                onClick={(ev) => pageLayout.current.toggleRightSidebar()}
                aria-label="open right sidebar"
                size="large"
              >
                <Icon>menu</Icon>
              </IconButton>
            </Hidden>
          </div>{' '}
        </div>
      }
      contentToolbar={
        <div className="px-24">
          <h4>Content Toolbar</h4>
        </div>
      }
      content={
        <div className="p-24">
          <h4>Content</h4>
          <br />
          <DemoContent />
        </div>
      }
      rightSidebarHeader={
        <div className="p-24">
          <h4>Sidebar Header</h4>
        </div>
      }
      rightSidebarContent={
        <div className="p-24">
          <h4>Sidebar Content</h4>
          <br />
          <DemoSidebarContent />
        </div>
      }
      ref={pageLayout}
    />
  );
}

export default SimpleRightSidebarSample;
