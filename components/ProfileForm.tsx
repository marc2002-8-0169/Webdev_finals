import React from 'react';
import { useFormik } from 'formik';
import { TextField, Button } from '@mui/material';
import * as Yup from 'yup';

const ProfileForm = ({ initialValues, onSubmit }) => {
  const formik = useFormik({
    initialValues,
    validationSchema: Yup.object({
      name: Yup.string().required('Name is required'),
      email: Yup.string().email('Invalid email address').required('Email is required'),
      bio: Yup.string(),
    }),
    onSubmit,
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <TextField
        id="name"
        name="name"
        label="Name"
        fullWidth
        {...formik.getFieldProps('name')}
        error={formik.touched.name && Boolean(formik.errors.name)}
        helperText={formik.touched.name && formik.errors.name}
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
        id="bio"
        name="bio"
        label="Bio"
        fullWidth
        multiline
        rows={4}
        {...formik.getFieldProps('bio')}
      />
      <Button type="submit" variant="contained" color="primary">
        Save
      </Button>
    </form>
  );
};

export default ProfileForm;