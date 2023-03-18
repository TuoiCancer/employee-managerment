import {
	Box,
	Button,
	Checkbox,
	FormControlLabel,
	MenuItem,
	Modal,
	Select,
	TextField,
	Typography
} from '@mui/material'
import React from 'react'
import { toast } from 'react-toastify'

const style = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: 400,
	bgcolor: 'background.paper',
	boxShadow: 24,
	p: 4,
	borderRadius: '1rem',
	display: 'flex',
	flexDirection: 'column'
}

const ModalEdit = ({ open, setOpen, employee, setData }) => {
	const [name, setName] = React.useState(employee.name)
	const [img, setImg] = React.useState(employee.image)
	const [position, setPosition] = React.useState(employee.position)
	const [department, setDepartment] = React.useState(employee.department)
	const [salary, setSalary] = React.useState(employee.salary)
	const [status, setStatus] = React.useState(
		employee.status === 'active' ? true : false
	)

	const handleClose = () => setOpen(false)

	const handleSubmit = () => {
		if (!name || !img || !position || !department || !salary) {
			return toast.warn('Please fill all the fields', {
				position: 'top-right'
			})
		}

		setData(prev => {
			const index = prev.findIndex(item => item.id === employee.id)
			prev[index] = {
				...prev[index],
				name,
				img,
				position,
				department,
				salary,
				status: status ? 'active' : 'archived'
			}
			return [...prev]
		})

		setOpen(false)
	}

	return (
		<Modal
			open={open}
			onClose={handleClose}
			aria-labelledby='modal-modal-title'
			aria-describedby='modal-modal-description'
		>
			<Box sx={style}>
				<Typography
					id='modal-modal-title'
					variant='h6'
					component='h2'
					sx={{
						textAlign: 'center',
						fontSize: '2.6rem',
						fontWeight: 'bold'
					}}
				>
					Form field
				</Typography>
				<Box
					sx={{
						display: 'flex',
						flexDirection: 'column',
						gap: '2.4rem',
						marginTop: '2rem',
						'& .MuiInputBase-input': {
							fontSize: '1.4rem'
						},
						'& .MuiFormLabel-root': {
							fontSize: '1.4rem'
						}
					}}
				>
					<TextField
						id='name'
						label='Name'
						variant='outlined'
						required
						value={name}
						onChange={e => setName(e.target.value)}
					/>
					<TextField
						id='img'
						label='Avatar'
						variant='outlined'
						required
						value={img}
						onChange={e => setImg(e.target.value)}
					/>
					<TextField
						id='position'
						label='Position'
						variant='outlined'
						value={position}
						onChange={e => setPosition(e.target.value)}
						required
					/>
					<Select
						labelId='department'
						id='department'
						value={department}
						label='Department'
						onChange={e => setDepartment(e.target.value)}
					>
						<MenuItem value='Mobile'>Mobile</MenuItem>
						<MenuItem value='Marketing'>Marketing</MenuItem>
						<MenuItem value='Design'>Design</MenuItem>
						<MenuItem value='Backend'>Backend</MenuItem>
						<MenuItem value='Frontend'>Frontend</MenuItem>
						<MenuItem value='Development'>Development</MenuItem>
					</Select>
					<TextField
						id='salary'
						label='Salary'
						variant='outlined'
						value={salary}
						onChange={e => setSalary(e.target.value)}
						required
					/>

					<FormControlLabel
						control={
							<Checkbox
								checked={status}
								onChange={e => setStatus(e.target.checked)}
							/>
						}
						label='Active'
						sx={{
							'& .MuiTypography-root': {
								fontSize: '1.4rem',
								userSelect: 'none'
							}
						}}
					/>
				</Box>
				<Button
					sx={{
						marginTop: '2rem',
						fontSize: '1.6rem',
						padding: '1rem 2rem',
						backgroundColor: '#0EC9AE',
						color: '#FFF',
						'&:hover': {
							backgroundColor: '#0EC9AE',
							opacity: '0.8'
						}
					}}
					onClick={handleSubmit}
				>
					Save
				</Button>
			</Box>
		</Modal>
	)
}

export default ModalEdit
