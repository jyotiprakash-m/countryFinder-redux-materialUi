import React, { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
    selectedCountry,
    removeSelectedCountry,
} from "../redux/actions/countriesAction";
function CountryDetails() {
    const { cId } = useParams();
    let country = useSelector((state) => state.country);
    const { name, nativeName, alpha3Code, capital, population, region, subregion, latlng, area, borders, currencies, flag } = country;
    const dispatch = useDispatch();
    const fetchCountryDetail = async (cId) => {
        const response = await axios
            .get(`https://restcountries.eu/rest/v2/alpha/${cId}`)
            .catch((err) => {
                console.log("Err: ", err);
            });
        dispatch(selectedCountry(response.data));
    };
    useEffect(() => {
        if (cId && cId !== "") fetchCountryDetail(cId);
        return () => {
            dispatch(removeSelectedCountry());
        };
    }, [cId]);
    console.log(country)
    return (
        <div>
            {name}
            {nativeName}
            {latlng && latlng.map((value) => {
                console.log(value);
                return (
                    <h1>{value}</h1>

                )
            })}
            <a href={`https://www.google.com/maps/search/?api=1&query=${name}`} target="_blank">{name}</a>

            {borders && borders.map((value) => {
                return (
                    <a href={`/country/${value}`}>{value}</a>
                )
            })}
            {currencies && currencies.map((value) => {
                return (
                    <p>{value.code}-{value.name}-{value.symbol}</p>

                )
            })}
        </div>
    )
}

export default CountryDetails

