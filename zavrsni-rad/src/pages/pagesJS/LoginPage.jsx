import React, { useContext } from "react";
import Header from "../../components/Header";
import { useState } from "react";
import "../pagesCSS/LoginPage.css";
import { TextField, Grid } from "@material-ui/core";
import AccountCircle from '@material-ui/icons/AccountCircle';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import Button from "@material-ui/core/Button";
import { withStyles } from '@material-ui/core/styles';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import { useEffect } from "react";
import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";

const StyledButton = withStyles({
    root: {
        color: 'black',
    }
})(Button);


const LoginPage = () => {

    const [backgroundLogin] = useState("http://rolexwebsite.com/api/watches/images/air-king/airkingBackground.jpg");

    const [values, setValues] = React.useState({
        showPassword: false,
    });

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [invUsernamePass, setInvUsernamePass] = useState(false);
    //const [currentUser,setCurrentUser] = useContext(CurrentUserContext)
    const [isAuthenticated,setIsAuthenticated] = useState(false);

    useEffect(() => {
        console.log("Authenticated")
    },[isAuthenticated])

    const handleChangeUserName = e => {
        setUserName(e.target.value);
    }


    const sendCredentials = () => {
        const user = { userName: userName, password: password };
        console.log(JSON.stringify(user))
        fetch("http://rolexwebsite.com/outauth", {
            method: 'POST',
            body: JSON.stringify(user)
        })
            .then(res => {
                const jwtToken = res.headers.get('Authorization');
                if (jwtToken !== null) {
                    //setCurrentUser({...currentUser,currentUserName:userName.toUpperCase(),currentUserRole:res.headers.get('role')})
                    localStorage.setItem("jwt", jwtToken)
                    localStorage.setItem("userName",userName.toUpperCase())
                    localStorage.setItem("role",res.headers.get("role"))
                    console.log("JWT -> " + jwtToken)
                    console.log(localStorage.getItem("role"))
                    console.log(localStorage.getItem("userName"))
                    setInvUsernamePass(false);
                    setIsAuthenticated(true)
                }   
                else {
                    console.log("Invalid token!");
                    setInvUsernamePass(true);
                }
            })
            .catch(err => console.error(err))
    }

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
        setPassword(event.target.value);
        //console.log("Password: -> " + user.password)
    };

    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    if (localStorage.getItem("role")==="ADMIN") {
        return (
            <Redirect to="/admin" />
        );
    }
    else if(localStorage.getItem("role")==="USER"){
        return(
            <Redirect to="/user" />
        );
    } else {
        return (
            <div className="login__page">
                <Header />
                <div className="login__image_wrapper">
                    <img src={backgroundLogin} alt="background-login-img"/>
                </div>
                <div className="login__form_wrapper">
                    <div className="login__form_content_wrap">
                        <h2>LOG IN</h2>
                        <form noValidate autoComplete="on">
                            <Grid container spacing={1} alignItems="flex-end">
                                <Grid item>
                                    <AccountCircle />
                                </Grid>
                                <Grid item>
                                    <TextField id="input-with-icon-grid" label="Username" style={{ width: "127%" }} onChange={handleChangeUserName} />
                                </Grid>
                            </Grid>
                            <Grid container spacing={1} alignItems="flex-end">
                                <Grid item>
                                    <VpnKeyIcon />
                                </Grid>
                                <Grid item>
                                    <Input
                                        id="standard-adornment-password"
                                        type={values.showPassword ? 'text' : 'password'}
                                        value={values.password}
                                        onChange={handleChange('password')}
                                        endAdornment={
                                            <InputAdornment position="end">
                                                <IconButton
                                                    aria-label="toggle password visibility"
                                                    onClick={handleClickShowPassword}
                                                    onMouseDown={handleMouseDownPassword}
                                                >
                                                    {values.showPassword ? <Visibility /> : <VisibilityOff />}
                                                </IconButton>
                                            </InputAdornment>
                                        }
                                    />
                                </Grid>
                            </Grid>
                            <Grid className="login__btns_wrap">
                                {(() => {
                                    if (invUsernamePass) {
                                        return (
                                            <div>
                                                <p>Try again, invalid username or password.&nbsp;</p>
                                                <br />
                                            </div>
                                        )
                                    } else {
                                        return (
                                            <p></p>
                                        )
                                    }
                                })()}


                                <StyledButton className="login__btn" onClick={sendCredentials}>LOG IN</StyledButton>
                                <Link to="/registration">
                                    <StyledButton className="login__register_btn">REGISTER
                                <ArrowRightAltIcon style={{ verticalAlign: "middle" }} />
                                    </StyledButton>
                                </Link>
                            </Grid>
                        </form>
                    </div>
                </div>
            </div >
        );
    }
}
export default LoginPage;