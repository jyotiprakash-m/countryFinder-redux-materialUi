import React from 'react'
import { useSelector } from "react-redux";

import { makeStyles } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { Typography } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";

const useStyles = makeStyles((theme) => ({
    imagecard: {
        maxWidth: 300,
        overflowX: "hidden",
    },
    imageHeight: {
        height: 180
    }

}));
function CountryComponent() {
    const classes = useStyles();

    const countries = useSelector((state) => state.allCountries.countries);

    const renderList = countries.map((country) => {
        const { flag, alpha3Code, name } = country;
        return (
            <Grid item key={alpha3Code}>
                <Paper>
                    <Card className={classes.imagecard}>
                        <CardActionArea href="#" target="_blank">
                            <CardMedia
                                className={classes.imageHeight}
                                component="img"
                                alt="Contemplative Reptile"
                                image={flag}
                                title="Contemplative Reptile"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h6" component="h2">
                                    {name}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Paper>
            </Grid>
        );
    });
    return (
        <Grid container lg spacing={2}>
            <Grid item xs={12}>
                <Grid container justify="center" spacing={2}>
                    {renderList}
                </Grid>
            </Grid>
        </Grid>
    )
}

export default CountryComponent
