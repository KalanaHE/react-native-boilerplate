import * as yup from 'yup';

export default loginValidationSchema = yup.object().shape({
  username: yup.string().required('Username is Required'),
  password: yup
    .string()
    .min(2, ({min}) => `Password must be at least ${min} characters`)
    .required('Password is required'),
});
