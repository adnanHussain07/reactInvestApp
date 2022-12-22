import FuseNavigation from '@fuse/core/FuseNavigation';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import clsx from 'clsx';
import { memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectNavigation } from 'app/store/fuse/navigationSlice';
import { navbarCloseMobile } from '../../store/fuse/navbarSlice';
import { changeShowResetPass, setShowDeposit, setShowTwoFA, setShowWithdraw } from 'app/auth/store/sharedData';

function Navigation(props) {
  const navigation = useSelector(selectNavigation);
  const loggedin = useSelector(({ auth }) => auth.sharedData.loggedin);
  const theme = useTheme();
  const mdDown = useMediaQuery(theme.breakpoints.down('lg'));
  const dispatch = useDispatch();

  function handleItemClick(item) {
    if (loggedin) {
      if (item && item.id == Menus.CHANGEPASS) dispatch(changeShowResetPass(true))
      else if (e.id && e.id == Menus.TWOFASEC) dispatch(setShowTwoFA(true))
      else if (e.id && e.id == Menus.DEPOSITNOW) dispatch(setShowDeposit(true))
      else if (e.id && e.id == Menus.WITHDRAWNOE) dispatch(setShowWithdraw(true));
    }
    if (mdDown) {
      dispatch(navbarCloseMobile());
    }
  }

  return (
    <FuseNavigation
      className={clsx('navigation', props.className)}
      navigation={navigation}
      layout={props.layout}
      dense={props.dense}
      active={props.active}
      onItemClick={handleItemClick}
    />
  );
}

Navigation.defaultProps = {
  layout: 'vertical',
};

export default memo(Navigation);
