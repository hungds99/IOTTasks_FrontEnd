// React
import React, { Fragment } from 'react';

// Material
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';

import Button from '@material-ui/core/Button';

export default function ModelEdit() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Fragment>
            <Button size="small" color="primary" onClick={handleClickOpen}>
                Edit
            </Button>
            <Button size="small" color="secondary" onClick={handleClickOpen}>
                Remove
            </Button>

            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="draggable-dialog-title"
            >
                <DialogTitle id="draggable-dialog-title">
                    Edit Model
                </DialogTitle>
                <DialogContent>
                <DialogContentText>
                    <TextField required id="standard-required" label="Required" defaultValue="Hello World" />
                </DialogContentText>
                </DialogContent>
                <DialogActions>
                <Button autoFocus onClick={handleClose} color="primary">
                    Cancel
                </Button>
                <Button onClick={handleClose} color="primary">
                    Subscribe
                </Button>
                </DialogActions>
            </Dialog>

        </Fragment>
    )
}
