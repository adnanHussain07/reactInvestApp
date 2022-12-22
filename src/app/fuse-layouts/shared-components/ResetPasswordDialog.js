import { yupResolver } from '@hookform/resolvers/yup';
import { motion } from 'framer-motion';
import { Controller, useForm } from 'react-hook-form';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Icon from '@mui/material/Icon';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import { useDispatch, useSelector } from 'react-redux';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';
import Dialog from '@mui/material/Dialog';
import { useHistory } from 'react-router-dom';
import * as yup from 'yup';
import _ from '@lodash';
import { setAuthLoader } from 'app/auth/store/loadersSlice';
import i18next from 'i18next';
import { handleResponse } from '../../auth/store/commonMethods';
import { changeShowResetPass } from '../../../app/auth/store/sharedData';
import { showMessage } from 'app/store/fuse/messageSlice';
import { ReqColorCodes } from 'app/auth/store/constants';

// import { userResetPass } from 'app/auth/store/loginSlice';
// import ds from 'app/services/DataService';

/**
 * Form Validation Schema
 */
const schema = yup.object().shape({
  oldPass: yup
    .string()
    .required('Please enter your old password.'),
  // .min(8, 'Password is too short - should be 8 chars minimum.'),
  password: yup
    .string()
    .required('Please enter your password.'),
  // .matches(
  //   /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
  //   "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
  // ),
  // .min(8, 'Password is too short - should be 8 chars minimum.'),
  passwordConfirm: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match'),
});

const defaultValues = {
  oldPass: '',
  password: '',
  passwordConfirm: '',
};

function ResetPasswordDialog(props) {
  const dispatch = useDispatch();
  const history = useHistory();
  // const [callResp, setCallResp] = useState('');
  const { control, formState, handleSubmit, reset } = useForm({
    mode: 'onChange',
    defaultValues,
    resolver: yupResolver(schema),
  });

  const { isValid, dirtyFields, errors } = formState;
  const loaders = useSelector(({ auth }) => auth.loaders.authLoader);
  const openReset = useSelector(({ auth }) => auth.sharedData.showChangePass);

  // useEffect(() => {
  //   reset(defaultValues);
  // }, []);

  function onSubmit(model) {
    const body = {
      oldpassword: model.oldPass,
      newpassword: model.password,
    };
    // dispatch(setAuthLoader(true));
    // chnagePassService(body);
    reset(defaultValues);
  }

  async function chnagePassService(body) {
    dispatch(setAuthLoader(true));
    // const getReq = ds.updatePassService(body);
    await getReq
      .then(res => {
        dispatch(setAuthLoader(false));
        if (res && res.msg && res.msg.includes('Success')) {
          dispatch(handleResponse('PASSCHANGE', true));
        }
      })
      .catch(e => {
        //    e.response.data.error
        let msg = e && e.response && e.response.data && e.response.data.error ? e.response.data.error : '';
        dispatch(setAuthLoader(false));
        dispatch(
          showMessage({
            message: `${msg ? msg : 'Something went wrong'}`,
            autoHideDuration: 2000,
            anchorOrigin: {
              vertical: 'top',
              horizontal: 'center',
            },
            variant: `${msg ? 'warning' : 'error'}` //success error info warning null
          })
        );
      });
  }

  const handleCloseReset = () => {
    dispatch(setAuthLoader(false));
    dispatch(changeShowResetPass(false));
  };

  return (
    <Dialog onClose={handleCloseReset} open={openReset}>
      <IconButton color="primary" className="fixed" onClick={handleCloseReset}>
        <Icon>cancel</Icon>
      </IconButton>
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
            className="w-full max-w-400 mx-auto md:m-0 rounded-20 md:rounded-none"
            square
          >
            <CardContent className="flex flex-col items-center justify-center p-8 sm:p-16 md:p-24 md:pt-40 ">
              <Typography variant="h6" className="mb-48 font-semibold text-18 sm:text-24">
                {i18next.t(`navigation:RESETPASS`)}
              </Typography>

              <form
                name="resetForm"
                noValidate
                className="flex flex-col justify-center w-full"
                onSubmit={handleSubmit(onSubmit)}
              >
                {loaders.authLoader ? (
                  <CircularProgress
                    style={{
                      marginTop: '12%',
                      marginLeft: '40%',
                      width: 48,
                      height: 48,
                      marginBottom: 80,
                    }}
                    color="secondary"
                  />
                ) : (
                  <>
                    <Controller
                      name="oldPass"
                      control={control}
                      render={({ field }) => (
                        <TextField
                          {...field}
                          className="mb-16"
                          label={i18next.t(`navigation:OLDPASS`)}
                          autoFocus
                          type="password"
                          error={!!errors.oldPass}
                          helperText={errors?.oldPass?.message}
                          variant="outlined"
                          required
                          fullWidth
                        />
                      )}
                    />
                    <Controller
                      name="password"
                      control={control}
                      render={({ field }) => (
                        <TextField
                          {...field}
                          className="mb-16"
                          label={i18next.t(`navigation:PASS`)}
                          type="password"
                          name="password"
                          error={!!errors.password}
                          helperText={errors?.password?.message}
                          variant="outlined"
                          required
                          fullWidth
                        />
                      )}
                    />

                    <Controller
                      name="passwordConfirm"
                      control={control}
                      render={({ field }) => (
                        <TextField
                          {...field}
                          className="mb-16"
                          label={i18next.t(`navigation:PASSCONFIRM`)}
                          type="password"
                          error={!!errors.passwordConfirm}
                          helperText={errors?.passwordConfirm?.message}
                          variant="outlined"
                          required
                          fullWidth
                        />
                      )}
                    />

                    <Button
                      variant="contained"
                      // color="primary"
                      style={{
                        color: ReqColorCodes.btnText,
                        backgroundImage: _.isEmpty(dirtyFields) || !isValid ? '' : ReqColorCodes.btn,
                      }}
                      className="w-224 mx-auto mt-16"
                      aria-label="Reset"
                      disabled={_.isEmpty(dirtyFields) || !isValid}
                      type="submit"
                    >
                      {i18next.t(`navigation:RESETPASSMY`)}
                    </Button>
                  </>
                )}
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </Dialog>
  );
}

export default ResetPasswordDialog;
