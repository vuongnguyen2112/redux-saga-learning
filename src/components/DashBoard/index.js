import React, {Component} from 'react';
import {withStyles} from "@material-ui/styles";
import styles from './styles';
import PropTypes from 'prop-types';
import Header from "./Header";
import SideBar from "./SideBar";

class DashBoard extends Component {
    render() {
        const {classes, children, name} = this.props;
        return (
            <div className={classes.dashboard}>
                <Header name={name}/>
                <SideBar/>
                {children}
            </div>
        );
    }
}

DashBoard.propTypes = {
    children: PropTypes.object,
    classes: PropTypes.object,
    name: PropTypes.string
}

export default withStyles(styles)(DashBoard);