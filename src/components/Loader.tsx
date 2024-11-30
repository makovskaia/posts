import { Modal, Box, CircularProgress } from '@mui/material'

type LoaderProps = {
	visible: boolean,
}

const styleBox = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  p: 4,
}

export function Loader({ visible }: LoaderProps){
	
	return (
		<Modal open={visible} >
			<Box
      			sx={styleBox}
    		>
    			<CircularProgress size="3rem" color="#000" />
    		</Box>
			
		</Modal>
	)
}