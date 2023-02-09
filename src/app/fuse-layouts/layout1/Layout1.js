import FuseDialog from '@fuse/core/FuseDialog';
import { styled } from '@mui/material/styles';
import FuseMessage from '@fuse/core/FuseMessage';
import FuseSuspense from '@fuse/core/FuseSuspense';
import AppContext from 'app/AppContext';
import SettingsPanel from 'app/fuse-layouts/shared-components/SettingsPanel';
import React, { memo, useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import FooterLayout1 from './components/FooterLayout1';
import LeftSideLayout1 from './components/LeftSideLayout1';
import NavbarWrapperLayout1 from './components/NavbarWrapperLayout1';
import RightSideLayout1 from './components/RightSideLayout1';
import ToolbarLayout1 from './components/ToolbarLayout1';
import ResetPasswordDialog from '../shared-components/ResetPasswordDialog';
import TwoFAAuth from '../shared-components/TwoFAAuth';
import DepositNowDialog from '../shared-components/DepositNowDialog';
import WithdrawNowDialog from '../shared-components/WithdrawNowDialog';
import history from '@history';
import { setLoggedIn } from 'app/auth/store/sharedData';
import { setUser, logoutUser } from 'app/auth/store/userSlice';
import { getChat } from '../shared-components/chatPanel/store/chatSlice';
import { setSelectedContactId } from '../shared-components/chatPanel/store/contactsSlice';
import { checkGimminie } from 'app/auth/store/loginSlice';
import { getDashboard } from 'app/auth/store/commonServices';

const Root = styled('div')(({ theme, config }) => ({
  ...(config.mode === 'boxed' && {
    clipPath: 'inset(0)',
    maxWidth: `${config.containerWidth}px`,
    margin: '0 auto',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
  }),
  ...(config.mode === 'container' && {
    '& .container': {
      maxWidth: `${config.containerWidth}px`,
      width: '100%',
      margin: '0 auto',
    },
  }),
}));

function Layout1(props) {
  const dispatch = useDispatch();
  const config = useSelector(({ fuse }) => fuse.settings.current.layout.config);
  const loggedin = useSelector(({ auth }) => auth.sharedData.loggedin);
  // const user = useSelector(({ auth }) => auth.user);
  const appContext = useContext(AppContext);
  const { routes } = appContext;

  React.useEffect(() => {
    let mounted = true;
    if (mounted) {
      if (!localStorage.getItem('loggedout')) {
        dispatch(getDashboard(""));
      }
      const data = localStorage.getItem('ghuid') ? JSON.parse(localStorage.getItem('ghuid')) : false;
      if (localStorage.getItem('cred') && localStorage.getItem('cred') == '1') {
        dispatch(setLoggedIn(true));
      }
      if (data) {
        dispatch(checkGimminie(data.roleid ? data.roleid : 0));
        dispatch(setUser(data));
      } else {
        // dispatch(setLoggedIn(false));
        // dispatch(logoutUser());
      }
    }
    return () => mounted = false;
  }, []);

  return (
    <Root id="fuse-layout" config={config} className="w-full flex">
      <ResetPasswordDialog />
      <TwoFAAuth />
      <DepositNowDialog />
      <WithdrawNowDialog />
      {config.leftSidePanel.display && <LeftSideLayout1 />}

      <div className="flex flex-auto min-w-0">
        {config.navbar.display && config.navbar.position === 'left' && <NavbarWrapperLayout1 />}

        <main id="fuse-main" className="flex flex-col flex-auto min-h-screen min-w-0 relative z-10">
          {config.toolbar.display && (
            <ToolbarLayout1 className={config.toolbar.style === 'fixed' && 'sticky top-0'} />
          )}

          {/* <div className="sticky top-0 z-99">
            <SettingsPanel />
          </div> */}

          <div className="flex flex-col flex-auto min-h-0 relative z-10">
            <FuseDialog />

            <FuseSuspense>{renderRoutes(routes)}</FuseSuspense>

            {props.children}
          </div>

          {config.footer.display && (
            <FooterLayout1 className={config.footer.style === 'fixed' && 'sticky bottom-0'} />
          )}
        </main>

        {config.navbar.display && config.navbar.position === 'right' && <NavbarWrapperLayout1 />}
      </div>

      {config.rightSidePanel.display && <RightSideLayout1 />}
      <FuseMessage />
    </Root>
  );
}

export default memo(Layout1);
