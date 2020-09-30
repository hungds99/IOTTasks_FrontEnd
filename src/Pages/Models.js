// React
import React, { useEffect, useState, Fragment } from "react";

// Components
import Model from "../Components/Model/Model";
import ModelAdd from "../Components/Model/ModelAdd";

// Material
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Alert from "@material-ui/lab/Alert";
import Pagination from "@material-ui/lab/Pagination";
import CircularProgress from "@material-ui/core/CircularProgress";

// Redux
import { useSelector, useDispatch } from "react-redux";

import { getModels } from "../Redux/Actions/ModelAction";

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
    },
    loading: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "50vh"
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

    const changePage = event => {
        setCurrentPage(parseInt(event.target.textContent));
    };

    let recentModelsMarkup = models.map((model, index) => (
        <Model key={index} model={model} />
    ));

    return (
        <div className={classes.model}>
            {/* <Alert className={classes.alert} severity="success">
                This is a success alert — check it out!
            </Alert> */}
            {loading ? (
                <div className={classes.loading}>
                    <CircularProgress />
                </div>
            ) : (
                <Fragment>
                    <ModelAdd />
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
                </Fragment>
            )}
        </div>
    );
}
