import {Form, Input} from "antd";
import { ContainerEnteryForm } from "../../../components";
import { UserOutlined } from '@ant-design/icons';


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
								required:true,
								message: 'Пожалуйста введите свое имя'
							}
						]}
					>
						<Input prefix={<UserOutlined />} placeholder="Username"/>
					</Form.Item>
				</Form>
			</ContainerEnteryForm>
		</div>
	)
	
}

export default LoginForm;