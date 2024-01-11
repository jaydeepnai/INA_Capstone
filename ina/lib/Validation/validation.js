import * as yup from 'yup';

export const UserRegisterValidation = yup.object().shape({
    firstName: yup.string().required('First name is required'),
    lastName: yup.string().required('Last name is required'),
    username: yup.string().required('Username is required'),
    email: yup.string().email("Invalid email address").required('Username is required'),
    password: yup.string().min(6, 'Password must be at least 6 characters').required('Password is required').matches(
      /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&]+$/,
      'Password must contain at least one letter and one number'
    ),
    confirmPassword: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match').required('Confirm Password is required'),
  });