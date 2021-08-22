import React, {Component} from 'react';
import {Clear} from "@material-ui/icons";
import styles from './styles';
import {withStyles} from "@material-ui/styles";
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {bindActionCreators, compose} from "redux";
import * as modalActions from '../../actions/modal';
import {Modal} from "@material-ui/core";

class CommonModal extends Component {
    render() {
        const {classes, open, component, modalActionsCreators, title} = this.props;
        const {hideModal} = modalActionsCreators;
        return (
            <Modal open={open} onClose={hideModal}>
                <div className={classes.modal}>
                    <div className={classes.header}>
                        <span className={classes.title}>
                            {title}
                        </span>
                        <Clear className={classes.icon} onClick={hideModal}/>
                    </div>
                    <div className={classes.content}>
                        {component}
                    </div>
                </div>
            </Modal>
        );
    }
}

CommonModal.propTypes = {
    classes: PropTypes.object,
    open: PropTypes.bool,
    component: PropTypes.object,
    title: PropTypes.string,
    modalActionsCreators: PropTypes.shape({
        hideModal: PropTypes.func
    })
}

const mapStateToProps = state => ({
    open: state.modal.showModal,
    component: state.modal.component,
    title: state.modal.title
});

const mapDispatchToProps = dispatch => ({
    modalActionsCreators: bindActionCreators(modalActions, dispatch),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(
    withStyles(styles),
    withConnect,
)(CommonModal);