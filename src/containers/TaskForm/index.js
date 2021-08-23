import React, {Component} from 'react';
import {Box, Grid, TextField, withStyles} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import styles from "./styles";
import PropTypes from "prop-types";
import {bindActionCreators, compose} from "redux";
import * as modalActions from "../../actions/modal";
import {connect} from "react-redux";
import {reduxForm, Field} from "redux-form";
import renderTextField from "../../components/FormHelper/TextField";
import validate from './validate';

class TaskForm extends Component {

    handleSubmitForm = data => {
        console.log('data: ', data);
    }

    required = value => {
        let error = 'Vui lòng nhập tiêu đề';
        if (value !== null && typeof value !== 'undefined' && value.trim() !== '') {
            error = null;
        }
        return error;
    }

    minLength5 = value => {
        let error = null;
        if (value.length < 5) {
            error = 'Tiêu đề phải ít nhất 5 ký tự';
        }
        return error;
    }

    render() {
        const {classes, modalActionsCreators, handleSubmit, invalid, submitting } = this.props;
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
                    <Grid item md={12}>
                        <Box display="flex" flexDirection="row-reverse" mt={2}>
                            <Box ml={1}>
                                <Button disabled={invalid || submitting} variant="contained" color={"primary"} type={"submit"}>
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
    handleSubmit: PropTypes.func,
    invalid: PropTypes.bool,
    submitting: PropTypes.bool
}

const mapStateToProps = null;

const mapDispatchToProps = dispatch => ({
    modalActionsCreators: bindActionCreators(modalActions, dispatch),
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