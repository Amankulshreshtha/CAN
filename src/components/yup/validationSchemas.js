import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
  organization: Yup.string().required('Organization is required'),
  state: Yup.string().required('State is required'),
  city: Yup.string().required('City is required'),
});
