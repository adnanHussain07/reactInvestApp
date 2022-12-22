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

// import ds from 'app/services/DataService';
// import { postNotification } from 'app/auth/store/commonServices';

function NewSupportContent(props) {
  const theme = useTheme();
  const dispatch = useDispatch();
  const language = useSelector(({ i18n }) => i18n.language ? i18n.language : "");
  const loader = useSelector(({ auth }) => auth.loaders.sendNotifyLoader);

  // const [loader, setLoader] = React.useState(false);
  const [getEnglish, setEnglish] = React.useState('');
  const [getSubject, setSubject] = React.useState('');
  const [getMsg, setMsg] = React.useState('');
  const [getTitleArabic, setTitleArabic] = React.useState('');
  const [getTitleEng, setTitleEng] = React.useState('');

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
                  {i18next.t(`navigation:NAME`)}
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
                  label={i18next.t(`navigation:NAME`)}
                  value={"Kaka Olawale"}
                  onChange={(e) => setTitleEng(e.target.value)}
                  multiline
                  rows={1}
                  dir='ltr'
                  placeholder="Enter text here"
                  disabled
                // defaultValue="Default Value"
                />
              </Box>

              {/* <div className="flex items-center justify-between px-4 pt-16">
                <Typography className="text-16 px-16 font-medium" color="textSecondary">
                  Notification Text English
                </Typography>
              </div>
              <Box
                component="form"
                sx={{
                  '& .MuiTextField-root': { m: 1, width: '100%' },
                  alignContent: 'center',
                  // marginTop: 3
                }}
                noValidate
                autoComplete="off">
                <TextField
                  id="outlined-multiline-static"
                  label="English"
                  value={getEnglish}
                  onChange={(e) => setEnglish(e.target.value)}
                  multiline
                  rows={8}
                  dir='ltr'
                  placeholder="Enter text here"
                // defaultValue="Default Value"
                />
              </Box> */}
            </div>
          </motion.div>

          <motion.div variants={item} className="widget flex w-full sm:w-1/2 p-8 mt-12">
            <div className="w-full flex flex-col justify-between">
              <div className="flex items-center justify-between px-4 pt-8">
                <Typography className="text-16 px-16 font-medium" color="textSecondary">
                  {i18next.t(`navigation:EMAILADDRESS`)}
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
                  label={i18next.t(`navigation:EMAILADDRESS`)}
                  value={"kakaolawale@gmail.com"}
                  onChange={(e) => setTitleArabic(e.target.value)}
                  multiline
                  rows={1}
                  disabled
                />
              </Box>

              {/* <div className="flex items-center justify-between px-4 pt-16">
                <Typography className="text-16 px-16 font-medium" color="textSecondary">
                  Notification Text Arabic
                </Typography>
              </div>
              <Box
                component="form"
                sx={{
                  '& .MuiTextField-root': { m: 1, width: '97.5%', },
                  alignContent: 'center',
                  // marginTop: 3
                }}
                noValidate
                autoComplete="off">
                <TextField
                  id="outlined-multiline-static"
                  label="Arabic"
                  value={getArabic}
                  onChange={(e) => setArabic(e.target.value)}
                  multiline
                  rows={8}
                  dir='rtl'
                  placeholder="أدخل النص هنا"
                />
              </Box> */}
            </div>
          </motion.div>
        </div>
        <div className="flex sm:flex sm:flex-row p-8">
          <motion.div variants={item} className="widget flex w-full p-8">
            <div className="w-full flex justify-between">
              <Box
                style={{ width: '99%' }}
                component="form"
                sx={{
                  '& .MuiTextField-root': { m: 1, width: '100%', },
                  alignContent: 'center',
                  // marginTop: 3
                }}
                noValidate
                autoComplete="off">
                <TextField
                  id="outlined-multiline-static"
                  label={i18next.t(`navigation:SUBJECT`)}
                  value={getSubject}
                  onChange={(e) => setSubject(e.target.value)}
                  multiline
                // dir='rtl'
                />
              </Box>
            </div>
          </motion.div>
        </div>
        <div className="flex sm:flex sm:flex-row p-8">
          <motion.div variants={item} className="widget flex w-full p-8">
            <div className="w-full flex justify-between">
              <Box
                style={{ width: '99%' }}
                component="form"
                sx={{
                  '& .MuiTextField-root': { m: 1, width: '100%', },
                  alignContent: 'center',
                  // marginTop: 3
                }}
                noValidate
                autoComplete="off">
                <TextField
                  id="outlined-multiline-static"
                  label={i18next.t(`navigation:MESSAGE`)}
                  value={getMsg}
                  onChange={(e) => setMsg(e.target.value)}
                  multiline
                  rows={8}
                // dir='rtl'
                />
              </Box>
            </div>
          </motion.div>
        </div>
        <div style={{ float: 'right' }} className="mx-16">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0, transition: { delay: 0.2 } }}
          >
            <Button
              className="whitespace-nowrap"
              variant="contained"
              color="secondary"
              size='large'
              style={{ backgroundColor: 'rgb(134 141 134)', color: '#fff' }}
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

export default withRouter(NewSupportContent);
