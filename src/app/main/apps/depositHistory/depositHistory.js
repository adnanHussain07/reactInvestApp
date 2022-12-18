import FusePageCarded from '@fuse/core/FusePageCarded';
import withReducer from 'app/store/withReducer';
import { styled } from '@mui/material/styles';
import DriverHeader from './depositHistoryHeader';
import DriverTable from './depositHistoryTable';
import FuseLoading from '@fuse/core/FuseLoading';
import Error401 from '../../../fuse-layouts/shared-components/Error401';
// import { Menus } from '../../auth/store/constants';
import { useDispatch, useSelector } from 'react-redux';
import * as React from 'react';
import reducer from '../../../store/withReducer';

const Root = styled(FusePageCarded)(({ theme }) => ({
  '& .FusePageCarded-header': {
    minHeight: 72,
    height: 72,
    alignItems: 'center',
    [theme.breakpoints.up('sm')]: {
      minHeight: 136,
      height: 136,
    },
    [theme.breakpoints.down('lg')]: {
      minHeight: 222,
      height: 222,
    },
  },
  '& .FusePageCarded-content': {
    display: 'flex',
  },
  '& .FusePageCarded-contentCard': {
    overflow: 'hidden',
  },
}));

function DepositHistory() {
  const dispatch = useDispatch();
  const role = useSelector(({ auth }) => auth.user.roleid ? auth.user.roleid : 0);
  const [allowed, setAllowed] = React.useState(true); //false
  const [checkLoader, setCheckLoader] = React.useState(false); //true

  // React.useEffect(() => {
  //   let mounted = true;
  //   if (mounted) {
  //     const check = dispatch(checkAccess(Menus.ITEMS));
  //     if (check && check != '') {
  //       setCheckLoader(false);
  //       if (check == 'allowed') {
  //         setAllowed(true);
  //       }
  //     }
  //   }

  //   return () => mounted = false;
  // }, [role]);

  return checkLoader ? <FuseLoading /> :
    allowed ? <Root header={<DriverHeader />} content={<DriverTable />} innerScroll /> :
      <Error401 />;
}

// export default withReducer('eCommerceApp', reducer)(ReturnInvest);
export default DepositHistory;
