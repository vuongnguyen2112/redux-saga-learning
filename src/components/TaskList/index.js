import React, {Component} from 'react';
import {Box, Grid, withStyles} from "@material-ui/core";
import styles from "./styles";
import TaskItem from "../TaskItem";
import PropTypes from "prop-types";

class TaskList extends Component {
    render() {
        const {classes, tasks, status, onEdit, onDelete} = this.props;
        return (
            <Grid item md={4} xs={12} key={status.value}>
                <Box mt={2} mb={2}>
                    <div className={classes.status}>{status.label}</div>
                </Box>
                <div className={classes.wrapperListTask}>
                    {
                        tasks.map((task) => {
                            return (
                                <TaskItem
                                    task={task}
                                    status={status}
                                    key={task.id}
                                    onClickEdit={() => onEdit(task)}
                                    onClickDelete={() => onDelete(task)}
                                />
                            );
                        })
                    }
                </div>
            </Grid>
        );
    }
}

TaskList.propTypes = {
    classes: PropTypes.object,
    tasks: PropTypes.array,
    status: PropTypes.object,
    onEdit: PropTypes.func,
    onDelete: PropTypes.func
}

export default withStyles(styles)(TaskList);