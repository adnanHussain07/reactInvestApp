import ChatPanel from 'app/fuse-layouts/shared-components/chatPanel/ChatPanel';
import QuickPanel from 'app/fuse-layouts/shared-components/quickPanel/QuickPanel';
import NotificationPanel from 'app/fuse-layouts/shared-components/notificationPanel/NotificationPanel';
import { memo } from 'react';
import { useSelector } from 'react-redux';

function RightSideLayout1(props) {
  const state = useSelector(({ chatPanel }) => chatPanel.state);
  return (
    <>
      {state && (
        <ChatPanel />
      )}
      {/* <ChatPanel />

      <QuickPanel /> */}

      <NotificationPanel />
    </>
  );
}

export default memo(RightSideLayout1);
