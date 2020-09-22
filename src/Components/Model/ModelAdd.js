// React
import React, { Fragment, useState } from 'react';

// Material
import { makeStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';

import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
    dialog: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around'
    },
    textField: {
        marginBottom: 10
    },
    addBtn: {
        marginBottom: 10
    }
  });

export default function ModelAdd() {
    const classes = useStyles();

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Fragment>
            <Button className={classes.addBtn} variant="contained" color="primary" onClick={handleClickOpen}>
                Add
            </Button>

            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="draggable-dialog-title"
            >
                <DialogTitle id="draggable-dialog-title">
                    Add Model
                </DialogTitle>
                <DialogContent className={classes.dialog}>
                    <TextField className={classes.textField} name="name" label="Name" variant="outlined" defaultValue="Novotel"/>
                    <TextField className={classes.textField} name="thumnailUrl" label="Thumnail Url" variant="outlined"  defaultValue="https://www.hotel24h.com.vn/data_news/bed2a6b5-b.jpg"/>
                    <TextField className={classes.textField} name="objUrl" label="Object Url" variant="outlined" defaultValue="https://all.accor.com/asia"/>
                    <TextField className={classes.textField} name="placeTypes" label="Place Types" variant="outlined" defaultValue="Building & Hotel"/>
                    <TextField className={classes.textField} name="createdBy" label="Created By" variant="outlined" defaultValue="Hung Dinh" disabled/>
                    <TextField className={classes.textField} name="updatedBy" label="Updated By" variant="outlined" defaultValue="Hung Dinh"/>
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
