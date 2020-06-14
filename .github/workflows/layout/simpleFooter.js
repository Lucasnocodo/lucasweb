import React from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Facebook from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLine } from "@fortawesome/free-brands-svg-icons";
library.add(faLine);

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: 30,
    },
    boxtext: {
        maxWidth: "80vw",
    },
    lowbox: {
        backgroundColor: "#242424",
        minHeight: 150,
        [theme.breakpoints.down("xs")]: {
            display: "none",
        },
    },
    Facebook: {
        color: "black",
        fontSize: "2.3rem",
        "&:hover": {
            color: "#4267B2",
            zindex: 2,
        },
    },
    Linkedin: {
        color: "black",
        fontSize: "2.3rem",
        fontFamily: "Billabong",
        "&:hover": {
            color: "#0077b5",
        },
    },
    Line: {
        color: "black",

        fontSize: "2.2rem",
        fontFamily: "Billabong",
        "&:hover": {
            color: "#00c300",
        },
    },
    box: {
        // margin: 5,
    },
    logo: {
        color: "black",
        fontSize: "1.8rem",
    },
    content: {
        fontSize: 13,
    },
}));

export default function SimpleFooter() {
    const classes = useStyles();

    return (
        <Grid container className={classes.root} justify="center" spacing={1}>
            <Grid item className={classes.box} lg={4} md={4} sm={4} xs={12} align="center">
                <p className={classes.logo}>Lucas</p>
            </Grid>
            <Grid item className={classes.box} lg={4} md={4} sm={4} xs={12}>
                <p className={classes.content}>聯絡人</p>
                <p>h51301.c@gmail.com</p>
            </Grid>
            <Grid item className={classes.box} lg={4} md={4} sm={4} xs={12}>
                <p className={classes.content}>追蹤</p>
                <a href="https://www.facebook.com/yuta28233" style={{ textDecoration: "none" }}>
                    <Facebook className={classes.Facebook} />
                </a>
                <a href="https://www.linkedin.com/in/lucas-chen-608266194/" style={{ textDecoration: "none" }}>
                    <LinkedInIcon className={classes.Linkedin} />
                </a>
                <a href="https://lin.ee/yko6CoX" style={{ textDecoration: "none" }}>
                    <FontAwesomeIcon icon={["fab", "line"]} className={classes.Line} />
                </a>
            </Grid>
        </Grid>
    );
}
