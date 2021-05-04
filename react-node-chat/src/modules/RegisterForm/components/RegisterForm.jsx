import {Form, Input, Button} from 'antd';
import { UserOutlined, LockOutlined, MailOutlined } from '@ant-design/icons';
import {Link} from 'react-router-dom';

import { ContainerEnteryForm } from "../../../components";

const RegisterForm = () => {
	 return (
		<div className='auth'>
			<h2>Регистрация</h2>
			<ContainerEnteryForm>
				<Form
					name=''
					className=''
				>
					<Form.Item
						name='email'
						rules={[
							{
								required: true,
								message: 'Пожалуйста введите свое email'
							}
						]}
						validateStatus="success" 
						hasFeedback
					>
						<Input prefix={<MailOutlined className='auth__icon-input'/>} placeholder="E-email" size='large'/>
					</Form.Item>
					<Form.Item
						name='userName'
						rules={[
							{
								required: true,
								message: 'Пожалуйста введите свое имя'
							}
						]}
						validateStatus="success" 
						hasFeedback
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
						validateStatus="success" 
						hasFeedback
					>
						<Input.Password prefix={<LockOutlined className='auth__icon-input'/>} placeholder="Пароль" size='large'/>
					</Form.Item>
					<Form.Item
						name='repeat_password'
						rules={[
							{
								required: true,
								message: 'Пожалуйста введите свой пароль'
							}
						]}
						validateStatus="success" 
						hasFeedback
					>
						<Input.Password prefix={<LockOutlined className='auth__icon-input'/>} placeholder="Повторите пароль" size='large'/>
					</Form.Item>
					<Form.Item>
						<Button type="primary" htmlType="submit" className="auth__login-form-button">
							 Зарегистрироваться
						</Button>
						<Link to='/login' className='auth__register-link'>Войти в аккаунт</Link>
					</Form.Item>
				</Form>
			</ContainerEnteryForm>
		</div>
	)
}

export default RegisterForm;