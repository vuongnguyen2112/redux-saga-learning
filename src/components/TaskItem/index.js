import React, {Component} from 'react';
import {Grid, withStyles} from "@material-ui/core";
import styles from "./styles";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Card from "@material-ui/core/Card";
import Fab from '@material-ui/core/Fab';
import Icon from '@material-ui/core/Icon';

class TaskItem extends Component {
    render() {
        const {task, classes, status} = this.props;
        const {id, title, description} = task;
        return (
            <Card key={id} >
                <CardContent>
                    <Grid container justifyContent="space-between">
                        <Grid item md={8}>
                            <Typography component="h2">{title}</Typography>
                        </Grid>
                        <Grid item md={4}>
                            {status.label}
                        </Grid>
                    </Grid>
                    <p>{description}</p>
                </CardContent>
                <CardActions className={classes.cardActions}>
                    <Fab color="primary" aria-label="add" size={"small"}>
                        <Icon fontSize={"small"}>
                            edit_icon
                        </Icon>
                    </Fab>
                    <Fab color="secondary" aria-label="delete" size={"small"}>
                        <Icon fontSize={"small"}>
                            delete_icon
                        </Icon>
                    </Fab>
                </CardActions>
            </Card>
        );
    }
}

export default withStyles(styles)(TaskItem);