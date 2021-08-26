import React, {Component} from 'react';
import {Grid, withStyles} from "@material-ui/core";
import styles from "./styles";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Card from "@material-ui/core/Card";
import Fab from '@material-ui/core/Fab';
import Icon from '@material-ui/core/Icon';
import PropTypes from 'prop-types';

class TaskItem extends Component {
    render() {
        const {task, classes, status, onClickEdit} = this.props;
        const {id, title, description} = task;
        return (
            <Card key={id} className={classes.card}>
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
                    <Fab color="primary" aria-label="Edit" size={"small"} onClick={onClickEdit}>
                        <Icon fontSize={"small"}>
                            edit_icon
                        </Icon>
                    </Fab>
                    <Fab color="secondary" aria-label="Delete" size={"small"}>
                        <Icon fontSize={"small"}>
                            delete_icon
                        </Icon>
                    </Fab>
                </CardActions>
            </Card>
        );
    }
}

TaskItem.propTypes = {
    classes: PropTypes.object,
    task: PropTypes.object,
    status: PropTypes.object,
    onClickEdit: PropTypes.func
}

export default withStyles(styles)(TaskItem);