// React
import React, { Fragment } from 'react';

// Material
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import ListItem from '@material-ui/core/ListItem';

import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ObjectIcon from '@material-ui/icons/EmojiObjects';
import HomeIcon from '@material-ui/icons/Home';
import PeopleIcon from '@material-ui/icons/People';
import CalendarIcon from '@material-ui/icons/DateRange';

// Components
import ModelEdit from './ModelEdit';
import ModelRemove from './ModelRemove';

const useStyles = makeStyles({
    media: {
      height: 140,
    },
    card: {
        maxWidth: 345
    }
  });

export default function Model(props) {
    const classes = useStyles();

    let {name, thumbnailUrl, objUrl, placeTypes, _id, createdAt, createdBy} = props.model;

    let placeTypesStr = placeTypes.join(" & ");

    return (
        <Grid item xs={6} sm={4}>
            <Card className={classes.card}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={thumbnailUrl}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {name}
                        </Typography>
                        <ListItem>
                            <ListItemIcon>
                                <HomeIcon />
                            </ListItemIcon>
                            <ListItemText primary={placeTypesStr} />
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <PeopleIcon />
                            </ListItemIcon>
                            <ListItemText primary={createdBy} />
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <CalendarIcon />
                            </ListItemIcon>
                            <ListItemText primary={createdAt} />
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <ObjectIcon />
                            </ListItemIcon>
                            <ListItemText primary={objUrl} />
                        </ListItem>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Fragment>
                        <ModelEdit/>
                        <ModelRemove/>  
                    </Fragment>
                </CardActions>
            </Card>
        </Grid>
    )
}
