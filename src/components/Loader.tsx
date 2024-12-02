import Backdrop from '@mui/material/Backdrop'
import Box from '@mui/material/Box'
import CircularProgress from '@mui/material/CircularProgress'

type LoaderProps = {
	visible: boolean,
}



export function Loader({ visible }: LoaderProps){
	
	return (
		<Backdrop
        sx={(theme) => ({ color: '#fff', zIndex: theme.zIndex.drawer + 1 })}
        open={visible}
        // onClick={handleClose}
      >
        <CircularProgress size="3rem" disableShrink />
    </Backdrop>
	)
}