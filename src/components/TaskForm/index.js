import React, {Component} from 'react';
import {DialogActions, DialogContent, DialogTitle, TextField, withStyles} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import styles from "./styles";

class TaskForm extends Component {
    render() {
        const {open, classes, onClose} = this.props;
        return (
            <Dialog open={open} onClose={onClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Thêm mới công việc</DialogTitle>
                <DialogContent>
                    <TextField
                        id="standard-name"
                        label="Name"
                        margin={"normal"}
                        className={classes.textField}
                    />
                    <TextField
                        id="standard-multiline-flexible"
                        label="Multiline"
                        multiline
                        maxRows={4}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={onClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={onClose} color="primary">
                        OK
                    </Button>
                </DialogActions>
            </Dialog>
        );
    }
}

export default withStyles(styles)(TaskForm);