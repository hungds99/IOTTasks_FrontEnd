// React
import React, { useState } from 'react';

// Components
import Model from '../Components/Model/Model';
import ModelAdd from '../Components/Model/ModelAdd';

// Material
import { makeStyles } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";

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

    let modelInit = [
        {
            "name": "Novotel",
            "thumbnailUrl": "https://www.hotel24h.com.vn/data_news/bed2a6b5-b.jpg",
            "objUrl": "https://all.accor.com/asia",
            "placeTypes": [
            "Building",
            "Hotel"
            ],
            "_id": "5f68688fef3a9c89bc193fed",
            "createdAt": "2020-09-21 08:35:08",
            "createdBy": "HungDinh"
        },
        {
            "name": "Novotel",
            "thumbnailUrl": "https://www.hotel24h.com.vn/data_news/bed2a6b5-b.jpg",
            "objUrl": "https://all.accor.com/asia",
            "placeTypes": [
            "Building",
            "Hotel"
            ],
            "_id": "5f68688fef3a9c89bc193fed",
            "createdAt": "2020-09-21 08:35:08",
            "createdBy": "HungDinh"
        },
        {
            "name": "Novotel",
            "thumbnailUrl": "https://www.hotel24h.com.vn/data_news/bed2a6b5-b.jpg",
            "objUrl": "https://all.accor.com/asia",
            "placeTypes": [
            "Building",
            "Hotel"
            ],
            "_id": "5f68688fef3a9c89bc193fed",
            "createdAt": "2020-09-21 08:35:08",
            "createdBy": "HungDinh"
        },
        {
            "name": "Novotel",
            "thumbnailUrl": "https://www.hotel24h.com.vn/data_news/bed2a6b5-b.jpg",
            "objUrl": "https://all.accor.com/asia",
            "placeTypes": [
            "Building",
            "Hotel"
            ],
            "_id": "5f68688fef3a9c89bc193fed",
            "createdAt": "2020-09-21 08:35:08",
            "createdBy": "HungDinh"
        }
    ]

    const [models, setModel] = useState(modelInit);

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


