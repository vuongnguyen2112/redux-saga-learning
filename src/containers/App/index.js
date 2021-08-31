import styles from "./styles";
import {withStyles} from "@material-ui/core";
import React, {Component} from 'react';
import {ThemeProvider} from '@material-ui/core/styles';
import theme from "../../commons/Theme";
import {Provider} from "react-redux";
import configureStore from "../../redux/configureStore";
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import GlobalLoading from "../../components/GlobalLoading";
import Modal from "../../components/Modal";
import {BrowserRouter, Switch} from "react-router-dom";
import AdminLayoutRoute from "../../commons/Layout/AdminLayoutRoute";
import CssBaseline from '@material-ui/core/CssBaseline';
import {ADMIN_ROUTES} from "../../constants/Routes/adminRoutes";
import {ROUTES} from "../../constants/Routes/routes";
import DefaultLayoutRoute from "../../commons/Layout/DefaultLayoutRoute";

const store = configureStore();

class App extends Component {

    renderAdminRoutes() {
        return ADMIN_ROUTES.map(route => {
            return (
                <AdminLayoutRoute
                    key={route.path}
                    path={route.path}
                    component={route.component}
                    exact={route.exact}
                    name={route.name}
                />
            );
        });
    }

    renderDefaultRoutes() {
        return ROUTES.map(route => {
            return (
                <DefaultLayoutRoute
                    key={route.path}
                    path={route.path}
                    component={route.component}
                    exact={route.exact}
                    name={route.name}
                />
            );
        });
    }

    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <ThemeProvider theme={theme}>
                        <CssBaseline/>
                        <GlobalLoading/>
                        <Modal/>
                        <ToastContainer/>
                        <Switch>
                            {this.renderAdminRoutes()}
                            {this.renderDefaultRoutes()}
                        </Switch>
                    </ThemeProvider>
                </BrowserRouter>
            </Provider>
        );
    }
}

export default withStyles(styles)(App);
