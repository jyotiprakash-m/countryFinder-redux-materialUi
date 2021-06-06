import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setCountries, setInputValue } from "../redux/actions/countriesAction";
import CountryComponent from "./CountryComponent";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Grid } from '@material-ui/core'
const useStyles = makeStyles((theme) => ({
    inputWidth: {
        textAlign: 'center',
        [theme.breakpoints.down('sm')]: {
            width: '95%',
        },
        [theme.breakpoints.up('md')]: {
            width: '70%'
        },
        [theme.breakpoints.up('lg')]: {
            width: '50%'
        },
    },

}));
function CountryListing() {
    const classes = useStyles();
    const [api, setApi] = useState("https://restcountries.eu/rest/v2/all")
    const countries = useSelector((state) => state.allCountries.countries);
    const inputValue = useSelector((state) => state.inputVal.inputValue);
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchCountries = async (api) => {
            const response = await axios
                .get(api)
                .catch((err) => {
                    console.log("Err: ", err);
                });
            console.log(response)
            if (response !== undefined) {
                dispatch(setCountries(response.data));
            }
        };
        if (inputValue === null || inputValue === "") {
            setApi("https://restcountries.eu/rest/v2/all")
        } else {
            setApi(`https://restcountries.eu/rest/v2/name/${inputValue}`)
        }
        fetchCountries(api);
    }, [api, inputValue, dispatch]);

    console.log("Countries :", countries);
    return (
        <div>
            <Grid
                style={{ backgroundColor: '#f5f5f5' }}
                container
                direction="column"
                alignItems="center"
                justify="center"
            >
                <TextField
                    value={inputValue}
                    onChange={(e) => dispatch(setInputValue(e.target.value))}
                    label="Country"
                    placeholder="Enter country name"
                    className={classes.inputWidth}
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
            </Grid>
            <CountryComponent />
        </div>
    )
}

export default CountryListing
