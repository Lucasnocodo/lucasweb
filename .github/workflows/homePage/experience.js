import React from "react";
import { Grid, Button, Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import ListAltIcon from "@material-ui/icons/ListAlt";
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        marginTop: 15,
        marginBottom: 15,
        maxWidth: 1080,
    },
    Avatar: {
        display: "flex",
        width: "20vw",
        minWidth: "177px",
        minHeight: "177px",
        height: "20vw",
        marginTop: 30,
        "& > *": {
            margin: theme.spacing(1),
        },
    },
    cardroot: {
        maxWidth: "1080px",
        marginTop: "20px",
    },
    icon: {
        width: "40px",
        height: "40px",
    },
    cardTitle: {
        fontWeight: 400,
        fontFamily: "raleway, sans-serif",
        fontSize: "21px",
        lineHeight:0,
    },
    cardTime: {
        fontWeight: 400,
        fontFamily: "avenir-lt-w01_35-light1475496, sans-serif",
        fontSize: "18px",
    },
}));

const $ = window.$;

export default function Experirnce() {
    const classes = useStyles();
    let items = [
        {
            img: <ListAltIcon className={classes.icon} />,
            title: "TEAM LEADER",
            company: "ODEA",
            time: "January 2023 - June 2024",
            content:
                "This is a concise description of your professional experience. Summarize your role, responsibilities and relevant accomplishments or milestones. Don’t forget to adjust the timeframe in the subtitle.",
        },
        {
            img: <ListAltIcon className={classes.icon} />,
            title: "TEAM LEADER",
            company: "ODEA",
            time: "January 2023 - June 2024",
            content:
                "This is a concise description of your professional experience. Summarize your role, responsibilities and relevant accomplishments or milestones. Don’t forget to adjust the timeframe in the subtitle.",
        },
        {
            img: <ListAltIcon className={classes.icon} />,
            title: "TEAM LEADER",
            company: "ODEA",
            time: "January 2023 - June 2024",
            content:
                "This is a concise description of your professional experience. Summarize your role, responsibilities and relevant accomplishments or milestones. Don’t forget to adjust the timeframe in the subtitle.",
        },
    ];
    return (
        <>
            <Grid container className={classes.root} justify="center">
                <Grid item lg={12} md={12} sm={12} xs={12} align="center">
                    <Avatar alt="Lucas Chen" src="images/avatar/lucas613.jpg" className={classes.Avatar} />
                </Grid>
                <Grid item lg={12} md={12} sm={12} xs={12} align="center">
                    <Typography variant="h3" style={{fontFamily:'raleway, sans-serif'}}>我的經驗</Typography>
                    <Typography variant="h6">Roles & Responsibilities</Typography>
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
        <Grid item md={12} xs={12} className={classes.cardroot}>
            <Grid container spacing={2} alignItems="center">
                <Grid item md={2} xs={2} align="right">
                    {props.item.img}
                </Grid>
                <Grid item md={3} xs={3}>
                    <Grid container direction='column' >
                        <Grid item>
                            <p className={classes.cardTitle}>{props.item.title}</p>
                        </Grid>
                        <Grid item>
                            <p className={classes.cardTitle}>{props.item.company}</p>
                        </Grid>
                        <Grid item>
                            <p className={classes.cardTime}>{props.item.time}</p>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item md={7} xs={7} align="left">
                    {props.item.content}
                </Grid>
            </Grid>
        </Grid>
    );
};
