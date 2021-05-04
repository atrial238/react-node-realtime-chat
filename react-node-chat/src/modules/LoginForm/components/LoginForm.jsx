import {Form, Button} from "antd";
import { UserOutlined, LockOutlined, Icon } from '@ant-design/icons';
import {Link} from 'react-router-dom';
import {Input} from '../../../components';

import { ContainerEnteryForm } from "../../../components";


const LoginForm = ({handleSubmit, ...propsInput}) => {


	return (
		<div className='auth'>
			<h2>Войти в аккаунт</h2>
			<ContainerEnteryForm>
				<Form>
					<Input id='name' Icon={UserOutlined} {...propsInput} />
					<Input id='password' Icon={LockOutlined} {...propsInput} />
					<Form.Item>
						<Button type="primary" htmlType="submit" onClick={handleSubmit} className="auth__login-form-button">
							Войти в аккаунт
						</Button>
						<Link to='/register' className='auth__register-link'>Зарегистрироваться</Link>
					</Form.Item>
				</Form>
			</ContainerEnteryForm>
		</div>
	)
	
}

export default LoginForm;