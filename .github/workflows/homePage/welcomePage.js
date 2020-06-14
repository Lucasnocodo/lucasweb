import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
    },
    title: {
        // marginTop: 50,
        fontSize: 40,
        fontFamily: "raleway, sans-serif",
        fontWeight: 400,
        lineHeight: '54px',
    },
    subTitleBox: {
        maxWidth: "80vw",
    },
    subTitle: {
        marginTop: 10,
        fontSize: 15,
        fontFamily:
            'HelveticaNeueW01-55Roma, HelveticaNeueW02-55Roma, HelveticaNeueW10-55Roma, "Helvetica Neue", Helvetica, Arial, Meiryo, "Hiragino Kaku Gothic Pro W3", "Hiragino Kaku Gothic Pro", sans-serif;',
        fontWeight: 300,
    },
    media: {
        width: "100vw",
        height: "30vw",
        objectFit: "cover",
    },
}));

export default function WelcomePage() {
    const classes = useStyles();
    return (
        <>
            <Grid container justify="center" className={classes.root}>
                <Grid item md={12} xs={12} align="center">
                    <p className={classes.title}>HELLO! I'M LUCAS</p>
                </Grid>
                <Grid item md={12} xs={12} className={classes.subTitleBox} align="center">
                    <p className={classes.subTitle}>Welcome to my site</p>
                    <p className={classes.subTitle}>
                        ​Welcome and thanks for visiting my site! I invite you to take a moment and look around. To
                        learn more about my background, experience, skills and how we could potentially work together,
                        simply contact me.
                    </p>
                </Grid>
                <Grid item md={12} sm={12} xs={12}>
                    <img src="images/homePage/welcome.png" alt="welcome" className={classes.media} />
                </Grid>
            </Grid>
        </>
    );
}
