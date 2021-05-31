import React, { useContext } from "react";
import "../componentsCSS/UserFilter.css";
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';
import FilterUsersContext from "../../contextApis/FilterUsersContext";

const UsersFilter = () => {

    const [setSearchedUser] = useContext(FilterUsersContext)


    return (
        <div className="users__filter_wrapper">
            <TextField
                onChange={(e) => setSearchedUser(e.target.value)}
                className="search__textfield"
                placeholder="Search users"
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <SearchIcon />
                        </InputAdornment>
                    ),
                }}
            />
        </div>
    );
}
export default UsersFilter;