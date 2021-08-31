import React, {Component} from 'react';
import {Button, Card, CardContent, TextField, Typography, withStyles} from "@material-ui/core";
import styles from './styles';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";

class LoginPage extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.background}>
                <div className={classes.login}>
                    <Card>
                        <CardContent>
                            <form>
                                <div className="text-xs-center pb-xs">
                                    <Typography variant={"caption"} className={classes.caption}>
                                        Đăng nhập
                                    </Typography>
                                </div>
                                <TextField
                                    id={'email'}
                                    label={"email"}
                                    className={classes.textField}
                                    fullWidth
                                    margin={"normal"}

                                />
                                <TextField
                                    id={'password'}
                                    label={"password"}
                                    className={classes.textField}
                                    type={'password'}
                                    fullWidth
                                    margin={"normal"}
                                />
                                <Button
                                    variant={"contained"}
                                    color={"primary"}
                                    fullWidth
                                    type={"submit"}
                                >
                                    Log in
                                </Button>
                                <div className={"pt-1 text-md-center"}>
                                    <Link to={'/signup'}>
                                        <Button>
                                            Tạo tài khoản mới
                                        </Button>
                                    </Link>
                                </div>
                            </form>
                        </CardContent>
                    </Card>
                </div>
            </div>
        );
    }
}

LoginPage.propTypes = {
    classes: PropTypes.object
}

export default withStyles(styles)(LoginPage);