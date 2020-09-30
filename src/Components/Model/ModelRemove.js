// React
import React, { Fragment, useState } from "react";

// Material
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import Typography from "@material-ui/core/Typography";

import Button from "@material-ui/core/Button";

// Redux
import { useSelector, useDispatch } from "react-redux";

import { getModel, removeModel } from "../../Redux/Actions/ModelAction";

export default function ModelRemove(props) {
    const [open, setOpen] = useState(false);
    const dispatch = useDispatch();
    const { _id, name } = useSelector(state => state.model.model);

    const handleClickOpen = () => {
        setOpen(true);
        dispatch(getModel(props.modelId));
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleDelete = event => {
        event.preventDefault();
        dispatch(removeModel(_id));
        handleClose();
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
                            Do you really want to remove <b>{name}</b>?
                        </Typography>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button
                        onClick={handleClose}
                        variant="contained"
                        color="secondary"
                    >
                        Cancel
                    </Button>
                    <Button
                        onClick={handleDelete}
                        variant="contained"
                        color="primary"
                    >
                        Remove
                    </Button>
                </DialogActions>
            </Dialog>
        </Fragment>
    );
}
