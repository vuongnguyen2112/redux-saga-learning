import React, {Component} from 'react';
import {
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Grid,
    TextField,
    withStyles
} from "@material-ui/core";
import styles from "./styles";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add"
import {STATUSES} from "../../constants";
import TaskList from "../../components/TaskList";
import Dialog from '@material-ui/core/Dialog';
import TaskForm from "../../components/TaskForm";

const listTasks = [
    {
        id: 1,
        title: "Read book",
        description: "Angel and Demon",
        status: 0
    },
    {
        id: 2,
        title: "Play Poe",
        description: "Alone with loliness",
        status: 2
    },
    {
        id: 3,
        title: "Watch Kana",
        description: "With one hand",
        status: 1
    },

];

class TaskBoard extends Component {

    state = {
        open: false,
    }

    renderBoard() {
        let xhtml = null;
        xhtml = (
            <Grid container spacing={3}>
                {
                    STATUSES.map((status) => {
                        const taskFiltered = listTasks.filter(task => task.status === status.value);
                        return (
                            <TaskList key={status.value} tasks={taskFiltered} status={status}/>
                        )
                    })
                }
            </Grid>
        );
        return xhtml;
    }

    handleClose = () => {
        this.setState({
            open: false
        });
    }

    openForm = () => {
        this.setState({
            open: true
        });
    }
    renderForm() {
        const {open} = this.state;
        let xhtml = null;
        xhtml = (
            <TaskForm open={open} onClose={this.handleClose}/>
        );
        return xhtml;
    }

    render() {
        const {classes} = this.props;
        return (
            <div className={classes.taskboard}>
                <Button variant={"contained"} color={"primary"} className={classes.button} onClick={this.openForm}>
                    <AddIcon/> Thêm mới công việc
                </Button>
                {this.renderBoard()}
                {this.renderForm()}
            </div>
        );
    }
}

export default withStyles(styles)(TaskBoard);