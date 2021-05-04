import {Form, Input, Button} from 'antd';
import { UserOutlined, LockOutlined, MailOutlined } from '@ant-design/icons';
import {Link} from 'react-router-dom';

import { ContainerEnteryForm } from "../../../components";

const RegisterForm = props => {
	const {values, touched, errors, handleChange, handleBlur, handleSubmit} = props;

	 return (
		<div className='auth'>
			<h2>Регистрация</h2>
			<ContainerEnteryForm>
				<Form
					name=''
					className=''
					onSubmit={handleSubmit}
				>
					<Form.Item
						name='email'
						help={touched.email && errors.email}
						validateStatus={!touched.email ? 'success' : errors.email ? 'error' : 'success' }
						hasFeedback
					>
						<Input 
							prefix={<MailOutlined className='auth__icon-input'/>} 
							placeholder="E-email" 
							size='large'
							onChange={handleChange}
							onBlur={handleBlur}
							value={values.name}
						/>
					</Form.Item>
					<Form.Item
						name='name'
						help={touched.name && errors.name}
						validateStatus={!touched.name ? 'success' : errors.name ? 'error' : 'success' }
						hasFeedback
					>
						<Input 
							prefix={<UserOutlined className='auth__icon-input'/>}
							placeholder="Ваше имя" 
							size='large'
							onChange={handleChange}
							onBlur={handleBlur}
							value={values.name}
						 />
					</Form.Item>
					<Form.Item
						name='password'
						help={touched.password && errors.password}
						validateStatus={!touched.password ? 'success' : errors.password ? 'error' : 'success' }
						hasFeedback
					>
						<Input.Password 
							prefix={<LockOutlined className='auth__icon-input'/>} 
							placeholder="Пароль" 
							size='large'
							onChange={handleChange}
							onBlur={handleBlur}
							value={values.name}
						/>
					</Form.Item>
					<Form.Item
						name='repeat_password'
						help={touched.repeat_password && errors.repeat_password}
						validateStatus={!touched.repeat_password ? 'success' : errors.repeat_password ? 'error' : 'success' } 
						hasFeedback
					>
						<Input.Password
							prefix={<LockOutlined className='auth__icon-input'/>} 
							placeholder="Повторите пароль" 
							size='large'
							onChange={handleChange}
							onBlur={handleBlur}
							value={values.name}
						/>
					</Form.Item>
					<Form.Item>
						<Button type="primary" htmlType="submit" onClick={handleSubmit} className="auth__login-form-button">
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