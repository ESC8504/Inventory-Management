import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button } from '@mui/material';

function WarningDialog({ open, handleClose, title, content }) {
    return (
        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="warning-dialog-title"
            aria-describedby="warning-dialog-description"
        >
            <DialogTitle id="warning-dialog-title">{title}</DialogTitle>
            <DialogContent>
                <DialogContentText id="warning-dialog-description">{content}</DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>OK</Button>
            </DialogActions>
        </Dialog>
    )
}

export default WarningDialog;