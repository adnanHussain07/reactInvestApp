import * as React from 'react';
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
import { setDepositLoader, setTwoFALoader } from 'app/auth/store/loadersSlice';
import i18next from 'i18next';
import { handleResponse } from '../../auth/store/commonMethods';
import { setShowDeposit, setShowTwoFA, setTwoFAEnable } from '../../auth/store/sharedData';
import { showMessage } from 'app/store/fuse/messageSlice';
import { ReqColorCodes } from 'app/auth/store/constants';
import { Box, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material';

function DepositNowDialog(props) {
  const dispatch = useDispatch();
  const history = useHistory();
  const loaders = useSelector(({ auth }) => auth.loaders.depositLoader);
  const openReset = useSelector(({ auth }) => auth.sharedData.showDepositNow);

  const [getAmount, setAmount] = React.useState(0);
  const [isConfirm, setConfirm] = React.useState(false);

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
    dispatch(setDepositLoader(false));
    dispatch(setShowDeposit(false));
  };

  return (
    <Dialog
      open={openReset}
    // onClose={handleCloseReset}
    >
      <IconButton color="primary" className="fixed" onClick={handleCloseReset}>
        <Icon>cancel</Icon>
      </IconButton>
      <DialogTitle className='my-16 text-center'>
        {i18next.t(`navigation:PAYBTC`)}
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
                {isConfirm ?
                  <div>
                    <Typography variant="h6" className="mb-16 font-semibold text-18 sm:text-24 text-center">
                      {i18next.t(`navigation:PAYPREV`)}
                    </Typography>
                    <Typography variant="subtitle2" className="text-14 sm:text-16 text-center">
                      {i18next.t(`navigation:AMOUNT`)}:
                      <span>
                        <strong>{` ${getAmount}`}</strong> USD
                      </span>
                    </Typography>
                    <Typography variant="subtitle2" className="text-14 sm:text-16 text-center">
                      {i18next.t(`navigation:CHARGE`)}:
                      <span>
                        <strong>{` 0.00`}</strong> USD
                      </span>
                    </Typography>
                    <Typography variant="subtitle2" className="text-14 sm:text-16 text-center">
                      {i18next.t(`navigation:PAYABLE`)}:
                      <span>
                        <strong>{` ${getAmount}`}</strong> USD
                      </span>
                    </Typography>
                    <Typography variant="subtitle2" className="text-14 sm:text-16 text-center">
                      {i18next.t(`navigation:INDOLLAR`)}:
                      <span>
                        <strong>{` ${getAmount}`}</strong> USD
                      </span>
                    </Typography>
                    <Typography className='text-center mt-12'>
                      <Button
                        variant='contained'
                        style={{
                          color: ReqColorCodes.btnText,
                          backgroundImage: ReqColorCodes.btn,
                        }}
                        onClick={() => {
                          history.push(`/venapp/depositnow:${getAmount}`);
                          handleCloseReset();
                        }}
                      >
                        {i18next.t(`navigation:PAYNOW`)}
                      </Button>
                    </Typography>
                  </div> :
                  <div>
                    <Typography variant="h6" className="mb-16 font-semibold text-18 sm:text-24 text-center">
                      {i18next.t(`navigation:DEPPAY`)}
                    </Typography>
                    <Typography variant="subtitle2" className="text-14 sm:text-16 text-center">
                      {i18next.t(`navigation:DEPLIMIT`)}
                    </Typography>
                    <Typography variant="subtitle2" className="mb-12 text-14 sm:text-16 text-center">
                      {i18next.t(`navigation:DEPCHARGE`)}
                    </Typography>
                    <Typography variant="subtitle2" className="mb-4 text-12 sm:text-14 text-center">
                      {i18next.t(`navigation:ENTERAMOUNT`)}
                    </Typography>
                    <Box
                      style={{ width: '97%' }}
                      component="form"
                      sx={{
                        '& .MuiTextField-root': { m: 1, width: '100%', },
                        alignContent: 'center',
                        // marginTop: 3
                      }}
                      noValidate
                      autoComplete="off">
                      <TextField
                        type="number"
                        id="outlined-multiline-static"
                        label={i18next.t(`navigation:MESSAGE`)}
                        value={getAmount}
                        onChange={(e) => setAmount(e.target.value)}

                      // dir='rtl'
                      />
                    </Box>
                    <Typography className='text-center mt-4'>
                      <Button
                        variant='contained'
                        style={{
                          color: ReqColorCodes.btnText,
                          backgroundImage: ReqColorCodes.btn,
                        }}
                        onClick={() => {
                          if (getAmount && getAmount > 0) {
                            setConfirm(true);
                          } else {
                            dispatch(handleResponse(false, false, true, 'PROVAMOUNT'));
                          }
                        }}
                      >
                        {i18next.t(`navigation:CONFIRM`)}
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

export default DepositNowDialog;
