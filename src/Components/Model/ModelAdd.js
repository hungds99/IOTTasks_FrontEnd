// React
import React, { Fragment, useState } from "react";

// Material
import { makeStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextField from "@material-ui/core/TextField";

import Button from "@material-ui/core/Button";

// Redux
import { useDispatch } from "react-redux";

import { addModel } from "../../Redux/Actions/ModelAction";

const useStyles = makeStyles({
    dialog: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around"
    },
    textField: {
        marginBottom: 30
    },
    addBtn: {
        marginBottom: 10
    }
});

export default function ModelAdd() {
    const classes = useStyles();
    const dispatch = useDispatch();

    const initModel = {
        name: "",
        thumbnailUrl: "",
        objUrl: "",
        placeTypes: "",
        createdBy: ""
    };

    const [model, setModel] = useState(initModel);
    const [error, setError] = useState({});

    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleChange = event => {
        let { name, value } = event.target;
        if (value === "") {
            setError({
                ...error,
                [name]: "This field is not empty required !"
            });
        } else {
            setError({
                ...error,
                [name]: ""
            });
        }
        setModel({ ...model, [name]: value });
    };

    const handleSubmit = event => {
        event.preventDefault();
        dispatch(
            addModel({ ...model, placeTypes: model.placeTypes.split(",") })
        );
        setModel(initModel);
        handleClose();
    };

    return (
        <Fragment>
            <Button
                className={classes.addBtn}
                variant="contained"
                color="primary"
                onClick={handleOpen}
            >
                Add
            </Button>

            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="draggable-dialog-title"
            >
                <DialogTitle id="draggable-dialog-title">Add Model</DialogTitle>
                <DialogContent className={classes.dialog}>
                    <TextField
                        className={classes.textField}
                        name="name"
                        label="Name"
                        variant="outlined"
                        value={model.name}
                        error={error.name ? true : false}
                        helperText={error.name}
                        onChange={handleChange}
                    />
                    <TextField
                        className={classes.textField}
                        name="thumbnailUrl"
                        label="Thumnail Url"
                        variant="outlined"
                        value={model.thumnailUrl}
                        error={error.thumbnailUrl ? true : false}
                        helperText={error.thumbnailUrl}
                        onChange={handleChange}
                    />
                    <TextField
                        className={classes.textField}
                        name="objUrl"
                        label="Object Url"
                        variant="outlined"
                        value={model.objUrl}
                        error={error.objUrl ? true : false}
                        helperText={error.objUrl}
                        onChange={handleChange}
                    />
                    <TextField
                        className={classes.textField}
                        name="placeTypes"
                        label="Place Types"
                        variant="outlined"
                        value={model.placeTypes}
                        error={error.placeTypes ? true : false}
                        helperText={error.placeTypes}
                        onChange={handleChange}
                    />
                    <TextField
                        className={classes.textField}
                        name="createdBy"
                        label="Created By"
                        variant="outlined"
                        value={model.createdBy}
                        error={error.createdBy ? true : false}
                        helperText={error.createdBy}
                        onChange={handleChange}
                    />
                    <TextField
                        className={classes.textField}
                        name="updatedBy"
                        label="Updated By"
                        variant="outlined"
                        disabled
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
                        Submit
                    </Button>
                </DialogActions>
            </Dialog>
        </Fragment>
    );
}
