import * as React from 'react';
import { motion } from 'framer-motion';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Icon from '@mui/material/Icon';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { useDispatch, useSelector } from 'react-redux';
import Typography from '@mui/material/Typography';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import LinearProgress from '@mui/material/LinearProgress';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Dialog from '@mui/material/Dialog';
import { useHistory } from 'react-router-dom';
import _ from '@lodash';
import { setDepositLoader, setTwoFALoader, setWithdrawLoader } from 'app/auth/store/loadersSlice';
import i18next from 'i18next';
import { handleResponse } from '../../auth/store/commonMethods';
import { setShowDeposit, setShowTwoFA, setShowWithdraw, setTwoFAEnable } from '../../auth/store/sharedData';
import { showMessage } from 'app/store/fuse/messageSlice';
import { ReqColorCodes, Wallets } from 'app/auth/store/constants';
import { postWithdraw } from 'app/auth/store/commonServices';
import { Box, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material';

function DepositNowDialog(props) {
  const dispatch = useDispatch();
  const history = useHistory();
  const loaders = useSelector(({ auth }) => auth.loaders.withdrawLoader);
  const openReset = useSelector(({ auth }) => auth.sharedData.showWithdrawNow);

  const [getAmount, setAmount] = React.useState(0);
  const [isConfirm, setConfirm] = React.useState(false);
  const [getWallet, setWallet] = React.useState(0);

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
    dispatch(setWithdrawLoader(false));
    dispatch(setShowWithdraw(false));
  };

  function onClickWithdraw() {
    if (getAmount) {
      const body = {

      }
      dispatch(postWithdraw(body));
    }
  }

  return (
    <Dialog
      open={openReset}
    // onClose={handleCloseReset}
    >
      <IconButton color="default" className="fixed" onClick={handleCloseReset}>
        <Icon>cancel</Icon>
      </IconButton>
      <DialogTitle className='my-16 text-center'>
        {i18next.t(`navigation:WITHDRAWNOE`)}
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
                <div>
                  <Typography variant="h6" className="mb-16 font-semibold text-18 sm:text-24 text-center">
                    {i18next.t(`navigation:WITHDRAMOEN`)}
                  </Typography>
                  <Typography variant="subtitle2" className="text-14 sm:text-16 text-center">
                    {i18next.t(`navigation:WITHLIMIT`)}
                  </Typography>
                  <Typography variant="subtitle2" className="mb-12 text-14 sm:text-16 text-center">
                    {i18next.t(`navigation:WITHCHARGE`)}
                  </Typography>
                  <Typography variant="subtitle2" className="mb-12 text-14 sm:text-16 text-center">
                    {i18next.t(`navigation:PROCESINGTYM`)}
                  </Typography>
                  {/* <Typography variant="subtitle2" className="mb-4 text-12 sm:text-14 text-center">
                    {i18next.t(`navigation:ENTERAMOUNT`)}
                  </Typography> */}
                  <FormControl className="flex w-full sm:w-full mb-16" variant="outlined">
                    <InputLabel id="category-select-label">{i18next.t(`navigation:SELWALLET`)}</InputLabel>
                    <Select
                      labelId="category-select-label"
                      id="category-select"
                      label={i18next.t(`navigation:SELWALLET`)}
                      value={getWallet}
                      onChange={(e) => {
                        setWallet(e.target.value);
                      }}
                    // error={getLeagueHelper ? true : false}
                    >
                      <MenuItem value={0}>
                        <em> Select Wallet </em>
                      </MenuItem>
                      {Wallets.map((e, i) => {
                        if (i == 2) {
                          return;
                        }
                        return (
                          <MenuItem value={e.id} key={i}>
                            {e.name}
                          </MenuItem>
                        )
                      })}
                    </Select>
                    {/* <FormHelperText style={{ color: 'red' }}>{getLeagueHelper}</FormHelperText> */}
                  </FormControl>
                  <Box
                    style={{ width: '100%' }}
                    component="form"
                    sx={{
                      '& .MuiTextField-root': { width: '100%' },
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
                  <Typography className='text-center mt-8'>
                    <Button
                      variant='contained'
                      style={{
                        color: getWallet && getAmount ? ReqColorCodes.btnText : '',
                        backgroundImage: getWallet && getAmount ? ReqColorCodes.btn : '',
                      }}
                      disabled={!getWallet || !getAmount}
                      onClick={() => {
                        if (getAmount && getAmount >= 10) {
                          dispatch(handleResponse(false, false, true, 'WITHDONT'));
                          // setConfirm(true);
                        } else {
                          dispatch(handleResponse(false, false, true, 'PROVAMOUNT'));
                        }
                      }}
                    >
                      {i18next.t(`navigation:CONFIRM`)}
                    </Button>
                  </Typography>
                </div>
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
