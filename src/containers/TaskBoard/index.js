import React, {Component} from 'react';
import {
    Grid,
    withStyles
} from "@material-ui/core";
import styles from "./styles";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add"
import {STATUSES} from "../../constants";
import TaskList from "../../components/TaskList";
import TaskForm from "../TaskForm";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {bindActionCreators} from "redux";
import * as taskActions from "./../../actions/task";
import SearchBox from "../../components/SearchBox";
import * as modalActions from "./../../actions/modal";

class TaskBoard extends Component {

    state = {
        open: false,
    }

    componentDidMount() {
        const {taskActionCreators} = this.props;
        const {fetchListTask} = taskActionCreators;
        fetchListTask();
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
        const {modalActionCreators} = this.props;
        const {showModal, changeModalTitle, changeModalContent} = modalActionCreators;
        showModal();
        changeModalTitle('Thêm điều mục mới');
        changeModalContent(<TaskForm/>);
    }

    renderForm() {
        const {open} = this.state;
        let xhtml = null;
        xhtml = (
            <TaskForm open={open} onClose={this.handleClose}/>
        );
        return xhtml;
    }

    loadData = () => {
        const {taskActionCreators} = this.props;
        const {fetchListTask} = taskActionCreators;
        fetchListTask();
    }

    handleFilter = e => {
        const {value} = e.target;
        const {taskActionCreators} = this.props;
        const {filterTask} = taskActionCreators;
        filterTask(value);
    }

    renderSearchBox() {
        let xhtml = null;
        xhtml = (
            <SearchBox handleChange={this.handleFilter}/>
        );
        return xhtml;
    }


    render() {
        const {classes} = this.props;
        return (
            <div className={classes.taskboard}>
                <Button variant={"contained"} color={"primary"} className={classes.button} onClick={this.loadData}
                        style={{ marginRight: 20 }}
                >
                    Load data
                </Button>
                <Button variant={"contained"} color={"primary"} className={classes.button} onClick={this.openForm}>
                    <AddIcon/> Thêm mới công việc
                </Button>
                {this.renderSearchBox()}
                {this.renderBoard()}
                {this.renderForm()}
            </div>
        );
    }
}

TaskBoard.propType = {
    classes: PropTypes.object,
    taskActionCreators: PropTypes.shape({
        fetchListTask: PropTypes.func,
        filterTask: PropTypes.func,
    }),
    modalActionCreators: PropTypes.shape({
       showModal: PropTypes.func,
        hideModal: PropTypes.func,
        changeModalTitle: PropTypes.func,
        changeModalContent: PropTypes.func
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
        modalActionCreators: bindActionCreators(modalActions, dispatch),
    }
};
export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(TaskBoard));