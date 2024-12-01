import React, { useState, useEffect } from 'react'
import Modal from '@mui/material/Modal'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import CardHeader from '@mui/material/CardHeader';
import Typography from '@mui/material/Typography';


type PostModalProps = {
	title: string,
	body: string,
	state: 'closed'|'create'|'edit',
	onSubmit: (title: string, body: string) => void,
	onClose: () => void
}

const styleBox = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '60%',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
}
const styleInput = {
	marginBottom: '5%'
}

export function PostModal({ title, body, state, onSubmit, onClose }: PostModalProps){
	const [ titleNew, setTitle ] = useState<string>('')
	const [ bodyNew, setBody ] = useState<string>('')
	useEffect(()=>{
		setTitle(title)
		setBody(body)
	},[title,body])
	const headerText = state === 'edit' ? 'Edit Post' : state === 'create' ? 'Create Post' : ''
	return (
		<Modal
			open={state !== 'closed'}
			onClose={onClose}
		>
			<Box
      			component="form"
      			sx={styleBox}
      			noValidate
      			autoComplete="off"

    		>
    			<CardHeader>
    				<Typography variant="h6" gutterBottom>{headerText}</Typography>
    			</CardHeader>
    			<CardContent>
	      			<TextField
	      				autoFocus
	      				variant="outlined"
	      				label="Title"
	      				fullWidth
	      				value={titleNew}
	      				sx={styleInput}
	      				onChange={(e:any)=>setTitle(e.target.value)}
	     			/>
	     			<TextField
	      				multiline
	      				variant="outlined"
	      				minRows={6}
	      				label="Body"
	      				fullWidth
	      				value={bodyNew}
	      				onChange={(e:any)=>setBody(e.target.value)}
	      			/>
	      		</CardContent>
	      		<CardActions>
	      			<Button 
	      				onClick={(e: any) => {
		      				e.preventDefault();
		      				onSubmit(titleNew, bodyNew)
		      				setTitle('')
		      				setBody('')
		      			}}
		      			variant="outlined"
		      		>Submit</Button>
	      		</CardActions>
    		</Box>
		</Modal>
	)
}