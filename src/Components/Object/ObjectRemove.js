// React
import React, { Fragment, useState } from "react";

// Material
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import Button from "@material-ui/core/Button";
import Delete from "@material-ui/icons/Delete";

// Redux
import { useDispatch } from "react-redux";

import { removeObject } from "../../Redux/Actions/ObjectAction";

export default function ObjectRemove(props) {
    const [open, setOpen] = useState(false);
    const dispatch = useDispatch();

    const { _id, name } = props.object;

    const handleOpen = () => {
        console.log(_id, name);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleDelete = () => {
        dispatch(removeObject(_id));
        handleClose();
    };

    return (
        <Fragment>
            <Tooltip title="Delete">
                <IconButton aria-label="delete" onClick={handleOpen}>
                    <Delete color="secondary" />
                </IconButton>
            </Tooltip>

            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="draggable-dialog-title"
            >
                <DialogContent>
                    <Typography variant="h6">
                        Do you really want to remove <b>{name}</b>?
                    </Typography>
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
