// components/RegisterForm.tsx
import { useFormik } from 'formik';
import { TextField, Button } from '@mui/material';
import * as Yup from 'yup';

const RegisterForm = ({ onSubmit }) => {
  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      username: Yup.string().required('Username is required'),
      email: Yup.string().email('Invalid email address').required('Email is required'),
      password: Yup.string().required('Password is required'),
    }),
    onSubmit: onSubmit, // Call the correct function for registration
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <TextField
        id="username"
        name="username"
        label="Username"
        fullWidth
        {...formik.getFieldProps('username')}
        error={formik.touched.username && Boolean(formik.errors.username)}
        helperText={formik.touched.username && formik.errors.username}
      />
      <TextField
        id="email"
        name="email"
        label="Email"
        fullWidth
        {...formik.getFieldProps('email')}
        error={formik.touched.email && Boolean(formik.errors.email)}
        helperText={formik.touched.email && formik.errors.email}
      />
      <TextField
        id="password"
        name="password"
        label="Password"
        type="password"
        fullWidth
        {...formik.getFieldProps('password')}
        error={formik.touched.password && Boolean(formik.errors.password)}
        helperText={formik.touched.password && formik.errors.password}
      />
      <Button type="submit" variant="contained" color="primary">
        Register
      </Button>
    </form>
  );
};

export default RegisterForm;
