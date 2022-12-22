import * as React from 'react';
import FuseScrollbars from '@fuse/core/FuseScrollbars';
import _ from '@lodash';
import Paper from '@mui/material/Paper';
import { useTheme } from '@mui/material/styles';
import { motion } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import i18next from 'i18next';
import { withRouter } from 'react-router-dom';
import FuseLoading from '@fuse/core/FuseLoading';
import { TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import Button from '@mui/material/Button';
import { handleResponse } from '../../../auth/store/commonMethods';
import { ReqColorCodes } from 'app/auth/store/constants';
import { setUserEmail, setUserFirstName, setUserLastName } from 'app/auth/store/sharedData';

// import ds from 'app/services/DataService';
// import { postNotification } from 'app/auth/store/commonServices';

function ProfileContent(props) {
  const theme = useTheme();
  const dispatch = useDispatch();
  const language = useSelector(({ i18n }) => i18n.language ? i18n.language : "");
  const loader = useSelector(({ auth }) => auth.loaders.sendNotifyLoader);
  const firstName = useSelector(({ auth }) => auth.sharedData && auth.sharedData.userFirstName ? auth.sharedData.userFirstName : "");
  const lastName = useSelector(({ auth }) => auth.sharedData && auth.sharedData.userLastName ? auth.sharedData.userLastName : "");
  const userEmail = useSelector(({ auth }) => auth.sharedData && auth.sharedData.userEmail ? auth.sharedData.userEmail : "");
  // const [loader, setLoader] = React.useState(false);
  const [getEnglish, setEnglish] = React.useState('');
  const [getSubject, setSubject] = React.useState('');
  const [getMsg, setMsg] = React.useState('');
  const [getTitleArabic, setTitleArabic] = React.useState('');
  const [getTitleEng, setTitleEng] = React.useState('');

  const [getMob, setMob] = React.useState('');
  const [getAddress, setAddress] = React.useState('');
  const [getState, setState] = React.useState('');
  const [getZipCode, setZipCode] = React.useState('');
  const [getCity, setCity] = React.useState('');
  const [getBitcoinID, setBitcoinID] = React.useState('');
  const [getEtheriumID, setEtheriumID] = React.useState('');
  const [getsetUSDTID, setUSDTID] = React.useState('');


  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  React.useEffect(() => {
    let mounted = true;
    if (mounted) {
      setSubject('');
      setMsg('');
    }
    return () => mounted = false;
  }, []);

  function postNotify() {
    if (getArabic && getEnglish) {
      const body = {
        ar: getArabic,
        en: getEnglish,
        titleAr: getTitleArabic,
        titleEn: getTitleEng,
      }
      // dispatch(postNotification(body));
    } else {
      dispatch(handleResponse('PROVNOTIFY', false));
    }
  }

  return loader ? <FuseLoading /> : (
    <div className="w-full flex flex-col">
      <FuseScrollbars className="flex-grow overflow-x-auto">
        <div className="flex flex-col sm:flex sm:flex-row p-8">
          <motion.div variants={item} className="widget flex w-full sm:w-1/2 p-8 mt-12">
            <div className="w-full flex flex-col justify-between">
              <div className="flex items-center justify-between px-4 pt-8">
                <Typography className="text-16 px-16 font-medium" color="textSecondary">
                  {i18next.t(`navigation:FIRSTNAME`)}
                </Typography>
              </div>
              <Box
                component="form"
                sx={{
                  '& .MuiTextField-root': { m: 1, width: '97.5%' },
                  alignContent: 'center',
                  fontWeight: 'bold',
                  // marginTop: 3
                }}
                noValidate
                autoComplete="off">
                <TextField
                  style={{
                    fontWeight: 'bold'
                  }}
                  id="outlined-multiline-static"
                  label={i18next.t(`navigation:FIRSTNAME`)}
                  value={firstName}
                  onChange={(e) => setUserFirstName(e.target.value)}
                  multiline
                  rows={1}
                  dir='ltr'
                  placeholder="Enter text here"
                  disabled
                // defaultValue="Default Value"
                />
              </Box>
            </div>
          </motion.div>

          <motion.div variants={item} className="widget flex w-full sm:w-1/2 p-8">
            <div className="w-full flex flex-col justify-between">
              <div className="flex items-center justify-between px-4 pt-8">
                <Typography className="text-16 px-16 font-medium" color="textSecondary">
                  {i18next.t(`navigation:LSATNAME`)}
                </Typography>
              </div>
              <Box
                component="form"
                sx={{
                  '& .MuiTextField-root': { m: 1, width: '97.5%', },
                  alignContent: 'center',
                  fontWeight: 'bold',
                  // marginTop: 3
                }}
                noValidate
                autoComplete="off">
                <TextField
                  style={{
                    fontWeight: 'bold'
                  }}
                  id="outlined-multiline-static"
                  label={i18next.t(`navigation:LSATNAME`)}
                  value={lastName}
                  onChange={(e) => setUserLastName(e.target.value)}
                  multiline
                  rows={1}
                  disabled
                />
              </Box>
            </div>
          </motion.div>
        </div>

        <div className="flex flex-col sm:flex sm:flex-row p-8">
          <motion.div variants={item} className="widget flex w-full sm:w-1/2 p-8">
            <div className="w-full flex flex-col justify-between">
              <div className="flex items-center justify-between px-4 pt-2">
                <Typography className="text-16 px-16 font-medium" color="textSecondary">
                  {i18next.t(`navigation:EMAILADDRESS`)}
                </Typography>
              </div>
              <Box
                component="form"
                sx={{
                  '& .MuiTextField-root': { m: 1, width: '97.5%' },
                  alignContent: 'center',
                  fontWeight: 'bold',
                  // marginTop: 3
                }}
                noValidate
                autoComplete="off">
                <TextField
                  style={{
                    fontWeight: 'bold'
                  }}
                  id="outlined-multiline-static"
                  label={i18next.t(`navigation:EMAILADDRESS`)}
                  value={userEmail}
                  onChange={(e) => setUserEmail(e.target.value)}
                  multiline
                  rows={1}
                  dir='ltr'
                  placeholder="Enter text here"
                  disabled
                // defaultValue="Default Value"
                />
              </Box>
            </div>
          </motion.div>

          <motion.div variants={item} className="widget flex w-full sm:w-1/2 p-8">
            <div className="w-full flex flex-col justify-between">
              <div className="flex items-center justify-between px-4 pt-2">
                <Typography className="text-16 px-16 font-medium" color="textSecondary">
                  {i18next.t(`navigation:MOBNBR`)}
                </Typography>
              </div>
              <Box
                component="form"
                sx={{
                  '& .MuiTextField-root': { m: 1, width: '97.5%', },
                  alignContent: 'center',
                  fontWeight: 'bold',
                  // marginTop: 3
                }}
                noValidate
                autoComplete="off">
                <TextField
                  style={{
                    fontWeight: 'bold'
                  }}
                  id="outlined-multiline-static"
                  label={i18next.t(`navigation:MOBNBR`)}
                  value={getMob}
                  onChange={(e) => setMob(e.target.value)}
                  multiline
                  rows={1}
                  disabled
                />
              </Box>
            </div>
          </motion.div>
        </div>

        <div className="flex flex-col sm:flex sm:flex-row p-8">
          <motion.div variants={item} className="widget flex w-full sm:w-1/2 p-8">
            <div className="w-full flex flex-col justify-between">
              <div className="flex items-center justify-between px-4 pt-2">
                <Typography className="text-16 px-16 font-medium" color="textSecondary">
                  {i18next.t(`navigation:ADDRESS`)}
                </Typography>
              </div>
              <Box
                component="form"
                sx={{
                  '& .MuiTextField-root': { m: 1, width: '97.5%' },
                  alignContent: 'center',
                  fontWeight: 'bold',
                  // marginTop: 3
                }}
                noValidate
                autoComplete="off">
                <TextField
                  style={{
                    fontWeight: 'bold'
                  }}
                  id="outlined-multiline-static"
                  label={i18next.t(`navigation:ADDRESS`)}
                  value={getAddress}
                  onChange={(e) => setAddress(e.target.value)}
                  multiline
                  rows={1}
                  dir='ltr'
                  placeholder="Enter text here"
                  disabled
                // defaultValue="Default Value"
                />
              </Box>
            </div>
          </motion.div>

          <motion.div variants={item} className="widget flex w-full sm:w-1/2 p-8">
            <div className="w-full flex flex-col justify-between">
              <div className="flex items-center justify-between px-4 pt-2">
                <Typography className="text-16 px-16 font-medium" color="textSecondary">
                  {i18next.t(`navigation:STATE`)}
                </Typography>
              </div>
              <Box
                component="form"
                sx={{
                  '& .MuiTextField-root': { m: 1, width: '97.5%', },
                  alignContent: 'center',
                  fontWeight: 'bold',
                  // marginTop: 3
                }}
                noValidate
                autoComplete="off">
                <TextField
                  style={{
                    fontWeight: 'bold'
                  }}
                  id="outlined-multiline-static"
                  label={i18next.t(`navigation:STATE`)}
                  value={getState}
                  onChange={(e) => setState(e.target.value)}
                  multiline
                  rows={1}
                  disabled
                />
              </Box>
            </div>
          </motion.div>
        </div>

        <div className="flex flex-col sm:flex sm:flex-row p-8">
          <motion.div variants={item} className="widget flex w-full sm:w-1/2 p-8">
            <div className="w-full flex flex-col justify-between">
              <div className="flex items-center justify-between px-4 pt-2">
                <Typography className="text-16 px-16 font-medium" color="textSecondary">
                  {i18next.t(`navigation:ZIPCODE`)}
                </Typography>
              </div>
              <Box
                component="form"
                sx={{
                  '& .MuiTextField-root': { m: 1, width: '97.5%' },
                  alignContent: 'center',
                  fontWeight: 'bold',
                  // marginTop: 3
                }}
                noValidate
                autoComplete="off">
                <TextField
                  style={{
                    fontWeight: 'bold'
                  }}
                  id="outlined-multiline-static"
                  label={i18next.t(`navigation:ZIPCODE`)}
                  value={getZipCode}
                  onChange={(e) => setZipCode(e.target.value)}
                  multiline
                  rows={1}
                  dir='ltr'
                  placeholder="Enter text here"
                  disabled
                // defaultValue="Default Value"
                />
              </Box>
            </div>
          </motion.div>

          <motion.div variants={item} className="widget flex w-full sm:w-1/2 p-8">
            <div className="w-full flex flex-col justify-between">
              <div className="flex items-center justify-between px-4 pt-2">
                <Typography className="text-16 px-16 font-medium" color="textSecondary">
                  {i18next.t(`navigation:CITY`)}
                </Typography>
              </div>
              <Box
                component="form"
                sx={{
                  '& .MuiTextField-root': { m: 1, width: '97.5%', },
                  alignContent: 'center',
                  fontWeight: 'bold',
                  // marginTop: 3
                }}
                noValidate
                autoComplete="off">
                <TextField
                  style={{
                    fontWeight: 'bold'
                  }}
                  id="outlined-multiline-static"
                  label={i18next.t(`navigation:CITY`)}
                  value={getCity}
                  onChange={(e) => setCity(e.target.value)}
                  multiline
                  rows={1}
                  disabled
                />
              </Box>
            </div>
          </motion.div>
        </div>

        <div className="flex flex-col sm:flex sm:flex-row p-8">
          <motion.div variants={item} className="widget flex w-full sm:w-1/2 p-8">
            <div className="w-full flex flex-col justify-between">
              <div className="flex items-center justify-between px-4 pt-2">
                <Typography className="text-16 px-16 font-medium" color="textSecondary">
                  {i18next.t(`navigation:ETHERUMID`)}
                </Typography>
              </div>
              <Box
                component="form"
                sx={{
                  '& .MuiTextField-root': { m: 1, width: '97.5%' },
                  alignContent: 'center',
                  fontWeight: 'bold',
                  // marginTop: 3
                }}
                noValidate
                autoComplete="off">
                <TextField
                  style={{
                    fontWeight: 'bold'
                  }}
                  id="outlined-multiline-static"
                  label={i18next.t(`navigation:ETHERUMID`)}
                  value={getEtheriumID}
                  onChange={(e) => setEtheriumID(e.target.value)}
                  multiline
                  rows={1}
                  dir='ltr'
                  placeholder="Enter text here"
                  disabled
                // defaultValue="Default Value"
                />
              </Box>
            </div>
          </motion.div>

          <motion.div variants={item} className="widget flex w-full sm:w-1/2 p-8">
            <div className="w-full flex flex-col justify-between">
              <div className="flex items-center justify-between px-4 pt-2">
                <Typography className="text-16 px-16 font-medium" color="textSecondary">
                  {i18next.t(`navigation:USDTID`)}
                </Typography>
              </div>
              <Box
                component="form"
                sx={{
                  '& .MuiTextField-root': { m: 1, width: '97.5%', },
                  alignContent: 'center',
                  fontWeight: 'bold',
                  // marginTop: 3
                }}
                noValidate
                autoComplete="off">
                <TextField
                  style={{
                    fontWeight: 'bold'
                  }}
                  id="outlined-multiline-static"
                  label={i18next.t(`navigation:USDTID`)}
                  value={getsetUSDTID}
                  onChange={(e) => setUSDTID(e.target.value)}
                  multiline
                  rows={1}
                  disabled
                />
              </Box>
            </div>
          </motion.div>
        </div>

        <div className="flex flex-col sm:flex sm:flex-row p-8">
          <motion.div variants={item} className="widget flex w-full sm:w-1/2 p-8">
            <div className="w-full flex flex-col justify-between">
              <div className="flex items-center justify-between px-4 pt-2">
                <Typography className="text-16 px-16 font-medium" color="textSecondary">
                  {i18next.t(`navigation:BITCOINID`)}
                </Typography>
              </div>
              <Box
                component="form"
                sx={{
                  '& .MuiTextField-root': { m: 1, width: '97.5%' },
                  alignContent: 'center',
                  fontWeight: 'bold',
                  // marginTop: 3
                }}
                noValidate
                autoComplete="off">
                <TextField
                  style={{
                    fontWeight: 'bold'
                  }}
                  id="outlined-multiline-static"
                  label={i18next.t(`navigation:BITCOINID`)}
                  value={getBitcoinID}
                  onChange={(e) => setBitcoinID(e.target.value)}
                  multiline
                  rows={1}
                  dir='ltr'
                  placeholder="Enter text here"
                  disabled
                // defaultValue="Default Value"
                />
              </Box>
            </div>
          </motion.div>
        </div>

        <div style={{ float: 'right' }} className="mx-16 mb-16">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0, transition: { delay: 0.2 } }}
          >
            <Button
              className="whitespace-nowrap"
              variant="contained"
              color="primary"
              size='large'
              // style={{ backgroundColor: 'rgb(134 141 134)', color: '#fff' }}
              onClick={() => history.back()}
            >
              {i18next.t(`navigation:CLOSE`)}
            </Button>
            <Button
              className="whitespace-nowrap mx-12"
              variant="contained"
              style={{
                color: ReqColorCodes.btnText,
                backgroundImage: ReqColorCodes.btn,
              }}
              // color="primary"
              size='large'
              onClick={postNotify}
            >
              {i18next.t(`navigation:SEND`)}
            </Button>
          </motion.div>
        </div>
      </FuseScrollbars>
    </div>
  );
}

export default withRouter(ProfileContent);
