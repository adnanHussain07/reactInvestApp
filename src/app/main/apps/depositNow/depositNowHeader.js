import * as React from 'react';
import Button from '@mui/material/Button';
import Icon from '@mui/material/Icon';
import Typography from '@mui/material/Typography';
import { motion } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import i18next from 'i18next';
import { ReqColorCodes } from 'app/auth/store/constants';
import history from '@history';
// import { setAssignLoader } from 'app/auth/store/loadersSlice';
// import { selectMainTheme } from 'app/store/fuse/settingsSlice';

function depositNowHeader(props) {
  const dispatch = useDispatch();

  return (
    <div className="flex flex-1 w-full items-center justify-between">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <div className="flex items-center">
          <Icon
            component={motion.span}
            initial={{ scale: 0 }}
            animate={{ scale: 1, transition: { delay: 0.2 } }}
            className="text-54 md:text-72"
          >
            keyboard_tab
          </Icon>
          <div className="flex flex-col items-center sm:items-start mb-16 sm:mb-0">
            <Typography
              component={motion.span}
              initial={{ x: -20 }}
              animate={{ x: 0, transition: { delay: 0.2 } }}
              delay={300}
              className="text-16 md:text-24 mx-12 font-semibold"
            >
              {i18next.t(`navigation:DEPOSITNOW`)}
            </Typography>
          </div>
        </div>
      </motion.div>
      {/* <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0, transition: { delay: 0.2 } }}
      >
        <Button
          className="whitespace-nowrap"
          variant="contained"
          size='medium'
          style={{
            color: ReqColorCodes.btnText,
            backgroundImage: ReqColorCodes.btn,
          }}
          onClick={() => history.push('/venapp/suppticket')}
        >
          {i18next.t(`navigation:MYSUPPTICKET`)}
        </Button>
      </motion.div> */}
    </div>
  );
}

export default depositNowHeader;
