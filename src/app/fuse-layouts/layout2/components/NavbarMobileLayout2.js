import FuseScrollbars from '@fuse/core/FuseScrollbars';
import { styled, useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Hidden from '@mui/material/Hidden';
import Icon from '@mui/material/Icon';
import Logo from 'app/fuse-layouts/shared-components/Logo';
import NavbarToggleButton from 'app/fuse-layouts/shared-components/NavbarToggleButton';
import Navigation from 'app/fuse-layouts/shared-components/Navigation';
import UserNavbarHeader from 'app/fuse-layouts/shared-components/UserNavbarHeader';
import clsx from 'clsx';
import { memo } from 'react';

const Root = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  color: theme.palette.text.primary,

  '& .NavbarMobileLayout2-content': {
    overflowX: 'hidden',
    overflowY: 'auto',
    WebkitOverflowScrolling: 'touch',
    background:
      'linear-gradient(rgba(0, 0, 0, 0) 30%, rgba(0, 0, 0, 0) 30%), linear-gradient(rgba(0, 0, 0, 0.25) 0, rgba(0, 0, 0, 0) 40%)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100% 40px, 100% 10px',
    backgroundAttachment: 'local, scroll',
  },
}));

function NavbarMobileLayout2(props) {
  const theme = useTheme();

  return (
    <Root className={clsx('flex flex-col h-full overflow-hidden', props.className)}>
      <AppBar
        color="primary"
        position="static"
        className="flex flex-row items-center flex-shrink h-48 md:h-64 min-h-48 md:min-h-64 px-12 shadow-0"
      >
        <div className="flex flex-1 mx-8">
          <Logo />
        </div>

        <Hidden lgDown>
          <NavbarToggleButton className="w-40 h-40 p-0" />
        </Hidden>

        <Hidden lgUp>
          <NavbarToggleButton className="w-40 h-40 p-0">
            <Icon>{theme.direction === 'ltr' ? 'arrow_back' : 'arrow_forward'}"</Icon>
          </NavbarToggleButton>
        </Hidden>
      </AppBar>

      <FuseScrollbars
        className="NavbarMobileLayout2-content"
        option={{ suppressScrollX: true, wheelPropagation: false }}
      >
        <UserNavbarHeader />

        <Navigation layout="vertical" />
      </FuseScrollbars>
    </Root>
  );
}

export default memo(NavbarMobileLayout2);
