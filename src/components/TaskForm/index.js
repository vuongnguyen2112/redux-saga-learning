import React, {Component} from 'react';
import {Box, DialogActions, DialogContent, DialogTitle, Grid, Modal, TextField, withStyles} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import styles from "./styles";
import PropTypes from "prop-types";
import {Clear} from "@material-ui/icons";

class TaskForm extends Component {
    render() {
        const {open, classes, onClose} = this.props;
        return (
            <Modal open={open} onClose={onClose}>
                <div className={classes.modal}>
                    <div className={classes.header}>
                        <span className={classes.title}>
                            Thêm mới
                        </span>
                        <Clear className={classes.icon} onClick={onClose}/>
                    </div>
                    <div className={classes.content}>
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
                                        <Button variant="contained" color={"secondary"} onClick={onClose}>
                                            Huỷ bỏ
                                        </Button>
                                    </Box>
                                </Grid>
                            </Grid>
                        </form>
                    </div>
                </div>
            </Modal>
        );
    }
}

TaskForm.propTypes = {
    open: PropTypes.bool,
    classes: PropTypes.object,
    onClose: PropTypes.func
}

export default withStyles(styles)(TaskForm);