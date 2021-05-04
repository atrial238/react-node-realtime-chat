import {Form, Input, Button} from "antd";
import { UserOutlined, LockOutlined, Icon } from '@ant-design/icons';
import {Link} from 'react-router-dom';

import { ContainerEnteryForm } from "../../../components";


const LoginForm = props => {
	const {values, touched, errors, handleChange, handleBlur, handleSubmit} = props;

	return (
		<div className='auth'>
			<h2>Войти в аккаунт</h2>
			<ContainerEnteryForm>
				<Form
					name=''
					className=''
				>
					<Form.Item
						name='name'
						
					>
						<Input prefix={<UserOutlined className='auth__icon-input'/>} placeholder="Ваше имя" size='large'/>
					</Form.Item>
					<Form.Item
						name='password'
						
					>
						<Input prefix={<LockOutlined className='auth__icon-input'/>} placeholder="Пароль" size='large'/>
					</Form.Item>
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