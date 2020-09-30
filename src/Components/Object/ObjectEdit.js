// React
import React, { Fragment, useState} from "react";

// Material
import { makeStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import Button from "@material-ui/core/Button";

import Edit from "@material-ui/icons/Edit";

// Redux
import { useDispatch } from "react-redux";
import { editObject } from "../../Redux/Actions/ObjectAction";

const useStyles = makeStyles({
    dialog: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around"
    },
    textField: {
        width: "100%",
        marginBottom: 20
    }
});

export default function ObjectEdit(props) {
    const classes = useStyles();
    const dispatch = useDispatch();

    const [open, setOpen] = useState(false);

    const [object, setObject] = useState(props.object);

    const { name, location, description, createdBy, updatedBy } = object;
    const { lng, lat } = location;

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleChange = event => {
        let { name, value } = event.target;
        setObject(state => ({ ...state.object, [name]: value }));
    };

    const handleSubmit = event => {
        event.preventDefault();
        dispatch(editObject({ ...object }));
        handleClose();
    };

    return (
        <Fragment>
            <Tooltip title="Edit">
                <IconButton aria-label="edit" onClick={handleClickOpen}>
                    <Edit color="primary" />
                </IconButton>
            </Tooltip>

            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="draggable-dialog-title"
            >
                <DialogTitle id="draggable-dialog-title">
                    Edit Object
                </DialogTitle>
                <DialogContent className={classes.dialog}>
                    <TextField
                        className={classes.textField}
                        name="name"
                        label="Location Name"
                        value={name}
                        onChange={handleChange}
                    />
                    <TextField
                        className={classes.textField}
                        name="lng"
                        label="Longitude"
                        value={lng}
                        onChange={handleChange}
                    />
                    <TextField
                        className={classes.textField}
                        name="lat"
                        label="Latitude"
                        value={lat}
                        onChange={handleChange}
                    />
                    <TextField
                        className={classes.textField}
                        name="description"
                        label="Description"
                        value={description}
                        onChange={handleChange}
                    />
                    <TextField
                        className={classes.textField}
                        name="createdBy"
                        label="Created By"
                        value={createdBy}
                        onChange={handleChange}
                        disabled
                    />
                    <TextField
                        className={classes.textField}
                        name="updatedBy"
                        label="Updated By"
                        value={updatedBy ? updatedBy : ""}
                        onChange={handleChange}
                    />
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
                        onClick={handleSubmit}
                        variant="contained"
                        color="primary"
                    >
                        Update
                    </Button>
                </DialogActions>
            </Dialog>
        </Fragment>
    );
}
