import React, { useContext } from "react";
import "../componentsCSS/SearchWatches.css"
import FilterContext from "../../contextApis/FilterContext"
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';

const SearchWatches = () => {

    const [setGenderCheck, setSearchModel] = useContext(FilterContext)
    return (
        <div className="searchwatches__wrapper">
            <TextField
            className="search__textfield"
                onChange={(e) => setSearchModel(e.target.value)}
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
export default SearchWatches;