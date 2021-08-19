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
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {bindActionCreators} from "redux";
import * as taskActions from "./../../actions/task";

class TaskBoard extends Component {

    state = {
        open: false,
    }

    componentDidMount() {
        const {taskActionCreators} = this.props;
        const {fetchListTaskRequest} = taskActionCreators;
        fetchListTaskRequest();
    }

    renderBoard() {
        const {listTask} = this.props;
        let xhtml = null;
        xhtml = (
            <Grid container spacing={3}>
                {
                    STATUSES.map((status) => {
                        const taskFiltered = listTask.filter(task => task.status === status.value);
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

TaskBoard.propType = {
    classes: PropTypes.object,
    taskActionCreators: PropTypes.shape({
        fetchListTaskRequest: PropTypes.func
    }),
    listTask: PropTypes.array,
};


const mapStateToProps = state =>{
    return {
        listTask: state.task.listTask,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        taskActionCreators: bindActionCreators(taskActions, dispatch),
    }
};
export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(TaskBoard));