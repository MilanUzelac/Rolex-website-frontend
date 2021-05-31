import React, { useEffect } from "react";
import Header from "../../components/Header";
import { useState } from "react";
import "../pagesCSS/RegistrationPage.css";
import { TextField } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { withStyles } from '@material-ui/core/styles';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import { DatePicker } from "@material-ui/pickers";
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import {
    MuiPickersUtilsProvider
} from '@material-ui/pickers';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import { Redirect } from "react-router-dom";

const StyledButton = withStyles({
    root: {
        color: 'black',
    }
})(Button);


const RegistrationPage = () => {

    const [backgroundRegistration] = useState("http://rolexwebsite.com/api/watches/images/air-king/airkingBackground.jpg");
    const [values, setValues] = React.useState({
        showPassword: false,
    });

    /* const handleChange = (prop) => (event) => {
         setValues({ ...values, [prop]: event.target.value });
     };*/
    
    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const [selectedDate, setSelectedDate] = React.useState(new Date('2002'));
    const [isRegistrated, setIsRegistrated] = useState("NotRegistered");

    const handleDateChange = (date) => {
        setSelectedDate(date);
        console.log("Date -> " + date.getFullYear())
        setUser({ ...user, yearOfBirth: date.getFullYear() })

    };


    const [user, setUser] = useState({ firstName: "", lastName: "", userName: "", password: null, yearOfBirth: "", email: "", address: "", phoneNumber: "" })

    const Register = () => {

        fetch("http://rolexwebsite.com/userregistration", {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => {
                console.log("Response registrated -> " + res.status.toString());
                if (res.status == 200) {
                    setIsRegistrated("registered")
                } else {
                    setIsRegistrated("notregistered");
                }
                console.log("ISREGISTRATED boolean -> " + isRegistrated)
            })
            .catch(err => console.error(err))
    }

    return (
        <div className="registration__page">
            <Header />
            <div className="registration__image_wrapper">
                <img src={backgroundRegistration} alt="registration-background-img"/>
            </div>
            <div className="registration__form_wrapper">
                <div className="registration__form_content_wrap">
                    <h2 style={{ color: "#173b20" }}>REGISTRATION</h2>
                    <form noValidate autoComplete="off">
                        <TextField id="standard-basic" label="First name" onChange={(e) => setUser({ ...user, firstName: e.target.value })} />
                        <TextField id="standard-basic" label="Last name" onChange={(e) => setUser({ ...user, lastName: e.target.value })} />
                        <TextField id="standard-basic" label="Username" onChange={(e) => setUser({ ...user, userName: e.target.value })} />

                        <FormControl>
                            <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                            <Input
                                id="standard-adornment-password"
                                type={values.showPassword ? 'text' : 'password'}
                                value={values.password}
                                onChange={(e) => setUser({ ...user, password: e.target.value })}
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
                        </FormControl>

                        <MuiPickersUtilsProvider utils={DateFnsUtils} >
                            <DatePicker
                                views={["year"]}
                                label="Year of birth"
                                value={selectedDate}
                                onChange={handleDateChange}
                                maxDate={new Date("2003-12-31")}
                            />
                        </MuiPickersUtilsProvider>
                        <TextField id="standard-basic" label="Email" onChange={(e) => setUser({ ...user, email: e.target.value })} />
                        <TextField id="standard-basic" label="Address" style={{ opacity: "1" }} onChange={(e) => setUser({ ...user, address: e.target.value })} />
                        <TextField id="standard-basic" label="Phone number" onChange={(e) => setUser({ ...user, phoneNumber: e.target.value })} />

                        <StyledButton className="login__register_btn" style={{ marginTop: "20px", backgroundColor: "black", border: "3px solid #173b20", color: "white" }} onClick={Register}>REGISTER
                                <ArrowRightAltIcon style={{ verticalAlign: "middle" }} />
                        </StyledButton>

                        {(() => {
                            if (isRegistrated === "NotRegistered") {
                                return (
                                    <p></p>
                                )
                            } else if (isRegistrated === "registered") {
                                return (
                                    <Redirect to="/registered" />
                                )
                            } else {
                                return (
                                    <div>
                                        <p>Username has been already in use. Try again.&nbsp;</p>
                                        <br />
                                    </div>
                                )
                            }
                        })()}

                    </form>
                </div>
            </div>
        </div>
    );
}
export default RegistrationPage;