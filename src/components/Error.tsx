import Modal from '@mui/material/Modal'
import ErrorIcon from '@mui/icons-material/Error';
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

type LoaderProps = {
	visible: boolean,
	onClose: ()=>void
}

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


export function Error({ visible, onClose }: LoaderProps){
	
	return (
		<Modal
			open={visible}
			disableAutoFocus
			disableEnforceFocus
			disableRestoreFocus
			onClose={onClose}
		>
			<Box
      			sx={style}
    		>
    			<ErrorIcon/>
    			<Typography color='error' id="modal-modal-title" variant="h6" component="h2">
            Error
          </Typography>
    		</Box>
		</Modal>
	)
}