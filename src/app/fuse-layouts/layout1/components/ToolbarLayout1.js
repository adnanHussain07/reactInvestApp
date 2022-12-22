import FuseSearch from '@fuse/core/FuseSearch';
import { ThemeProvider } from '@mui/material/styles';
import FuseShortcuts from '@fuse/core/FuseShortcuts';
import AppBar from '@mui/material/AppBar';
import Hidden from '@mui/material/Hidden';
import Toolbar from '@mui/material/Toolbar';
import ChatPanelToggleButton from 'app/fuse-layouts/shared-components/chatPanel/ChatPanelToggleButton';
import NavbarToggleButton from 'app/fuse-layouts/shared-components/NavbarToggleButton';
import QuickPanelToggleButton from 'app/fuse-layouts/shared-components/quickPanel/QuickPanelToggleButton';
import UserMenu from 'app/fuse-layouts/shared-components/UserMenu';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import { memo } from 'react';
import { useSelector } from 'react-redux';
import { selectToolbarTheme } from 'app/store/fuse/settingsSlice';
import AdjustFontSize from '../../shared-components/AdjustFontSize';
import FullScreenToggle from '../../shared-components/FullScreenToggle';
import LanguageSwitcher from '../../shared-components/LanguageSwitcher';
import NotificationPanelToggleButton from '../../shared-components/notificationPanel/NotificationPanelToggleButton';
import { ReqColorCodes } from 'app/auth/store/constants';
import { Button } from '@mui/material';
import i18next from 'i18next';
import history from '@history';

function ToolbarLayout1(props) {
  const config = useSelector(({ fuse }) => fuse.settings.current.layout.config);
  const navbar = useSelector(({ fuse }) => fuse.navbar);
  const toolbarTheme = useSelector(selectToolbarTheme);
  const loggedin = useSelector(({ auth }) => auth.sharedData.loggedin);

  return (
    <ThemeProvider theme={toolbarTheme}>
      <AppBar
        id="fuse-toolbar"
        className={clsx('flex relative z-20 shadow-md', props.className)}
        color="default"
        sx={{ backgroundColor: toolbarTheme.palette.background.paper }}
        position="static"
      >
        <Toolbar className="p-0 min-h-48 md:min-h-64">
          <div className="flex flex-1 px-16">
            {config.navbar.display && config.navbar.position === 'left' && (
              <>
                <Hidden lgDown>
                  {(config.navbar.style === 'style-3' ||
                    config.navbar.style === 'style-3-dense') && (
                      <NavbarToggleButton className="w-40 h-40 p-0 mx-0" />
                    )}

                  {config.navbar.style === 'style-1' && !navbar.open && (
                    <NavbarToggleButton className="w-40 h-40 p-0 mx-0" />
                  )}
                </Hidden>

                <Hidden lgUp>
                  <NavbarToggleButton className="w-40 h-40 p-0 mx-0 sm:mx-8" />
                </Hidden>
              </>
            )}

            <Hidden lgDown>
              <FuseShortcuts />
            </Hidden>
          </div>

          <div className="flex items-center px-8 h-full overflow-x-auto">
            {loggedin ?
              <>
                <LanguageSwitcher />

                <AdjustFontSize />

                <FullScreenToggle />

                {/* <FuseSearch /> */}

                {/* <Hidden lgUp>
  <ChatPanelToggleButton />
</Hidden> */}

                {/* <QuickPanelToggleButton /> */}

                <NotificationPanelToggleButton />

                <UserMenu />
              </>
              :
              <>
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0, transition: { delay: 0.3 } }}
                >
                  <Button
                    // className="whitespace-nowrap"
                    variant="contained"
                    size='medium'
                    color="secondary"
                    onClick={() => history.push('/login')}
                  >
                    {i18next.t(`navigation:LOGIN`)}
                  </Button>
                  <Button
                    className="whitespace-nowrap mx-12"
                    variant="contained"
                    size='medium'
                    style={{
                      color: ReqColorCodes.btnText,
                      backgroundImage: ReqColorCodes.btn,
                    }}
                    onClick={() => history.push('/register')}
                  >
                    {i18next.t(`navigation:REG`)}
                  </Button>
                </motion.div>
              </>}
          </div>

          {config.navbar.display && config.navbar.position === 'right' && (
            <>
              <Hidden lgDown>
                {!navbar.open && <NavbarToggleButton className="w-40 h-40 p-0 mx-0" />}
              </Hidden>

              <Hidden lgUp>
                <NavbarToggleButton className="w-40 h-40 p-0 mx-0 sm:mx-8" />
              </Hidden>
            </>
          )}
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
}

export default memo(ToolbarLayout1);
