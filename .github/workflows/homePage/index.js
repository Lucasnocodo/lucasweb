import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import SimpleFooter from "../layout/simpleFooter";
import NativeBar from "../layout/nativeBar";
import { Grid, Button } from "@material-ui/core";
import VerticalAlignTopIcon from "@material-ui/icons/VerticalAlignTop";
import WelcomePage from "./welcomePage";
import AboutMe from "./aboutMe";
import Experirnce from "./experience";
import MySkill from "./mySkill";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        justifyContent: "center",
    },
    top: {
        left: "87vw",
        // backgroundColor: "#006699",
        [theme.breakpoints.down("sm")]: {
            left: "80vw",
        },
        [theme.breakpoints.down("xs")]: {
            left: "75vw",
        },
    },
}));

export default function Index() {
    const classes = useStyles();
    const componentDidMount = () => {
        window.scrollTo(0, 0);
    };

    return (
        <>
            <NativeBar />
            <Grid container className={classes.root} spacing={0}>
                <WelcomePage />
               <AboutMe/>
               <Experirnce/>
               <MySkill/>
            </Grid>
            <Button onClick={componentDidMount} className={classes.top}>
                <VerticalAlignTopIcon />
            </Button>
            <SimpleFooter />
        </>
    );
}
