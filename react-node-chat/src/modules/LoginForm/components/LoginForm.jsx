import {Form, Input, Button} from "antd";
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import {Link} from 'react-router-dom';

import { ContainerEnteryForm } from "../../../components";

const LoginForm = () => {
	return (
		<div className='auth'>
			<h2>Войти в аккаунт</h2>
			<ContainerEnteryForm>
				<Form
					name=''
					className=''
				>
					<Form.Item
						name='userName'
						rules={[
							{
								required: true,
								message: 'Пожалуйста введите свое имя'
							}
						]}
					>
						<Input prefix={<UserOutlined className='auth__icon-input'/>} placeholder="Ваше имя" size='large'/>
					</Form.Item>
					<Form.Item
						name='password'
						rules={[
							{
								required: true,
								message: 'Пожалуйста введите свой пароль'
							}
						]}
					>
						<Input prefix={<LockOutlined className='auth__icon-input'/>} placeholder="Пароль" size='large'/>
					</Form.Item>
					<Form.Item>
						<Button type="primary" htmlType="submit" className="auth__login-form-button">
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