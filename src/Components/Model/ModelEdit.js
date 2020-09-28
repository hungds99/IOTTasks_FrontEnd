// React
import React, { Fragment, useState, useEffect } from "react";

// Material
import { makeStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextField from "@material-ui/core/TextField";

import Button from "@material-ui/core/Button";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { getModel, editModel } from "../../Redux/Actions/ModelAction";

const useStyles = makeStyles({
    dialog: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
    },
    textField: {
        marginBottom: 10,
    },
});

export default function ModelEdit(props) {
    const classes = useStyles();
    const dispatch = useDispatch();

    const [open, setOpen] = useState(false);

    const modelInitEdit = useSelector((state) => state.model.model);

    const modelInitState = {
        _id: '',
        name: '',
        thumbnailUrl: '',
        objUrl: '',
        placeTypes: '',
        createdBy: '',
        updatedBy: ''
    }

    const [model, setModel] = useState(modelInitState);

    const mapModelToState = (model) => {
        setModel({
            _id: model._id ? model._id : '',
            name: model.name ? model.name : '',
            thumbnailUrl: model.thumbnailUrl ? model.thumbnailUrl : '',
            objUrl: model.objUrl ? model.objUrl : '',
            placeTypes: model.placeTypes ? model.placeTypes.join() : '',
            createdBy: model.createdBy ? model.createdBy : '',
            updatedBy: model.updatedBy ? model.updatedBy : '',
        })
    }

    const {
        name,
        thumbnailUrl,
        objUrl,
        placeTypes,
        createdBy,
        updatedBy,
    } = model;

    useEffect(() => {
        mapModelToState(modelInitEdit)
    },[modelInitEdit])
 
    const handleClickOpen = () => {
        dispatch(getModel(props.modelId));
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleChange = (event) => {
        let { name, value } = event.target;
        setModel({ ...model, [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(editModel({...model, placeTypes: model.placeTypes.split(",")}));
        setModel(modelInitState);
        handleClose();
    }

    return (
        <Fragment>
            <Button size="small" color="primary" onClick={handleClickOpen}>
                Edit
            </Button>

            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="draggable-dialog-title"
            >
                <DialogTitle id="draggable-dialog-title">
                    Edit Model
                </DialogTitle>
                <DialogContent className={classes.dialog}>
                    <TextField
                        className={classes.textField}
                        type="text"
                        name="name"
                        label="Name"
                        value={name}
                        onChange={handleChange}
                    />
                    <TextField
                        className={classes.textField}
                        type="text"
                        name="thumbnailUrl"
                        label="Thumnail Url"
                        value={thumbnailUrl}
                        onChange={handleChange}
                    />
                    <TextField
                        className={classes.textField}
                        type="text"
                        name="objUrl"
                        label="Object Url"
                        value={objUrl}
                        onChange={handleChange}
                    />
                    <TextField
                        className={classes.textField}
                        type="text"
                        name="placeTypes"
                        label="Place Types"
                        value={
                            placeTypes
                        }
                        onChange={handleChange}
                    />
                    <TextField
                        className={classes.textField}
                        type="text"
                        name="createdBy"
                        label="Created By"
                        value={createdBy}
                        onChange={handleChange}
                        disabled
                    />
                    <TextField
                        className={classes.textField}
                        type="text"
                        name="updatedBy"
                        label="Updated By"
                        value={updatedBy}
                        onChange={handleChange}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} variant="contained" color="secondary">
                        Cancel
                    </Button>
                    <Button onClick={handleSubmit} variant="contained" color="primary">
                        Update
                    </Button>
                </DialogActions>
            </Dialog>
        </Fragment>
    );
}
