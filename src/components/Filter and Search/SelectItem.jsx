import { MenuItem, Select } from '@mui/material'
import React from 'react'

const SelectItem = ({ state, setState, values, placeholder }) => {
	const handleChange = event => {
		setState(event.target.value)
	}
	return (
		<Select
			labelId='demo-simple-select-label'
			id='demo-simple-select'
			value={state}
			onChange={handleChange}
			placeholder={placeholder}
			sx={{
				fontSize: '1.2rem',
				marginRight: '2rem'
			}}
		>
			{values.map((value, i) => (
				<MenuItem key={i} value={value}>
					{value}
				</MenuItem>
			))}
		</Select>
	)
}

export default SelectItem
