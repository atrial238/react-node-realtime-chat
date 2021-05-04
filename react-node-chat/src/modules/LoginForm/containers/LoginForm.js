import LoginForm from '../components/LoginForm';
import { withFormik } from 'formik';
 
 export default withFormik({
   validate: values => {
     const errors = {};

	  if(!values.name) errors.name = 'Пожалуйста введите свое имя';
	  
	  if(!values.password) errors.password = 'Пожалуйста введите пароль';

     return errors;
   },
 
   handleSubmit: (values, { setSubmitting }) => {
     setTimeout(() => {
       alert(JSON.stringify(values, null, 2));
       setSubmitting(false);
     }, 1000);
   },
 
   displayName: 'LoginForm',
 })(LoginForm);