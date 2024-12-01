import React, { useState, useEffect } from 'react'
import Modal from '@mui/material/Modal'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'

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
  width: '70%',
  height: '60%',
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
	return (
		<Modal open={state !== 'closed'} onClose={onClose} >
			<Box
      			component="form"
      			sx={styleBox}
      			noValidate
      			autoComplete="off"

    		>

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
      				maxRows={6}
      				minRows={4}
      				label="Body"
      				fullWidth
      				value={bodyNew}
      				onChange={(e:any)=>setBody(e.target.value)}
      			/>
      			<Button onClick={(e: any) => {
      				e.preventDefault();
      				onSubmit(titleNew, bodyNew)
      				setTitle('')
      				setBody('')
      			}}>Submit</Button>
    		</Box>
		</Modal>
	)
}