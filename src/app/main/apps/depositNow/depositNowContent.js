import * as React from 'react';
import FuseScrollbars from '@fuse/core/FuseScrollbars';
import _ from '@lodash';
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
import { setTwoFAEnable } from 'app/auth/store/sharedData';
import { useHistory } from 'react-router-dom';
// import { env } from '../../env'
// const { REACT_APP_BTC_WALLET } = env;

function DepositNowContent(props) {
  const amount = props.amount && props.amount.split(':').length > 1 ? props.amount.split(':')[1] : false;
  const theme = useTheme();
  const dispatch = useDispatch();
  const history = useHistory();
  const language = useSelector(({ i18n }) => i18n.language ? i18n.language : "");
  const loader = useSelector(({ auth }) => auth.loaders.sendNotifyLoader);
  const isEnable = useSelector(({ auth }) => auth.sharedData.isTwoFAEnable);

  // const [loader, setLoader] = React.useState(false);
  const [getEnglish, setEnglish] = React.useState('');
  const [getSubject, setSubject] = React.useState('');
  const [getMsg, setMsg] = React.useState('');
  const [getTitleArabic, setTitleArabic] = React.useState('');
  const [getTitleEng, setTitleEng] = React.useState('');

  const [getTransDetail, setTransDetail] = React.useState('');

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

  function activateClick() {
    if (!getAuthCode) {
      dispatch(handleResponse(false, false, true, 'PROVAUTHCODE'));
      return;
    }
    else {
      dispatch(setTwoFAEnable(true));
    }
  }

  function disableClick() {
    dispatch(setTwoFAEnable(false));
  }

  return loader ? <FuseLoading /> : (
    <div className="w-full flex">
      <FuseScrollbars className="flex-grow overflow-x-auto">
        {amount && (
          <div className="p-16 sm:p-24 max-w-2xl">
            <motion.div variants={item} className="widget flex w-full p-8 mt-12">
              <div className="flex items-center justify-between px-4 pt-8 pb-12">
                <Typography className="text-24 px-16 font-semibold" color="HighlightText">
                  {i18next.t(`navigation:DEPCONFIRM`)}
                </Typography>
              </div>
            </motion.div>

            <Typography className="text-18 ml-8 px-16 font-medium">
              {i18next.t(`navigation:UREQ`)}
              <strong>{` ${amount} `}</strong>
              {i18next.t(`navigation:DOLLCAP`)},{" "}
              {i18next.t(`navigation:PLASPAY`)}
              <strong>{` ${amount} `}</strong>
              {i18next.t(`navigation:SUCCPAY`)}
            </Typography>

            <motion.div variants={item} className="widget flex w-full p-8 mt-12">
              <div className="flex items-center justify-between px-4 pt-8">
                <Typography className="text-18 px-16 font-semibold" color="HighlightText">
                  {i18next.t(`navigation:INSBELOW`)}
                </Typography>
              </div>
            </motion.div>

            <motion.div variants={item} className="widget flex w-full p-8 mt-4">
              <div className="flex items-center justify-between px-4 pt-8 pb-12">
                <Typography className="text-18 px-16 font-semibold" color="lightblue">
                  {process.env.REACT_APP_BTC_WALLET}
                </Typography>
                <Button
                  variant='contained'
                  size='small'
                  style={{
                    color: ReqColorCodes.btnText,
                    backgroundImage: ReqColorCodes.btn,
                  }}
                  onClick={() => navigator.clipboard.writeText(process.env.REACT_APP_BTC_WALLET)}
                >
                  {i18next.t(`navigation:COPY`)}
                </Button>
              </div>
            </motion.div>

            <Typography className="text-18 ml-8 px-16 font-medium">
              {i18next.t(`navigation:BTCSENTTO`)}
            </Typography>

            <motion.div variants={item} className="widget flex w-full p-8 mt-6">
              <div className="flex items-center justify-between px-4 pt-4">
                <Typography className="text-18 px-16 font-semibold" color="HighlightText">
                  {i18next.t(`navigation:DELAYWN`)}
                </Typography>
              </div>
            </motion.div>
            <Typography className="px-16 font-medium">
              {i18next.t(`navigation:INPUTTRANSDETAIL`)}
            </Typography>
            <motion.div variants={item} className="widget flex w-full p-8 mt-2">
              <Box
                style={{ width: '50%' }}
                component="form"
                sx={{
                  '& .MuiTextField-root': { m: 1, width: '100%', },
                  alignContent: 'center',
                  fontWeight: 'bold',
                  // marginTop: 3
                }}
                noValidate
                autoComplete="off">
                <TextField
                  style={{
                    fontWeight: 'bold',
                    width: '100%'
                  }}
                  id="outlined-multiline-static"
                  label={i18next.t(`navigation:INPUTTRANSDETAIL`)}
                  value={getTransDetail}
                  onChange={(e) => setTransDetail(e.target.value)}
                  multiline
                />
              </Box>
            </motion.div>

            <Button
              className="whitespace-nowrap ml-24 mt-12"
              style={{
                color: ReqColorCodes.btnText,
                backgroundImage: ReqColorCodes.btn,
              }}
              variant='contained'
              size='large'
              onClick={() => {
                if (getTransDetail) {
                  history.push('/venapp/deposithistory');
                }
                else {
                  dispatch(handleResponse(false, false, true, 'TRANSDETPROVIDE'));
                }
              }}
            >
              {i18next.t(`navigation:PAYNOW`)}
            </Button>
          </div>
        )}
      </FuseScrollbars>
    </div>
  );
}

export default withRouter(DepositNowContent);
