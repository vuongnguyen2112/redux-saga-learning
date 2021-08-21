import Button from '@material-ui/core/Button';
import styles from "./styles";
import {withStyles} from "@material-ui/core";
import React, {Component} from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import TaskBoard from "../TaskBoard";
import theme from "../../commons/Theme";
import {Provider} from "react-redux";
import configureStore from "../../redux/configureStore";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import GlobalLoading from "../../components/GlobalLoading";

const store = configureStore();

class App extends Component {
    render() {
        const {classes} = this.props;
        return (
            <Provider store={store}>
                <ThemeProvider theme={theme}>
                    <TaskBoard/>
                </ThemeProvider>
                <GlobalLoading/>
                <ToastContainer />
            </Provider>

        );
    }
}

export default withStyles(styles)(App);
