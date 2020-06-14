import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Grid, Button } from "@material-ui/core";
const useStyles = makeStyles(() => ({
    root: {},
    textBox: {
        maxWidth: "80vw",
    },
    title: {
        marginTop: 30,
        fontSize: 50,
        fontFamily:
            'HelveticaNeueW01-55Roma, HelveticaNeueW02-55Roma, HelveticaNeueW10-55Roma, "Helvetica Neue", Helvetica, Arial, Meiryo, "Hiragino Kaku Gothic Pro W3", "Hiragino Kaku Gothic Pro", sans-serif;',
        fontWeight: 300,
    },
    subTitleBox: {
        maxWidth: "80vw",
        paddingBottom: 30,
    },
    media: {
        width: "100vw",
        height: "30vw",
        objectFit: "cover",
    },
}));
export default function AboutMe() {
    const classes = useStyles();

    return (
        <>
            <Grid container className={classes.root} justify="center">
                <Grid item className={classes.textBox} align="center">
                    <Grid item md={8}>
                        <p className={classes.title}>關於我</p>
                    </Grid>

                    <Box className={classes.subTitleBox}>
                        <p className={classes.subTitle}>
                            ​As a natural born go-getter, my passion has continuously driven me to expand my knowledge,
                            experience, and relationships. With a strong background and diverse skill set, I’m confident
                            in the creative ideas and successful solutions I bring to the table. Keep exploring my site
                            to learn more information about me, and reach out directly with any questions.
                        </p>

                        <Button>Get In Touch</Button>
                    </Box>
                </Grid>
                <Grid item md={12} sm={12} xs={12}>
                    <img src="images/homePage/tmp2.png" alt="welcome" className={classes.media} />
                </Grid>
            </Grid>
        </>
    );
}
