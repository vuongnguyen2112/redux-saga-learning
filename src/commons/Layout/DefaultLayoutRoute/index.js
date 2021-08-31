import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import PropTypes from 'prop-types';

class DefaultLayoutRoute extends Component {
    render() {
        const {component: YourComponent, ...remainProps} = this.props;
        return (
            <Route
                {...remainProps}
                render={routeProps => {
                    return (
                        <YourComponent {...routeProps}/>
                    )
                }}
            />
        );
    }
}


DefaultLayoutRoute.propTypes = {
    path: PropTypes.string,
    name: PropTypes.string,
    exact: PropTypes.bool,
    component: PropTypes.oneOfType([PropTypes.object, PropTypes.func])
}

export default DefaultLayoutRoute;