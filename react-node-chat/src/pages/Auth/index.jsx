import {Route} from 'react-router-dom';
import { LoginForm, RegisterForm } from '../../modules';
import './Auth.scss'
const Auth = () => {
	return (
		<div>
			<Route exact path={['/', '/login']} component={LoginForm}/>
			<Route exact path='/register' component={RegisterForm}/>
		</div>
	)
}
export default Auth;