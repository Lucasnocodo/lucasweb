import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Select, Button, Box } from "@material-ui/core";
import MenuItem from "@material-ui/core/MenuItem";
import { useHistory } from "react-router-dom";
import ReactCountryFlag from "react-country-flag";
import { useTranslation } from "react-i18next";

const useStyles = makeStyles((theme) => ({
    root:{
        // flexGrow: 2,
        padding:"0 30px 30px 30px"
    },
    top:{
        maxHeight:60,
    },
    line: {
        background: "#ddd",
        marginTop: "20px",
        width: "100%",
        height: "1px",
    },
    logo: {
        height: theme.spacing(10),
    },
    logoLucas:{
        fontSize:'22px',
        fontWeight:400,
        fontFamily:'raleway, sans-serif',
    },
    button: {
        color: "black",
        fontSize: 13,
        // width: "10vw",
        "& :hover": {},
    },
    lucas: {
        color: "black",
        fontSize: 18,
        "& :hover": {},
    },
    pcView: {
        display: "block",
    },
}));

let country = [
    { code: "tw", value: "zh-TW" },
    { code: "jp", value: "ja-JP" },
    { code: "us", value: "en-US" },
];

export default function NativeBar() {
    const classes = useStyles();
    const dispatch = useDispatch();
    const locale = useSelector((state) => state.language.locale);

    const { t } = useTranslation();
    let history = useHistory();

    //chang locale
    const event = (e) => {
        console.log(e.target.value);
        dispatch({ type: "CHANGE_LOCALE", value: e.target.value });
    };

    return (
        <>
            <Grid container alignItems="center" className={classes.root}>
                <Grid item md={12} lg={12} sm={12} xs={12} id="top-bar">
                    <Grid container alignItems="center">
                        <Grid item lg={9} md={9} sm={9} xs={9} id="Lucas-Title" className={classes.top}>
                            <NavLink className={classes.lucas} component={Button} to="/">
                               <p className={classes.logoLucas}>Lucas</p> 
                            </NavLink>
                            <Select
                                id="locale-select"
                                value={locale}
                                onChange={event}
                            >
                                {country.map((c) => (
                                    <MenuItem value={c.value} data-testid={`locale-${c.value}`}>
                                        <ReactCountryFlag countryCode={c.code} svg></ReactCountryFlag>
                                    </MenuItem>
                                ))}
                            </Select>
                        </Grid>
                        <Grid item lg={3} md={3} sm={3} xs={3} id="contact" align="right">
                            <NavLink to="/contact" style={{ textDecoration: "none",paddingTop:15 }}>
                                <Button style={{ paddingTop:30 }}>{t("home.contact")}</Button>
                            </NavLink>
                        </Grid>
                    </Grid>
                </Grid>
                <span className={classes.line} />
                <Grid item md={12} lg={12} className={classes.pcView} id="page-buttom">
                    <Grid container alignItems="left">
                        {/* pc view */}
                        <Grid item >
                            <NavLink className={classes.button} component={Button} to="/">
                                {t("home.homePage")}
                            </NavLink>
                        </Grid>
                        <Grid item >
                            <NavLink className={classes.button} component={Button} to="/blog">
                                {t("home.blog")}
                            </NavLink>
                        </Grid>
                        <Grid item >
                            <NavLink className={classes.button} component={Button} to="/paymentplan">
                                {t("home.paymentPlan")}
                            </NavLink>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
}
