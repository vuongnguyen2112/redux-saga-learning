import React, {Component} from 'react';
import {Box, Grid, TextField, withStyles} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import styles from "./styles";
import PropTypes from "prop-types";
import {bindActionCreators, compose} from "redux";
import * as modalActions from "../../actions/modal";
import {connect} from "react-redux";

class TaskForm extends Component {
    render() {
        const {classes, modalActionsCreators} = this.props;
        const {hideModal} = modalActionsCreators;
        return (
            <form>
                <Grid container>
                    <Grid item md={12}>
                        <TextField
                            id="standard-name"
                            label="Tiêu đề"
                            margin={"normal"}
                            className={classes.textField}
                        />
                    </Grid>
                    <Grid item md={12}>
                        <TextField
                            id="standard-multiline-flexible"
                            label="Mô tả"
                            multiline
                            maxRows={4}
                            className={classes.textField}
                        />
                    </Grid>
                    <Grid item md={12}>
                        <Box display="flex" flexDirection="row-reverse" mt={2}>
                            <Box ml={1}>
                                <Button variant="contained" color={"primary"}>
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
    })
}

const mapStateToProps = null;

const mapDispatchToProps = dispatch => ({
    modalActionsCreators: bindActionCreators(modalActions, dispatch),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(
    withStyles(styles),
    withConnect,
)(TaskForm);