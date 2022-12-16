import FormHelperText from '@mui/material/FormHelperText';
import { motion } from 'framer-motion';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Checkbox from '@mui/material/Checkbox';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import * as yup from 'yup';
import _ from '@lodash';

/**
 * Form Validation Schema
 */
const schema = yup.object().shape({
  name: yup.string().required('You must enter your name'),
  email: yup.string().email('You must enter a valid email').required('You must enter a email'),
  password: yup
    .string()
    .required('Please enter your password.')
    .min(8, 'Password is too short - should be 8 chars minimum.'),
  passwordConfirm: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match'),
  acceptTermsConditions: yup.boolean().oneOf([true], 'The terms and conditions must be accepted.'),
});

const defaultValues = {
  name: '',
  email: '',
  password: '',
  passwordConfirm: '',
  acceptTermsConditions: false,
};

function RegisterPage() {
  const { control, formState, handleSubmit, reset } = useForm({
    mode: 'onChange',
    defaultValues,
    resolver: yupResolver(schema),
  });

  const { isValid, dirtyFields, errors } = formState;

  function onSubmit() {
    reset(defaultValues);
  }

  return (
    <div className="flex flex-col flex-auto items-center justify-center p-16 sm:p-32">
      <div className="flex flex-col items-center justify-center w-full">
        <motion.div initial={{ opacity: 0, scale: 0.6 }} animate={{ opacity: 1, scale: 1 }}>
          <Card className="w-full max-w-384">
            <CardContent className="flex flex-col items-center justify-center p-16 sm:p-24 md:p-32">
              <img className="w-128 m-32" src="assets/images/logos/fuse.svg" alt="logo" />

              <Typography variant="h6" className="mt-16 mb-24 font-semibold text-18 sm:text-24">
                Create an account
              </Typography>

              <form
                name="registerForm"
                noValidate
                className="flex flex-col justify-center w-full"
                onSubmit={handleSubmit(onSubmit)}
              >
                <Controller
                  name="name"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      className="mb-16"
                      label="Name"
                      autoFocus
                      type="name"
                      error={!!errors.name}
                      helperText={errors?.name?.message}
                      variant="outlined"
                      required
                      fullWidth
                    />
                  )}
                />

                <Controller
                  name="email"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      className="mb-16"
                      label="Email"
                      type="email"
                      error={!!errors.email}
                      helperText={errors?.email?.message}
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
                      label="Password"
                      type="password"
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
                      label="Password (Confirm)"
                      type="password"
                      error={!!errors.passwordConfirm}
                      helperText={errors?.passwordConfirm?.message}
                      variant="outlined"
                      required
                      fullWidth
                    />
                  )}
                />

                <Controller
                  name="acceptTermsConditions"
                  control={control}
                  render={({ field }) => (
                    <FormControl className="items-center" error={!!errors.acceptTermsConditions}>
                      <FormControlLabel
                        label="I read and accept terms and conditions"
                        control={<Checkbox {...field} />}
                      />
                      <FormHelperText>{errors?.acceptTermsConditions?.message}</FormHelperText>
                    </FormControl>
                  )}
                />

                <Button
                  variant="contained"
                  color="primary"
                  className="w-224 mx-auto mt-16"
                  aria-label="Register"
                  disabled={_.isEmpty(dirtyFields) || !isValid}
                  type="submit"
                >
                  Create an account
                </Button>
              </form>

              <div className="flex flex-col items-center justify-center pt-32 pb-24">
                <span className="font-normal">Already have an account?</span>
                <Link className="font-normal" to="/pages/auth/login">
                  Login
                </Link>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}

export default RegisterPage;
