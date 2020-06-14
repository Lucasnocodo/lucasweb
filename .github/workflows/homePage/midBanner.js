import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Grid, Typography, Card } from "@material-ui/core";
import { Spring } from "react-spring/renderprops";
import VisibilitySensor from "react-visibility-sensor";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 0,
        display: "flex",
        marginBottom: -180,
        overflow: "hidden",
    },
    boxtext: {
        position: "relative",
        maxWidth: "50vw",
        top: "-20vw",
        left: "10vw",
        [theme.breakpoints.down("md")]: {
            top: "-30vw",
        },
        [theme.breakpoints.down("sm")]: {
            // position: "static",
            maxWidth: "80vw",
            top: "-45vw",
        },
        [theme.breakpoints.down("xs")]: {
            // position: "static",
            maxWidth: "80vw",
            top: "-70vw",
        },
    },
    pictext: {
        color: "white",
    },
    button: {
        position: "relative",
        top: -480,
        left: "70vw",
    },
    img: {
        width: "100vw",
        objectFit: "cover",
        height: "30vw",
        [theme.breakpoints.down("sm")]: {
            height: "50vw",
        },
        [theme.breakpoints.down("xs")]: {
            height: "70vw",
        },
    },
}));
export default function MidBanner() {
    const classes = useStyles();
    let w = window.innerWidth;
    const typRWD = w > 1400 ? "h2" : w > 600 ? "h3" : "h4";
    const typRWD2 = w > 1400 ? "h4" : w > 600 ? "h5" : "h6";
    return (
        <>
            <Grid container className={classes.root}>
                <VisibilitySensor partialVisibility>
                    {({ isVisible }) => (
                        <Spring
                            delay={300}
                            to={{
                                opacity: isVisible ? 1 : 0,
                                transform: isVisible ? "translateX(0)" : "translateX(-200px)",
                            }}
                        >
                            {(props) => (
                                <div style={props}>
                                    <Box component="div">
                                        <Card>
                                            <img
                                                src="images/components/midBanner.jpg"
                                                alt="mid banner"
                                                className={classes.img}
                                            />
                                        </Card>
                                        <Box className={classes.boxtext}>
                                            <Typography variant={typRWD} className={classes.pictext}>
                                                無論是個人還是法人都可以使用
                                            </Typography>
                                            <Typography variant={typRWD2} className={classes.pictext}>
                                                FUTURE MANAGER
                                            </Typography>
                                        </Box>
                                    </Box>
                                </div>
                            )}
                        </Spring>
                    )}
                </VisibilitySensor>
            </Grid>
        </>
    );
}
