import React, {Component} from 'react';
import {withStyles} from "@material-ui/styles";
import styles from './styles';
import {Drawer, List, ListItem} from "@material-ui/core";
import PropTypes from 'prop-types';
import {NavLink} from "react-router-dom";
import {ADMIN_ROUTES} from "../../../constants/Routes/adminRoutes";

class SideBar extends Component {

    toggleDrawer = value => {
        const {onToggleSideBar} = this.props;
        if (onToggleSideBar) {
            onToggleSideBar(value);
        }
    }

    renderList() {
        const {classes} = this.props;
        return (
            <div className={classes.list}>
                <List component={"div"}>
                    {ADMIN_ROUTES.map(item => {
                        return (
                            <NavLink to={item.path} exact={item.exact} className={classes.menuLink}
                                     activeClassName={classes.menuLinkActive} key={item.path}>
                                <ListItem className={classes.menuItem} button>
                                    {item.name}
                                </ListItem>
                            </NavLink>
                        );
                    })}
                </List>
            </div>
        );
    }

    render() {
        const {classes, showSideBar} = this.props;
        return (
            <Drawer
                open={showSideBar}
                onClose={() => this.toggleDrawer(false)}
                classes={{
                    paper: classes.drawerPaper,
                }}
                variant={"persistent"}
            >
                {this.renderList()}
            </Drawer>
        );
    }
}

SideBar.propTypes = {
    classes: PropTypes.object,
    showSideBar: PropTypes.bool,
    onToggleSideBar: PropTypes.func
}

export default withStyles(styles)(SideBar);