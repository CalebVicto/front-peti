import React from 'react'
import './Form.css'
const Form = ({ data = [], onSubmit }) => {
	const val = !data.name ? false : true
	return (
		<form className='form' onSubmit={onSubmit}>
			<input type="hidden" name="last_password" defaultValue={val ? data.password : "" } readOnly/>
			<input type="hidden" name="id" defaultValue={val ? data.id : "" } readOnly/>
			<h3 className="form-title">{!val ? "Crear Usuario" : "Actualizar Usuario" }</h3>
			<div className="form__field">
				<input className="form__input" type="text" defaultValue={val ? data.name : ""} name="name" autoComplete="nope" required placeholder=" " />
				<label className="form__label">Nombre:</label>
			</div>
			<div className="form__field">
				<input className="form__input" type="text" defaultValue={val ? data.last_name : ""} name="last_name" autoComplete="nope" required placeholder=" " />
				<label className="form__label">Apellidos:</label>
			</div>
			<div className="form__field">
				<input className="form__input" type="email" defaultValue={val  ? data.email : ""} name="email" autoComplete="nope" required placeholder=" " />
				<label className="form__label">Correo:</label>
			</div>
			<div className="form__field">
				{!val 
				? <input className="form__input" type="password" name="password" autoComplete="nope" placeholder=" " required/>
				: <input className="form__input" type="password" name="password" autoComplete="nope" placeholder=" " />
			}
				<label className="form__label">{val ? "Nueva Contraseña" : " Contraseña"}</label>
			</div>
			<button className="button">{!val ? "Crear" : "Actualizar" }</button>
		</form>
	)
}

export default Form
