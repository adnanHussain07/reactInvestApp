import * as React from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { motion } from 'framer-motion';
import Icon from '@mui/material/Icon';
import FuseUtils from '@fuse/utils';
import { useDispatch, useSelector } from 'react-redux';
import i18next from 'i18next';
import { DEFAULTUSERPIC, ReqColorCodes } from 'app/auth/store/constants';
import history from '@history';
import { Controller, useFormContext } from 'react-hook-form';
import { setUserImage } from 'app/auth/store/sharedData';
// import { setAssignLoader } from 'app/auth/store/loadersSlice';
// import { selectMainTheme } from 'app/store/fuse/settingsSlice';

function ProfileHeader(props) {
  // const methods = useFormContext();
  // const { control, watch, setValue } = methods;
  const dispatch = useDispatch();
  const firstName = useSelector(({ auth }) => auth.sharedData && auth.sharedData.userFirstName ? auth.sharedData.userFirstName : "");
  const lastName = useSelector(({ auth }) => auth.sharedData && auth.sharedData.userLastName ? auth.sharedData.userLastName : "");
  const getImage = useSelector(({ auth }) => auth.sharedData && auth.sharedData.userImage ? auth.sharedData.userImage : "");

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
            account_circle
          </Icon>
          <div className="flex flex-col items-center sm:items-start mb-16 sm:mb-0">
            <Typography
              component={motion.span}
              initial={{ x: -20 }}
              animate={{ x: 0, transition: { delay: 0.2 } }}
              delay={300}
              className="text-16 md:text-24 mx-12 font-semibold"
            >
              {i18next.t(`navigation:PROFILE`)}
            </Typography>
          </div>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0, transition: { delay: 0.2 } }}
      >
        <div className="flex items-center max-w-full">
          <motion.div
            // className="hidden sm:flex"
            initial={{ scale: 0 }}
            animate={{ scale: 1, transition: { delay: 0.3 } }}
          >
            {getImage ? (
              <img
                className="w-48 sm:48 md:w-64 rounded"
                src={getImage}
                alt={firstName + lastName}
              />
            ) : (
              <img
                className="w-48 sm:48 md:w-64 rounded"
                src={DEFAULTUSERPIC}
                alt={firstName + lastName}
              />
            )}
          </motion.div>
          <div className="flex flex-col min-w-0 mx-8 sm:mc-16 ml-24">
            <motion.div initial={{ x: -20 }} animate={{ x: 0, transition: { delay: 0.3 } }}>
              <label htmlFor="button-file">
                <input
                  accept="image/*"
                  className="hidden"
                  id="button-file"
                  type="file"
                  onChange={async (e) => {
                    function readFileAsync() {
                      return new Promise((resolve, reject) => {
                        const file = e.target.files[0];
                        if (!file) {
                          return;
                        }
                        const reader = new FileReader();

                        reader.onload = () => {
                          resolve({
                            id: FuseUtils.generateGUID(),
                            url: `data:${file.type};base64,${btoa(reader.result)}`,
                            type: 'image',
                          });
                        };

                        reader.onerror = reject;

                        reader.readAsBinaryString(file);
                      });
                    }

                    const newImage = await readFileAsync();
                    if (newImage && newImage.url) {
                      dispatch(setUserImage(newImage.url));
                    }
                    // onChange([newImage, ...value]);
                  }}
                />
                <Icon
                  className='text-32'
                  fontSize="large"
                  style={{
                    cursor: 'pointer',
                    // color: ReqColorCodes.btnText,
                    color: ReqColorCodes.btn,
                  }}
                >
                  cloud_upload
                </Icon>
              </label>

            </motion.div>
          </div>
        </div>
        {/* <Button
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
        </Button> */}
      </motion.div>
    </div>
  );
}

export default ProfileHeader;
