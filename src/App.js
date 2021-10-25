import './App.css'
import Table from './components/table/Table'
import axios from 'axios'
import { useEffect, useState } from 'react'
import loading from './images/loading.gif'
import Popup from './components/popup/Popup'
import Form from './components/form/Form'

// Fetch
const fetch_link = 'https://tranquil-journey-45316.herokuapp.com/api/user'
const fetch = axios.create({ baseURL: fetch_link })

function App() {
	const [Users, setUsers] = useState([])
	const [TrigerCreate, setTrigerCreate] = useState(false)
	const [EditUser, setEditUser] = useState(false)
	const [Loader, setLoader] = useState(true)

	const getUsers = async () => {
		const { data } = await fetch.get()
		setUsers(data)
		setLoader(false)
	}

	const createUser = async (e) => {
		setLoader(true)
		e.preventDefault()
		const user = {
			name: e.target.name.value,
			last_name: e.target.last_name.value,
			email: e.target.email.value,
			password: e.target.password.value
		}
		const { data } = await fetch.post('/', user)
		if (!data.name) alert('Error al crear!!!')
		setTrigerCreate(false)
		getUsers()
		setLoader(false)
	}

	const editUser = async (id) => {
		setLoader(true)
		const { data } = await fetch.get(`/${id}`)
		data.id = id
		setEditUser(data)
		setLoader(false)
	}

	const updateUser = async (e) => {
		setLoader(true)
		e.preventDefault()
		const id = e.target.id.value
		const last_password = e.target.last_password.value
		const new_password = e.target.password.value
		const password = new_password === '' ? last_password : new_password
		const user = {
			name: e.target.name.value,
			last_name: e.target.last_name.value,
			email: e.target.email.value,
			password
		}
		const { data } = await fetch.put(`/${id}`, user)
		if (!data.name) alert('Error al Actualizar!!!')
		setEditUser(false)
		getUsers()
		setLoader(false)
	}

	const deleteUser = async (id) => {
		setLoader(true)
		await fetch.delete(`/${id}`)
		getUsers()
		setLoader(false)
	}

	useEffect(() => {
		getUsers()
	}, [])

	return (
		<div className="App">
			{Loader ? <div className="div-loader"><img className="loading" src={loading} alt="Cargando..." /></div> : ''}
			<div className="max-width">
				<h1 className="title">Usuarios</h1>

				<button className="button" onClick={() => setTrigerCreate(true)}>
					Crear Usuario
				</button>

				<Table data={Users} handleEdit={editUser} handleDelete={deleteUser}/>
			</div>

			{/* Crear Usuario */}
			<Popup trigger={TrigerCreate} setTriger={setTrigerCreate}>
				<Form data={{}} onSubmit={createUser} />
			</Popup>

			{/* Editar Usuario */}
			<Popup trigger={EditUser} setTriger={setEditUser}>
				<Form data={EditUser} onSubmit={updateUser} />
			</Popup>
		</div>
	)
}

export default App
