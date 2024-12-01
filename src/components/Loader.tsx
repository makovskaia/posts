import Modal from '@mui/material/Modal'
import Box from '@mui/material/Box'
import CircularProgress from '@mui/material/CircularProgress'

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

const styleLoader = {
	color: '#000000'
}

export function Loader({ visible }: LoaderProps){
	
	return (
		<Modal open={visible} >
			<Box
      			sx={styleBox}
    		>
    			<CircularProgress size="3rem" sx={styleLoader} />
    		</Box>
		</Modal>
	)
}