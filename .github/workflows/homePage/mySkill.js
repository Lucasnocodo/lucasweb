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
    img: {
        width: "33.333333vw",
        height: "30vw",
        objectFit: "cover",
    },
    cardTitle:{
        fontSize: '22px',
        fontFamily:
            'raleway, sans-serif',
        fontWeight: 400,
    },
    cardContent:{
        fontSize: '15px',
        fontFamily:
            'raleway, sans-serif',
        fontWeight: 400,
    },
    cardContentBox: {
        maxWidth: "30vw",
        padding:15,
    },
}));
export default function MySkill() {
    const classes = useStyles();
    let items = [
        {
            img: "images/homePage/tmp3.png",
            title: "JAVASCRIPT",
            content:
                "This is a concise description of your skill. Take this opportunity to expand on your ability, such as describing how it’s a benefit and providing tangible examples of when this skill was necessary for success.",
        },
        {
            img: "images/homePage/tmp3.png",
            title: "JAVASCRIPT",
            content:
                "This is a concise description of your skill. Take this opportunity to expand on your ability, such as describing how it’s a benefit and providing tangible examples of when this skill was necessary for success.",
        },
        {
            img: "images/homePage/tmp3.png",
            title: "JAVASCRIPT",
            content:
                "This is a concise description of your skill. Take this opportunity to expand on your ability, such as describing how it’s a benefit and providing tangible examples of when this skill was necessary for success.",
        },
    ];
    return (
        <>
            <Grid container className={classes.root} justify="center">
                <Grid item className={classes.textBox} align="center">
                    <Grid item>
                        <p className={classes.title}>MY SKILL</p>
                    </Grid>

                    <Box className={classes.subTitleBox}>
                        <p className={classes.subTitle}>Tricks of the Trade</p>
                    </Box>
                </Grid>
                <Grid container>
                    {items.map((item) => (
                        <CardItem item={item} />
                    ))}
                </Grid>
            </Grid>
        </>
    );
}

const CardItem = (props) => {
    const classes = useStyles();
    // const [props2, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }));

    return (
        <Grid item md={4} xs={4} className={classes.cardroot}>
            <Grid container  direction="column">
                <Grid item>
                    <img src={props.item.img} className={classes.img} alt="skill" />{" "}
                </Grid>
                <Grid item align='center'><p className={classes.cardTitle}>{props.item.title}</p> </Grid>
                <Grid item className={classes.cardContentBox} >
                    {props.item.content}
                </Grid>
            </Grid>
        </Grid>
    );
};
