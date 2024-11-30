import React, { useState } from 'react'
import { Modal, Box, TextField, Button } from '@mui/material'

type PostModalProps = {
	title: string,
	body: string,
	open: boolean,
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

export function PostModal({ title, body, open, onSubmit, onClose }: PostModalProps){
	const [ titleNew, setTitle ] = useState<string>(title)
	const [ bodyNew, setBody ] = useState<string>(body)
	return (
		<Modal open={open} onClose={onClose} >
			<Box
      			component="form"
      			sx={styleBox}
      			noValidate
      			autoComplete="off"

    		>

      			<TextField
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
      			}}>Create Post</Button>
    		</Box>
		</Modal>
	)
}