import Drawer from '@mui/material/Drawer';
import Hidden from '@mui/material/Hidden';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import clsx from 'clsx';
import { forwardRef, useImperativeHandle, useState } from 'react';
import FusePageSimpleSidebarContent from './FusePageSimpleSidebarContent';

function FusePageSimpleSidebar(props, ref) {
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
            root: clsx('FusePageSimple-sidebarWrapper', props.variant),
            paper: clsx(
              'FusePageSimple-sidebar',
              props.variant,
              props.position === 'left'
                ? 'FusePageSimple-leftSidebar'
                : 'FusePageSimple-rightSidebar'
            ),
          }}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          container={props.rootRef.current}
          BackdropProps={{
            classes: {
              root: 'FusePageSimple-backdrop',
            },
          }}
          style={{ position: 'absolute' }}
        >
          <FusePageSimpleSidebarContent {...props} />
        </SwipeableDrawer>
      </Hidden>
      {props.variant === 'permanent' && (
        <Hidden lgDown>
          <Drawer
            variant="permanent"
            className={clsx('FusePageSimple-sidebarWrapper', props.variant)}
            open={isOpen}
            classes={{
              paper: clsx(
                'FusePageSimple-sidebar',
                props.variant,
                props.position === 'left'
                  ? 'FusePageSimple-leftSidebar'
                  : 'FusePageSimple-rightSidebar'
              ),
            }}
          >
            <FusePageSimpleSidebarContent {...props} />
          </Drawer>
        </Hidden>
      )}
    </>
  );
}

export default forwardRef(FusePageSimpleSidebar);
