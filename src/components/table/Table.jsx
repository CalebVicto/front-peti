import React from 'react'
import './Table.css'
import empty from '../../images/empty.png'

const Table = ({ data = [], handleEdit, handleDelete }) => {
	return (
		<table>
			<thead>
				<tr>
					<th>Nombres</th>
					<th>Apellidos</th>
					<th>Correo</th>
					<th>Acciones</th>
				</tr>
			</thead>
			<tbody>
				{data.length !== 0 ? (
					data.map((i) => (
						<tr key={i.id}>
							<td>{i.name}</td>
							<td>{i.last_name}</td>
							<td>{i.email}</td>
							<td className="acciones">
								<div>
									<button onClick={() => handleEdit(i.id)}>
										<box-icon name="edit-alt" color="#3DB2FF"></box-icon>
									</button>
									<button onClick={() => {if(window.confirm('Estas seguro que quieres borrar?')) handleDelete(i.id)}}>
										<box-icon name="trash" type="solid" color="#FF5C58"></box-icon>
									</button>
								</div>
							</td>
						</tr>
					))
				) : (
					<tr>
						<td className="vacio" colSpan="4">
							<div>
								<img src={empty} alt="No hay datos" /> <br />
								<span>No hay datos para mostrar.</span>
							</div>
						</td>
					</tr>
				)}
			</tbody>
		</table>
	)
}

export default Table
