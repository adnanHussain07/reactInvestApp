import DemoContent from '@fuse/core/DemoContent';
import { styled } from '@mui/material/styles';
import DemoSidebarContent from '@fuse/core/DemoSidebarContent';
import FusePageCarded from '@fuse/core/FusePageCarded';
import Hidden from '@mui/material/Hidden';
import Icon from '@mui/material/Icon';
import IconButton from '@mui/material/IconButton';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import { useRef, useState } from 'react';

const Root = styled(FusePageCarded)({
  '& .FusePageCarded-header': {},
  '& .FusePageCarded-toolbar': {},
  '& .FusePageCarded-content': {},
  '& .FusePageCarded-sidebarHeader': {},
  '& .FusePageCarded-sidebarContent': {},
});

function CardedLeftSidebar2TabbedSample() {
  const [selectedTab, setSelectedTab] = useState(0);
  const pageLayout = useRef(null);

  const handleTabChange = (event, value) => {
    setSelectedTab(value);
  };

  return (
    <Root
      header={
        <div className="flex flex-col flex-1">
          <div className="flex items-center py-24">
            <Hidden lgUp>
              <IconButton
                onClick={(ev) => pageLayout.current.toggleLeftSidebar()}
                aria-label="open left sidebar"
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
        <Tabs
          value={selectedTab}
          onChange={handleTabChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons={false}
          className="w-full h-64"
        >
          <Tab className="h-64" label="Item One" />
          <Tab className="h-64" label="Item Two" />
          <Tab className="h-64" label="Item Three" />
          <Tab className="h-64" label="Item Four" />
          <Tab className="h-64" label="Item Five" />
          <Tab className="h-64" label="Item Six" />
          <Tab className="h-64" label="Item Seven" />
        </Tabs>
      }
      content={
        <div className="p-24">
          {selectedTab === 0 && (
            <div>
              <h3 className="mb-16">Item One</h3>
              <DemoContent />
            </div>
          )}
          {selectedTab === 1 && (
            <div>
              <h3 className="mb-16">Item Two</h3>
              <DemoContent />
            </div>
          )}
          {selectedTab === 2 && (
            <div>
              <h3 className="mb-16">Item Three</h3>
              <DemoContent />
            </div>
          )}
          {selectedTab === 3 && (
            <div>
              <h3 className="mb-16">Item Four</h3>
              <DemoContent />
            </div>
          )}
          {selectedTab === 4 && (
            <div>
              <h3 className="mb-16">Item Five</h3>
              <DemoContent />
            </div>
          )}
          {selectedTab === 5 && (
            <div>
              <h3 className="mb-16">Item Six</h3>
              <DemoContent />
            </div>
          )}
          {selectedTab === 6 && (
            <div>
              <h3 className="mb-16">Item Seven</h3>
              <DemoContent />
            </div>
          )}
        </div>
      }
      leftSidebarHeader={
        <div className="p-24">
          <h4>Sidebar Header</h4>
        </div>
      }
      leftSidebarContent={
        <div className="p-24">
          <h4>Sidebar Content</h4>
          <br />
          <DemoSidebarContent />
        </div>
      }
      innerScroll
      ref={pageLayout}
    />
  );
}

export default CardedLeftSidebar2TabbedSample;
