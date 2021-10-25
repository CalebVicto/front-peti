import React from 'react'
import 'boxicons'
import './popup.css'

const Popup = ({ children, trigger, setTriger }) => {
	return trigger ? (
		<div className="popup">
			<div className="inner_popup">
				<button className="close-popup" onClick={() => setTriger(false)}>
					<box-icon name="x-circle" color="#FF5C58"></box-icon>
				</button>
				{children}
			</div>
		</div>
	) : (
		''
	)
}

export default Popup
