// React
import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";

// Material
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextField from "@material-ui/core/TextField";

// Redux
import { useDispatch } from "react-redux";
import { addObject } from "../../Redux/Actions/ObjectAction";

const useStyles = makeStyles(theme => ({
    addBtn: {
        marginLeft: 25
    },
    textField: {
        width: "100%",
        marginBottom: 20
    }
}));

export default function ObjectAdd() {
    const classes = useStyles();
    const dispatch = useDispatch();

    const [open, setOpen] = useState(false);

    const initObject = {
        lng: "",
        lat: "",
        name: "",
        description: "",
        createdBy: ""
    };
    const [object, setObject] = useState(initObject);

    const { name, lng, lat, description, createdBy } = object;

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleChange = event => {
        let { name, value } = event.target;
        setObject({ ...object, [name]: value });
    };

    const handleSubmit = () => {
        dispatch(addObject(object));
    };

    return (
        <Fragment>
            <Button
                className={classes.addBtn}
                variant="contained"
                color="primary"
                onClick={handleOpen}
                component={Link}
                to={`/objects/create`}
            >
                Add
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="draggable-dialog-title"
            >
                <DialogTitle id="draggable-dialog-title">
                    Add Object
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
                        label="CreatedBy"
                        value={createdBy}
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
                        Add
                    </Button>
                </DialogActions>
            </Dialog>
        </Fragment>
    );
}
