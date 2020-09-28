// React
import React, { useEffect, useState } from "react";

// Components
import Model from "../Components/Model/Model";
import ModelAdd from "../Components/Model/ModelAdd";

import { getModels } from "../Redux/Actions/ModelAction";

// Material
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Alert from "@material-ui/lab/Alert";
import Pagination from "@material-ui/lab/Pagination";

// Redux
import { useSelector, useDispatch } from "react-redux";

const useStyles = makeStyles({
    model: {
        marginTop: 50,
        position: "relative"
    },
    alert: {
        top: -10,
        right: 10,
        width: 400,
        position: "absolute"
    },
    card: {
        maxWidth: 345
    },
    pagination: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 40
    }
});

export default function Models() {
    const classes = useStyles();
    const [currentPage, setCurrentPage] = useState(1);

    const { models } = useSelector(state => state.model);
    const { loading } = useSelector(state => state.ui);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getModels());
    }, []);

    let recentModelsMarkup = loading
        ? "loading......"
        : models.map((model, index) => <Model key={index} model={model} />);

    const changePage = event => {
        console.log(event.target.textContent);
        setCurrentPage(parseInt(event.target.textContent));
    };

    return (
        <div className={classes.model}>
            <ModelAdd />
            <Alert className={classes.alert} severity="success">
                This is a success alert — check it out!
            </Alert>
            <Grid container spacing={10}>
                {recentModelsMarkup}
            </Grid>
            <div className={classes.pagination}>
                <Pagination
                    count={10}
                    color="primary"
                    page={currentPage}
                    onChange={changePage}
                />
            </div>
        </div>
    );
}
