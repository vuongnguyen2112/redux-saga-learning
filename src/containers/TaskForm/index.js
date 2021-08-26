import React, {Component} from 'react';
import {Box, Grid, MenuItem, withStyles} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import styles from "./styles";
import PropTypes from "prop-types";
import {bindActionCreators, compose} from "redux";
import * as modalActions from "../../actions/modal";
import * as taskActions from "../../actions/task";
import {connect} from "react-redux";
import {reduxForm, Field} from "redux-form";
import renderTextField from "../../components/FormHelper/TextField";
import validate from './validate';
import renderSelectField from "../../components/FormHelper/Select";

class TaskForm extends Component {

    handleSubmitForm = data => {
        const {taskActionCreators, taskEditing} = this.props;
        const {addTask, updateTask} = taskActionCreators;
        const {title, description, status} = data;
        if (taskEditing && taskEditing.id) {
            updateTask(title, description, status);
        }else {
            addTask(title, description);
        }
    }

    renderStatusSelection() {
        let xhtml = null;
        const {taskEditing, classes} = this.props;
        if (taskEditing && taskEditing.id) {
            xhtml = (
                <Field
                    id={"status"}
                    label={"Trạng thái"}
                    className={classes.select}
                    name={"status"}
                    component={renderSelectField}
                >
                    <MenuItem value={0}>Ready</MenuItem>
                    <MenuItem value={1}>In Progress</MenuItem>
                    <MenuItem value={2}>Complete</MenuItem>
                </Field>
            );
        }
        return xhtml;
    }

    render() {
        const {classes, modalActionsCreators, handleSubmit, invalid, submitting} = this.props;
        const {hideModal} = modalActionsCreators;
        return (
            <form onSubmit={handleSubmit(this.handleSubmitForm)}>
                <Grid container>
                    <Grid item md={12}>
                        <Field
                            id={"title"}
                            label={"Tiêu đề"}
                            className={classes.textField}
                            name={"title"}
                            margin={"normal"}
                            component={renderTextField}
                        />
                    </Grid>
                    <Grid item md={12}>
                        <Field
                            id={"description"}
                            label={"Mô tả"}
                            className={classes.textField}
                            multiline
                            maxRows={4}
                            name={"description"}
                            margin={"normal"}
                            component={renderTextField}
                        />
                    </Grid>
                    {this.renderStatusSelection()}
                    <Grid item md={12}>
                        <Box display="flex" flexDirection="row-reverse" mt={2}>
                            <Box ml={1}>
                                <Button disabled={invalid || submitting} variant="contained" color={"primary"}
                                        type={"submit"}>
                                    Lưu
                                </Button>
                            </Box>
                            <Button variant="contained" color={"secondary"} onClick={hideModal}>
                                Huỷ bỏ
                            </Button>
                        </Box>
                    </Grid>
                </Grid>
            </form>
        );
    }
}

TaskForm.propTypes = {
    classes: PropTypes.object,
    onClose: PropTypes.func,
    modalActionsCreators: PropTypes.shape({
        hideModal: PropTypes.func
    }),
    taskActionCreators: PropTypes.shape({
        addTask: PropTypes.func,
        updateTask: PropTypes.func
    }),
    handleSubmit: PropTypes.func,
    invalid: PropTypes.bool,
    submitting: PropTypes.bool,
    taskEditing: PropTypes.object
}

const mapStateToProps = state => {
    return {
        taskEditing: state.task.taskEditing,
        initialValues: {
            title: state.task.taskEditing ? state.task.taskEditing.title : null,
            description: state.task.taskEditing ? state.task.taskEditing.description : null,
            status: state.task.taskEditing ? state.task.taskEditing.status : null
        }
    }
};

const mapDispatchToProps = dispatch => ({
    modalActionsCreators: bindActionCreators(modalActions, dispatch),
    taskActionCreators: bindActionCreators(taskActions, dispatch)
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const FORM_NAME = 'TASK_MANAGEMENT';
const withReduxForm = reduxForm({
    form: FORM_NAME,
    validate
})

export default compose(
    withStyles(styles),
    withConnect,
    withReduxForm,
)(TaskForm);