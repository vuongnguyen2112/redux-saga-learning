import React, {Component} from 'react';
import {withStyles} from "@material-ui/styles";
import styles from './styles';
import PropTypes from 'prop-types';
import Header from "./Header";
import SideBar from "./SideBar";
import {bindActionCreators, compose} from "redux";
import * as uiActions from "../../actions/ui";
import {connect} from "react-redux";
import cn from "classnames";

class DashBoard extends Component {

    onHandleToggleSideBar = value => {
        const {uiActionsCreators} = this.props;
        const {showSideBar, hideSideBar} = uiActionsCreators;
        if (value === true){
            showSideBar();
        }else {
            hideSideBar();
        }
    }

    render() {
        const {classes, children, name, showSideBar} = this.props;
        return (
            <div className={classes.dashboard}>
                <Header name={name} showSideBar={showSideBar} onToggleSideBar={this.onHandleToggleSideBar}/>
                <div className={classes.wrapper}>
                    <SideBar showSideBar={showSideBar} onToggleSideBar={this.onHandleToggleSideBar}/>
                    <div className={cn(classes.wrapperContent, {
                        [classes.shiftLeft]: showSideBar === false
                    })}>
                        {children}
                    </div>
                </div>
            </div>
        );
    }
}

DashBoard.propTypes = {
    children: PropTypes.object,
    classes: PropTypes.object,
    name: PropTypes.string,
    showSideBar: PropTypes.bool,
    uiActionsCreators: PropTypes.shape({
        showSideBar: PropTypes.func,
        hideSideBar: PropTypes.func
    })
}

const mapStateToProps = state => {
    return {
        showSideBar: state.ui.showSideBar,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        uiActionsCreators: bindActionCreators(uiActions, dispatch),
    }
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(
    withConnect,
    withStyles(styles),
)(DashBoard);