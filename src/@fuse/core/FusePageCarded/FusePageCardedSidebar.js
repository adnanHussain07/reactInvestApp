import Drawer from '@mui/material/Drawer';
import Hidden from '@mui/material/Hidden';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import clsx from 'clsx';
import { forwardRef, useImperativeHandle, useState } from 'react';
import FusePageCardedSidebarContent from './FusePageCardedSidebarContent';

function FusePageCardedSidebar(props, ref) {
  const [isOpen, setIsOpen] = useState(false);

  useImperativeHandle(ref, () => ({
    toggleSidebar: handleToggleDrawer,
  }));

  const handleToggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Hidden lgUp={props.variant === 'permanent'}>
        <SwipeableDrawer
          variant="temporary"
          anchor={props.position}
          open={isOpen}
          onOpen={(ev) => {}}
          onClose={(ev) => handleToggleDrawer()}
          disableSwipeToOpen
          classes={{
            root: clsx('FusePageCarded-sidebarWrapper', props.variant),
            paper: clsx(
              'FusePageCarded-sidebar',
              props.variant,
              props.position === 'left'
                ? 'FusePageCarded-leftSidebar'
                : 'FusePageCarded-rightSidebar'
            ),
          }}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          container={props.rootRef.current}
          BackdropProps={{
            classes: {
              root: 'FusePageCarded-backdrop',
            },
          }}
          style={{ position: 'absolute' }}
        >
          <FusePageCardedSidebarContent {...props} />
        </SwipeableDrawer>
      </Hidden>
      {props.variant === 'permanent' && (
        <Hidden lgDown>
          <Drawer
            variant="permanent"
            className={clsx('FusePageCarded-sidebarWrapper', props.variant)}
            open={isOpen}
            classes={{
              paper: clsx(
                'FusePageCarded-sidebar',
                props.variant,
                props.position === 'left'
                  ? 'FusePageCarded-leftSidebar'
                  : 'FusePageCarded-rightSidebar'
              ),
            }}
          >
            <FusePageCardedSidebarContent {...props} />
          </Drawer>
        </Hidden>
      )}
    </>
  );
}

export default forwardRef(FusePageCardedSidebar);
