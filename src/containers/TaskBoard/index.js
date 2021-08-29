import React, {Component} from 'react';
import {
    Box,
    Grid
} from "@material-ui/core";
import styles from "./styles";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add"
import {STATUSES} from "../../constants";
import TaskList from "../../components/TaskList";
import TaskForm from "../TaskForm";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {bindActionCreators, compose} from "redux";
import * as taskActions from "./../../actions/task";
import SearchBox from "../../components/SearchBox";
import * as modalActions from "./../../actions/modal";
import {withStyles} from "@material-ui/styles";

class TaskBoard extends Component {

    componentDidMount() {
        const {taskActionCreators} = this.props;
        const {fetchListTask} = taskActionCreators;
        fetchListTask();
    }

    openForm = () => {
        const {modalActionCreators, taskActionCreators} = this.props;
        const {setTaskEditing} = taskActionCreators;
        setTaskEditing(null);
        const {showModal, changeModalTitle, changeModalContent} = modalActionCreators;
        showModal();
        changeModalTitle('Thêm công việc mới');
        changeModalContent(<TaskForm/>);
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

    handleEditTask = task => {
        const {taskActionCreators, modalActionCreators} = this.props;
        const {setTaskEditing} = taskActionCreators;
        setTaskEditing(task);
        const {showModal, changeModalTitle, changeModalContent} = modalActionCreators;
        showModal();
        changeModalTitle('Cập nhật công việc');
        changeModalContent(<TaskForm/>);
    }

    showModalDeleteTask = task => {
        const {modalActionCreators, classes} = this.props;
        const {showModal, hideModal, changeModalTitle, changeModalContent} = modalActionCreators;
        showModal();
        changeModalTitle('Xoá công việc');
        changeModalContent(
            <div className={classes.modalDelete}>
                <div className={classes.modalConfirmText}>
                    Bạn chắc chắn muốn xoá <span className={classes.modalConfirmTextBold}>{task.title}</span>?
                </div>
                <Box display={"flex"} flexDirection={"row-reverse"} mt={2}>
                    <Box ml={1}>
                        <Button variant={"contained"} color={"primary"}
                                onClick={() => this.handleDeleteTask(task)}>Xoá</Button>
                    </Box>
                    <Box>
                        <Button variant={"contained"} onClick={hideModal}>Huỷ Bỏ</Button>
                    </Box>
                </Box>
            </div>
        );
    }

    handleDeleteTask(task) {
        const {taskActionCreators} = this.props;
        const {deleteTask} = taskActionCreators;
        const {id} = task;
        deleteTask(id);
    }

    renderBoard() {
        const {listTask} = this.props;
        return (
            <Grid container spacing={3}>
                {
                    STATUSES.map((status) => {
                        const taskFiltered = listTask.filter(task => task.status === status.value);
                        return (
                            <TaskList
                                key={status.value}
                                tasks={taskFiltered}
                                status={status}
                                onEdit={this.handleEditTask}
                                onDelete={this.showModalDeleteTask}
                            />
                        )
                    })
                }
            </Grid>
        );
    }

    renderSearchBox() {
        return (
            <SearchBox handleChange={this.handleFilter}/>
        );
    }


    render() {
        const {classes} = this.props;
        return (
            <div className={classes.taskboard}>
                <Button variant={"contained"} color={"primary"} className={classes.button} onClick={this.loadData}
                        style={{marginRight: 20}}
                >
                    Load data
                </Button>
                <Button variant={"contained"} color={"primary"} className={classes.button} onClick={this.openForm}>
                    <AddIcon/> Thêm mới công việc
                </Button>
                {this.renderSearchBox()}
                {this.renderBoard()}
            </div>
        );
    }
}

TaskBoard.propType = {
    classes: PropTypes.object,
    taskActionCreators: PropTypes.shape({
        fetchListTask: PropTypes.func,
        filterTask: PropTypes.func,
        setTaskEditing: PropTypes.func,
        deleteTask: PropTypes.func
    }),
    modalActionCreators: PropTypes.shape({
        showModal: PropTypes.func,
        hideModal: PropTypes.func,
        changeModalTitle: PropTypes.func,
        changeModalContent: PropTypes.func
    }),
    listTask: PropTypes.array,

};


const mapStateToProps = state => {
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

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(
    withStyles(styles),
    withConnect,
)(TaskBoard);