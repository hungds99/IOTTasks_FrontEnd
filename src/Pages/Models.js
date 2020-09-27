// React
import React, { useEffect } from 'react';

// Components
import Model from '../Components/Model/Model';
import ModelAdd from '../Components/Model/ModelAdd';

import { getModels } from '../Redux/Actions/ModelAction';

// Material
import { makeStyles } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";

// Redux
import { useSelector, useDispatch } from 'react-redux';


const useStyles = makeStyles({
    model: {
      marginTop: 50,
    },
    card: {
        maxWidth: 345
    }
  });

export default function Models() {
    const classes = useStyles();

    const models = useSelector((state) => state.model.models)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getModels())
    },[])

    let recentModelsMarkup = models.map((model, index) => <Model key={index} model={model}/>)

    return (
        <div className={classes.model}>
            <ModelAdd/>
            <Grid container spacing={10}>
                {recentModelsMarkup}
            </Grid>
        </div>
    )
}


