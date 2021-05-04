import {Input as BaseInput, Form } from 'antd';

const Input = (props) => {
	const {Icon, handleChange, handleBlur, values, id, touched, errors} = props;

	let placeholderValue = ''
	
	switch(id){
		case 'email': 
			placeholderValue="E-email";
			break;
		case 'name':
			placeholderValue = 'Ваше имя'
			break;
		case 'password':
			placeholderValue = 'Пароль';
			break;
		case 'repeat_password':
			placeholderValue = 'Повторите пароль';
			break;
		default:
			placeholderValue = '';
	}

	return <Form.Item
				name={id}
				help={touched[id] && errors[id]}
				validateStatus={!touched[id] ? 'success' : errors[id] ? 'error' : 'success' }
				hasFeedback
			>
				{id === 'password' || id === 'repeat_password' 
						?	<BaseInput.Password
								id={id}
								prefix={<Icon className='auth__icon-input'/>} 
								value={values[id]} 
								placeholder={placeholderValue}
								onChange={handleChange}
								onBlur={handleBlur} 
								size='large'
							/>
						: <BaseInput
								id={id}
								prefix={<Icon className='auth__icon-input'/>} 
								value={values[id]} 
								placeholder={placeholderValue}
								onChange={handleChange}
								onBlur={handleBlur} 
								size='large'
							/>
				} 
			</Form.Item>
}
export default Input;
					