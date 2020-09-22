// React
import React, {Fragment, useState} from 'react';

// Material
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import Typography from '@material-ui/core/Typography';


import Button from '@material-ui/core/Button';

export default function ModelRemove() {

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Fragment>
            <Button size="small" color="secondary" onClick={handleClickOpen}>
                Remove
            </Button>

            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="draggable-dialog-title"
            >
                <DialogContent>
                <DialogContentText>
                    <Typography variant="h6">
                        Do you really want to remove ?
                    </Typography>
                </DialogContentText>
                </DialogContent>
                <DialogActions>
                <Button autoFocus onClick={handleClose} color="primary">
                    Cancel
                </Button>
                <Button onClick={handleClose} color="primary">
                    Accept
                </Button>
                </DialogActions>
            </Dialog>
        </Fragment>
    )
}
