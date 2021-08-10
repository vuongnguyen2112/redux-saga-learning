import Button from '@material-ui/core/Button';
import styles from "./styles";
import {withStyles} from "@material-ui/core";
import React, {Component} from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import TaskBoard from "../TaskBoard";
import theme from "../../commons/Theme";

class App extends Component {
    render() {
        const {classes} = this.props;
        return (
            <ThemeProvider theme={theme}>
                <TaskBoard/>
            </ThemeProvider>
        );
    }
}

export default withStyles(styles)(App);
