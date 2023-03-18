import React from 'react'
import { Box, Typography } from '@mui/material'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone'
import MailOutlineIcon from '@mui/icons-material/MailOutline'

import { styled } from '@mui/material/styles'

const NotificationsIcon = styled(NotificationsNoneIcon)({
	marginRight: '2rem',
	fontSize: '2.6rem',
	color: '#DAD9DD',
	transform: 'rotate(-8deg)',
	cursor: 'pointer',
	position: 'relative',
	'&::after': {
		content: '""',
		position: 'absolute',
		top: 0,
		right: 0,
		width: '1.6rem',
		height: '1.6rem',
		backgroundColor: '#0EC9AE',
		borderRadius: '50%'
	}
})

const MailIcon = styled(MailOutlineIcon)({
	marginRight: '2rem',
	fontSize: '2.6rem',
	color: '#DAD9DD',
	cursor: 'pointer'
})

const Header = () => {
	return (
		<Box
			sx={{
				display: 'flex',
				justifyContent: 'space-between',
				alignItems: 'center',
				height: '10rem',
				padding: '0 5rem'
			}}
		>
			<Typography
				variant='h1'
				sx={{
					fontWeight: 'bold',
					color: '#000000',
					fontSize: '3rem'
				}}
			>
				StaffZone
			</Typography>
			<Box
				sx={{
					display: 'flex',
					alignItems: 'center',
					height: '100%',
					'& h6': {
						display: 'flex',
						alignItems: 'center',
						height: '100%',
						marginRight: '2.6rem',
						fontSize: '1.6rem',
						cursor: 'pointer',
						position: 'relative',
						'&::after': {
							content: '""',
							position: 'absolute',
							bottom: 0,
							left: 0,
							width: '100%',
							height: '0.4rem',
							backgroundColor: '#0EC9AE',
							borderRadius: '0.2rem',
							visibility: 'hidden'
						},
						'&.active': {
							'&::after': {
								visibility: 'visible'
							}
						}
					}
				}}
			>
				<Typography variant='h6' className='active'>
					Employee
				</Typography>
				<Typography variant='h6'>Client</Typography>
			</Box>
			<Box
				sx={{
					display: 'flex',
					alignItems: 'center'
				}}
			>
				<NotificationsIcon />
				<MailIcon />
				<Box
					component='img'
					src='https://images.unsplash.com/photo-1677946061345-80328185774c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80'
					alt='Profile'
					width={50}
					height={50}
					sx={{
						borderRadius: '50%',
						objectFit: 'cover'
					}}
				/>
			</Box>
		</Box>
	)
}

export default Header
