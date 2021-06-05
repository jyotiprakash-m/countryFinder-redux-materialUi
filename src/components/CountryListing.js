import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setCountries } from "../redux/actions/countriesAction";
import CountryComponent from "./CountryComponent";

function CountryListing() {
    const countries = useSelector((state) => state.allCountries.countries);
    const dispatch = useDispatch();
    const fetchCountries = async () => {
        const response = await axios
            .get("https://restcountries.eu/rest/v2/all")
            .catch((err) => {
                console.log("Err: ", err);
            });
        dispatch(setCountries(response.data));
    };
    useEffect(() => {
        fetchCountries();
    }, []);

    console.log("Countries :", countries);
    return (
        <div>

        </div>
    )
}

export default CountryListing
