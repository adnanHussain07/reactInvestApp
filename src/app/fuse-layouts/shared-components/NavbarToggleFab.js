import Fab from '@mui/material/Fab';
import { styled, useTheme } from '@mui/material/styles';
import Icon from '@mui/material/Icon';

import Tooltip from '@mui/material/Tooltip';
import useMediaQuery from '@mui/material/useMediaQuery';
import { navbarToggle, navbarToggleMobile } from 'app/store/fuse/navbarSlice';
import clsx from 'clsx';
import { useDispatch, useSelector } from 'react-redux';

const Root = styled(Tooltip)(({ theme, position }) => ({
  '& > .button': {
    height: 40,
    position: 'absolute',
    zIndex: 99,
    top: 12,
    width: 24,
    borderRadius: 38,
    padding: 8,
    backgroundColor: theme.palette.background.paper,
    transition: theme.transitions.create(
      ['background-color', 'border-radius', 'width', 'min-width', 'padding'],
      {
        easing: theme.transitions.easing.easeInOut,
        duration: theme.transitions.duration.shorter,
      }
    ),
    '&:hover': {
      width: 52,
      paddingLeft: 8,
      paddingRight: 8,
    },

    '& > .button-icon': {
      fontSize: 18,
      transition: theme.transitions.create(['transform'], {
        easing: theme.transitions.easing.easeInOut,
        duration: theme.transitions.duration.short,
      }),
    },

    ...(position === 'left' && {
      borderBottomLeftRadius: 0,
      borderTopLeftRadius: 0,
      paddingLeft: 4,
      left: 0,
    }),

    ...(position === 'right' && {
      borderBottomRightRadius: 0,
      borderTopRightRadius: 0,
      paddingRight: 4,
      right: 0,
      '& > .button-icon': {
        transform: 'rotate(-180deg)',
      },
    }),
  },
}));

function NavbarToggleFab(props) {
  const theme = useTheme();
  const mdDown = useMediaQuery(theme.breakpoints.down('lg'));
  const config = useSelector(({ fuse }) => fuse.settings.current.layout.config);

  const dispatch = useDispatch();

  return (
    <Root
      title="Show Navigation"
      placement={config.navbar.position === 'left' ? 'right' : 'left'}
      position={config.navbar.position}
    >
      <Fab
        className={clsx('button', props.className)}
        onClick={(ev) => dispatch(mdDown ? navbarToggleMobile() : navbarToggle())}
        disableRipple
      >
        <Icon className="button-icon" color="action">
          menu
        </Icon>
      </Fab>
    </Root>
  );
}

NavbarToggleFab.defaultProps = {};

export default NavbarToggleFab;
