import FusePageCarded from '@fuse/core/FusePageCarded';
import withReducer from 'app/store/withReducer';
import { styled } from '@mui/material/styles';
// import reducer from '../store';
import AssignHeader from './newSupportHeader';
import AssignContent from './newSupportContent';
import FuseLoading from '@fuse/core/FuseLoading';
import Error401 from '../../../fuse-layouts/shared-components/Error401';
import { useDispatch, useSelector } from 'react-redux';
import * as React from 'react';
// import { checkAccess } from '../../../../auth/store/loginSlice';
// import { Menus } from '../../../../auth/store/constants';

const Root = styled(FusePageCarded)(({ theme }) => ({
  '& .FusePageCarded-header': {
    minHeight: 72,
    height: 72,
    alignItems: 'center',
    [theme.breakpoints.up('sm')]: {
      minHeight: 136,
      height: 136,
    },
  },
  '& .FusePageCarded-content': {
    display: 'flex',
  },
  '& .FusePageCarded-contentCard': {
    overflow: 'hidden',
  },
}));

function NewSupportTicket() {
  const dispatch = useDispatch();
  // const role = useSelector(({ auth }) => auth.user.roleid ? auth.user.roleid : 0);
  const [allowed, setAllowed] = React.useState(true); // React.useState(false);
  const [checkLoader, setCheckLoader] = React.useState(false); // React.useState(true);

  // React.useEffect(() => {
  //   let mounted = true;
  //   if (mounted) {
  //     const check = dispatch(checkAccess(Menus.NOTIFYASSIGN));
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
    allowed ? <Root header={<AssignHeader />} content={<AssignContent />} innerScroll /> :
      <Error401 />;
}

export default NewSupportTicket;
