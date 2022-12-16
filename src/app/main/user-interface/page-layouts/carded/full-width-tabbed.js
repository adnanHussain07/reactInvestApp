import DemoContent from '@fuse/core/DemoContent';
import { styled } from '@mui/material/styles';
import FusePageCarded from '@fuse/core/FusePageCarded';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import { useState } from 'react';

const Root = styled(FusePageCarded)({
  '& .FusePageCarded-header': {},
  '& .FusePageCarded-toolbar': {},
  '& .FusePageCarded-content': {},
  '& .FusePageCarded-sidebarHeader': {},
  '& .FusePageCarded-sidebarContent': {},
});

function CardedFullWidthTabbedSample() {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabChange = (event, value) => {
    setSelectedTab(value);
  };

  return (
    <Root
      header={
        <div className="py-24">
          <h4>Header</h4>
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
    />
  );
}

export default CardedFullWidthTabbedSample;
