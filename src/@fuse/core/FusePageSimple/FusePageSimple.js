import FuseScrollbars from '@fuse/core/FuseScrollbars';
import { styled } from '@mui/material/styles';
import clsx from 'clsx';
import * as PropTypes from 'prop-types';
import { forwardRef, useImperativeHandle, memo, useRef } from 'react';
import GlobalStyles from '@mui/material/GlobalStyles';
import FusePageSimpleHeader from './FusePageSimpleHeader';
import FusePageSimpleSidebar from './FusePageSimpleSidebar';

const Root = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  minWidth: 0,
  minHeight: '100%',
  position: 'relative',
  flex: '1 1 auto',
  width: '100%',
  height: 'auto',
  backgroundColor: theme.palette.background.default,

  '& .FusePageSimple-innerScroll': {
    height: '100%',
  },

  '& .FusePageSimple-wrapper': {
    display: 'flex',
    flexDirection: 'row',
    flex: '1 1 auto',
    zIndex: 2,
    maxWidth: '100%',
    minWidth: 0,
    height: '100%',
    backgroundColor: theme.palette.background.default,
  },

  '& .FusePageSimple-header': {
    height: headerHeight,
    minHeight: headerHeight,
    display: 'flex',
    background: `linear-gradient(to right, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
    color: theme.palette.primary.contrastText,
    backgroundSize: 'cover',
    backgroundColor: theme.palette.primary.dark,
  },

  '& .FusePageSimple-topBg': {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: headerHeight,
    pointerEvents: 'none',
  },

  '& .FusePageSimple-contentWrapper': {
    display: 'flex',
    flexDirection: 'column',
    flex: '1 1 auto',
    overflow: 'auto',
    WebkitOverflowScrolling: 'touch',
    zIndex: 9999,
  },

  '& .FusePageSimple-toolbar': {
    height: toolbarHeight,
    minHeight: toolbarHeight,
    display: 'flex',
    alignItems: 'center',
  },

  '& .FusePageSimple-content': {
    flex: '1 0 auto',
  },

  '& .FusePageSimple-sidebarWrapper': {
    overflow: 'hidden',
    backgroundColor: 'transparent',
    position: 'absolute',
    '&.permanent': {
      [theme.breakpoints.up('lg')]: {
        position: 'relative',
      },
    },
  },

  '& .FusePageSimple-sidebar': {
    position: 'absolute',
    '&.permanent': {
      [theme.breakpoints.up('lg')]: {
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary,
        position: 'relative',
      },
    },
    width: drawerWidth,
    height: '100%',
  },

  '& .FusePageSimple-leftSidebar': {
    [theme.breakpoints.up('lg')]: {
      borderRight: `1px solid ${theme.palette.divider}`,
      borderLeft: 0,
    },
  },

  '& .FusePageSimple-rightSidebar': {
    [theme.breakpoints.up('lg')]: {
      borderLeft: `1px solid ${theme.palette.divider}`,
      borderRight: 0,
    },
  },

  '& .FusePageSimple-sidebarHeader': {
    height: headerHeight,
    minHeight: headerHeight,
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.primary.contrastText,
  },

  '& .FusePageSimple-sidebarHeaderInnerSidebar': {
    backgroundColor: 'transparent',
    color: 'inherit',
    height: 'auto',
    minHeight: 'auto',
  },

  '& .FusePageSimple-sidebarContent': {},

  '& .FusePageSimple-backdrop': {
    position: 'absolute',
  },
}));

const headerHeight = 120;
const toolbarHeight = 64;
const drawerWidth = 240;

const FusePageSimple = forwardRef((props, ref) => {
  // console.info("render::FusePageSimple");
  const leftSidebarRef = useRef(null);
  const rightSidebarRef = useRef(null);
  const rootRef = useRef(null);

  useImperativeHandle(ref, () => ({
    rootRef,
    toggleLeftSidebar: () => {
      leftSidebarRef.current.toggleSidebar();
    },
    toggleRightSidebar: () => {
      rightSidebarRef.current.toggleSidebar();
    },
  }));

  return (
    <>
      <GlobalStyles
        styles={(theme) => ({
          '#fuse-main': {
            height: props.innerScroll && '100vh',
          },
        })}
      />
      <Root
        className={clsx(
          'FusePageSimple-root',
          props.innerScroll && 'FusePageSimple-innerScroll',
          props.className
        )}
        ref={rootRef}
      >
        <div className={clsx('FusePageSimple-header', 'FusePageSimple-topBg')} />

        <div className="flex flex-auto flex-col container z-10 h-full">
          {props.header && props.sidebarInner && <FusePageSimpleHeader header={props.header} />}

          <div className="FusePageSimple-wrapper">
            {(props.leftSidebarHeader || props.leftSidebarContent) && (
              <FusePageSimpleSidebar
                position="left"
                header={props.leftSidebarHeader}
                content={props.leftSidebarContent}
                variant={props.leftSidebarVariant || 'permanent'}
                innerScroll={props.innerScroll}
                sidebarInner={props.sidebarInner}
                ref={leftSidebarRef}
                rootRef={rootRef}
              />
            )}

            <FuseScrollbars
              className="FusePageSimple-contentWrapper"
              enable={props.innerScroll && !props.sidebarInner}
            >
              {props.header && !props.sidebarInner && (
                <FusePageSimpleHeader header={props.header} />
              )}

              {props.contentToolbar && (
                <div className={clsx('FusePageSimple-toolbar')}>{props.contentToolbar}</div>
              )}

              {props.content && (
                <div className={clsx('FusePageSimple-content')}>{props.content}</div>
              )}
            </FuseScrollbars>
            {/* </FuseScrollbars> */}

            {(props.rightSidebarHeader || props.rightSidebarContent) && (
              <FusePageSimpleSidebar
                position="right"
                header={props.rightSidebarHeader}
                content={props.rightSidebarContent}
                variant={props.rightSidebarVariant || 'permanent'}
                innerScroll={props.innerScroll}
                sidebarInner={props.sidebarInner}
                ref={rightSidebarRef}
                rootRef={rootRef}
              />
            )}
          </div>
        </div>
      </Root>
    </>
  );
});

FusePageSimple.propTypes = {
  leftSidebarHeader: PropTypes.node,
  leftSidebarContent: PropTypes.node,
  leftSidebarVariant: PropTypes.node,
  rightSidebarHeader: PropTypes.node,
  rightSidebarContent: PropTypes.node,
  rightSidebarVariant: PropTypes.node,
  header: PropTypes.node,
  content: PropTypes.node,
  contentToolbar: PropTypes.node,
  sidebarInner: PropTypes.bool,
  innerScroll: PropTypes.bool,
};

FusePageSimple.defaultProps = {
  classes: {},
};

export default memo(styled(FusePageSimple)``);
