import DemoContent from '@fuse/core/DemoContent';
import { styled } from '@mui/material/styles';
import DemoSidebarContent from '@fuse/core/DemoSidebarContent';
import FusePageCarded from '@fuse/core/FusePageCarded';
import Hidden from '@mui/material/Hidden';
import Icon from '@mui/material/Icon';
import IconButton from '@mui/material/IconButton';
import { useRef } from 'react';

const Root = styled(FusePageCarded)({
  '& .FusePageCarded-header': {},
  '& .FusePageCarded-toolbar': {},
  '& .FusePageCarded-content': {},
  '& .FusePageCarded-sidebarHeader': {},
  '& .FusePageCarded-sidebarContent': {},
});
function CardedRightSidebarSample() {
  const pageLayout = useRef(null);

  return (
    <Root
      header={
        <div className="flex flex-col flex-1">
          <div className="flex items-center py-24">
            <Hidden lgUp>
              <IconButton
                onClick={(ev) => pageLayout.current.toggleRightSidebar()}
                aria-label="open right sidebar"
                size="large"
              >
                <Icon>menu</Icon>
              </IconButton>
            </Hidden>
            <div className="flex-1">
              <h4>Header</h4>
            </div>
          </div>
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

export default CardedRightSidebarSample;
