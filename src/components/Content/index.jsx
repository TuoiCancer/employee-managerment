import { Box } from '@mui/material'
import React, { useEffect } from 'react'
import { initData } from '../../constants'
import FilterAndSearch from '../Filter and Search'
import TableData from '../Table'
const Content = () => {
	const [type, setType] = React.useState('')
	const [department, setDepartment] = React.useState('')
	const [position, setPosition] = React.useState('')

	const [data, setData] = React.useState(initData)

	useEffect(() => {
		if (type === 'All employee') {
			setData(initData)
		} else {
			const newData = initData.filter(item => item.status === type)
			setData(newData)
		}
	}, [type])

	useEffect(() => {
		if (department === '') {
			setData(initData)
		} else {
			const newData = initData.filter(item => item.department === department)
			setData(newData)
		}
	}, [department])

	useEffect(() => {
		if (position === '') {
			setData(initData)
		} else {
			const newData = initData.filter(item => item.position === position)
			setData(newData)
		}
	}, [position])

	return (
		<Box
			sx={{
				backgroundColor: '#F6F5F8',
				height: '200rem'
			}}
		>
			<FilterAndSearch
				type={type}
				department={department}
				position={position}
				setType={value => setType(value)}
				setDepartment={value => setDepartment(value)}
				setPosition={value => setPosition(value)}
				setData={value => setData(value)}
			/>
			<TableData rows={data} setData={value => setData(value)} />
		</Box>
	)
}

export default Content
