import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import DashBoard from "../../../components/DashBoard";
import PropTypes from 'prop-types';

class AdminLayoutRoute extends Component {
    render() {
        const {component: YourComponent, ...remainProps} = this.props;
        return (
            <Route
                {...remainProps}
                render={routeProps => {
                    return (
                        <DashBoard {...remainProps}>
                            <YourComponent {...routeProps}/>
                        </DashBoard>
                    )
                }}
            />
        );
    }
}


AdminLayoutRoute.propTypes = {
    path: PropTypes.string,
    name: PropTypes.string,
    exact: PropTypes.bool,
    component: PropTypes.oneOfType([PropTypes.object, PropTypes.func])
}

export default AdminLayoutRoute;