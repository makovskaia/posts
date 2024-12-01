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
  width: '100px',
  height: '100px',
  alignItems: 'center',
  transform: 'translate(-50%, -50%)',
  // padding: '30px',

}


export function Loader({ visible }: LoaderProps){
	
	return (
		<Modal
			open={visible}
			disableAutoFocus
			disableEnforceFocus
			disableEscapeKeyDown
			disableRestoreFocus
			onClose={function(e,r){console.log(e,r)}}
		>
			<Box
      			sx={styleBox}
    		>
    			<CircularProgress
    				size="50px"
    			/>
    		</Box>
		</Modal>
	)
}