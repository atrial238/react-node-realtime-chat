import {Form, Button} from 'antd';
import  { UserOutlined, LockOutlined, MailOutlined } from '@ant-design/icons';
import {Link} from 'react-router-dom';

import { ContainerEnteryForm } from "../../../components";
import {Input} from '../../../components';

const RegisterForm = ({handleSubmit, ...propsInput}) => {

	 return (
		<div className='auth'>
			<h2>Регистрация</h2>
			<ContainerEnteryForm>
				<Form>
					<Input id='email' Icon={MailOutlined} {...propsInput} />
					<Input id='name' Icon={UserOutlined} {...propsInput} />
					<Input id='password' Icon={LockOutlined} {...propsInput} />
					<Input id='repeat_password' Icon={LockOutlined} {...propsInput} />

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