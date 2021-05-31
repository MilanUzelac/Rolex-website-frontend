import React, { useContext } from "react";
import "../componentsCSS/OrderFilter.css";
import SearchIcon from '@material-ui/icons/Search';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import FilterOrdersContext from "../../contextApis/FilterOrdersContext";

const OrderFilter = () => {

    const [searchOrder,setSearchOrder]= useContext(FilterOrdersContext)

    return(
        <div className="order__filter_wrapper">
             <TextField
                onChange={(e) => setSearchOrder(e.target.value)}
                className="search__textfield"
                placeholder="Search orders"
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
export default OrderFilter;