import { motion } from 'framer-motion';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Icon from '@mui/material/Icon';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { useDispatch, useSelector } from 'react-redux';
import Typography from '@mui/material/Typography';
import Dialog from '@mui/material/Dialog';
import { useHistory } from 'react-router-dom';
import _ from '@lodash';
import { setTwoFALoader } from 'app/auth/store/loadersSlice';
import i18next from 'i18next';
import { handleResponse } from '../../auth/store/commonMethods';
import { setShowTwoFA, setTwoFAEnable } from '../../auth/store/sharedData';
import { showMessage } from 'app/store/fuse/messageSlice';
import { ReqColorCodes } from 'app/auth/store/constants';
import { DialogActions, DialogContent, DialogTitle } from '@mui/material';

function TwoFAAuth(props) {
  const dispatch = useDispatch();
  const history = useHistory();
  const loaders = useSelector(({ auth }) => auth.loaders.twoFALoader);
  const openReset = useSelector(({ auth }) => auth.sharedData.showTwoFA);
  const isEnable = useSelector(({ auth }) => auth.sharedData.isTwoFAEnable);

  // async function chnagePassService(body) {
  //   dispatch(setAuthLoader(true));
  //   // const getReq = ds.updatePassService(body);
  //   await getReq
  //     .then(res => {
  //       dispatch(setAuthLoader(false));
  //       if (res && res.msg && res.msg.includes('Success')) {
  //         dispatch(handleResponse('PASSCHANGE', true));
  //       }
  //     })
  //     .catch(e => {
  //       //    e.response.data.error
  //       let msg = e && e.response && e.response.data && e.response.data.error ? e.response.data.error : '';
  //       dispatch(setAuthLoader(false));
  //       dispatch(
  //         showMessage({
  //           message: `${msg ? msg : 'Something went wrong'}`,
  //           autoHideDuration: 2000,
  //           anchorOrigin: {
  //             vertical: 'top',
  //             horizontal: 'center',
  //           },
  //           variant: `${msg ? 'warning' : 'error'}` //success error info warning null
  //         })
  //       );
  //     });
  // }

  const handleCloseReset = () => {
    dispatch(setTwoFALoader(false));
    dispatch(setShowTwoFA(false));
  };

  return (
    <Dialog
      open={openReset}
    // onClose={handleCloseReset}
    >
      <IconButton color="default" className="fixed" onClick={handleCloseReset}>
        <Icon>cancel</Icon>
      </IconButton>
      <DialogTitle className='my-16 text-center'>
        {i18next.t(`navigation:TWOFAUTHHEAD`)}
      </DialogTitle>
      <DialogContent>
        <div className="w-auto p-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1, transition: { delay: 0.1 } }}
          >
            <Card
              // component={motion.div}
              initial={{ x: 200 }}
              animate={{ x: 0 }}
              transition={{ bounceDamping: 0 }}
              className="w-full max-full mx-auto md:m-0 rounded-20 md:rounded-none"
              square
            >
              <CardContent className="flex flex-col items-center justify-center p-4 sm:p-8 md:p-12 md:pt-20 ">
                {!isEnable ?
                  <div>
                    <Typography variant="h6" className="mb-16 font-semibold text-18 sm:text-24 text-center">
                      {i18next.t(`navigation:APPAUTH`)}
                    </Typography>
                    <Typography variant="subtitle2" className="mb-24 text-14 sm:text-16 text-center">
                      {i18next.t(`navigation:SECUREWITHTWO`)}
                    </Typography>
                    <Typography className='text-center'>
                      <Button
                        variant='contained'
                        style={{
                          color: ReqColorCodes.btnText,
                          backgroundImage: ReqColorCodes.btn,
                        }}
                        onClick={() => {
                          history.push('/venapp/twofasecure');
                          handleCloseReset();
                        }}
                      >
                        {i18next.t(`navigation:SETUPTWOFA`)}
                      </Button>
                    </Typography>
                  </div>
                  :
                  <div>
                    <Typography variant="h6" className="mb-16 font-semibold text-18 sm:text-24 text-center">
                      {i18next.t(`navigation:APPAUTH`)}
                    </Typography>
                    <Typography variant="subtitle2" className="mb-24 text-14 sm:text-16 text-center">
                      {i18next.t(`navigation:SECUREWITHTWO`)}
                    </Typography>
                    <Typography variant="h6" className="mb-16 font-semibold text-18 sm:text-24 text-center">
                      {i18next.t(`navigation:ENABLEDTWOFA`)}
                    </Typography>
                    <Typography variant="subtitle2" className="mb-24 text-14 sm:text-16 text-center">
                      {i18next.t(`navigation:WANTTODISABLE`)}
                    </Typography>
                    <Typography className='text-center'>
                      <Button
                        variant='contained'
                        style={{
                          color: ReqColorCodes.btnText,
                          backgroundImage: ReqColorCodes.btn,
                        }}
                        onClick={() => {
                          dispatch(setTwoFAEnable(false));
                        }}
                      >
                        {i18next.t(`navigation:DISABLE2FA`)}
                      </Button>
                    </Typography>
                  </div>
                }
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </DialogContent>
      <DialogActions>
        <Button variant='contained' color='primary' onClick={handleCloseReset}>{i18next.t(`navigation:CAN`)}</Button>
      </DialogActions>
    </Dialog>
  );
}

export default TwoFAAuth;
