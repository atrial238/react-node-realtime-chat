import { withFormik } from 'formik';
import RegisterForm from '../components/RegisterForm';

const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
const regexPassword = /[a-zA-Z0-9]{8,}/;

 export default  withFormik({
 
   validate: values => {
     const errors = {};
	 
     if (!values.email)  errors.email = 'Пожалуйста введите свое email';

	  if(!regexEmail.test(values.email)) errors.email = 'Пожалуйста, введите корректный  email';

	  if(!values.name) errors.name = 'Пожалуйста введите свое имя';
	  
	  if(!regexPassword.test(values.password)) errors.password = 'Минимум 8 символов';

	  if(!regexPassword.test(values.repeat_password)) errors.repeat_password = 'Минимум 8 символов';


     return errors;
   },
 
   handleSubmit: (values, { setSubmitting }) => {
		
     setTimeout(() => {
       alert(JSON.stringify(values, null, 2));
       setSubmitting(false);
     }, 1000);
   },
 
   displayName: 'BasicForm',
 })(RegisterForm);