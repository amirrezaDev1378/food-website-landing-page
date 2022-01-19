import React from 'react';
import useStyles from "./home.page.style";
import Header from "../components/header/header";
import {Button, Grid, Stack} from "@mui/material";
import {Add} from "@mui/icons-material";

function Sec1Option(props) {
    return (
        <div>
            <Stack style={{width: "70%"}} direction={"row"} spacing={0}>
                <Add style={{backgroundColor: "#F8A22F", borderRadius: "100%", padding: 6, color: "white"}}/>
                <Stack paddingLeft={"10px"} textAlign={"left"} direction={"column"} spacing={0}>
                    <h3 style={{fontWeight: "normal"}}>
                        {props.title}
                    </h3>

                    <p style={{color: "#707070"}}>
                        {props.text}
                    </p>
                </Stack>
            </Stack>
            <br/>
        </div>
    )
}

function HomePage(props) {
    const classes = useStyles();
    return (
        <div>
            <Header/>
            <section className={classes.section1}>
                <Stack direction={"row"} spacing={15}>
                    <Grid className={classes.sec1image} md={5}>

                    </Grid>
                    <Grid md={5} style={{textAlign: "left"}}>
                        <h1 style={{
                            display: "flex",
                            flexDirection: "column",
                            textAlign: "left",
                            fontWeight: "lighter",
                            fontSize: "xxx-large"
                        }}>
                            OUR FOOD
                            <br/>

                            <div style={{
                                width: "185px",
                                height: "5px",
                                borderRadius: "20px",
                                backgroundColor: "#F8A22F",
                                marginRight: "35px"
                            }}/>

                        </h1>
                        <br/>
                        <Sec1Option title={'Signature Pizzas'} text={'Choose one of our plans, enter delivery time.'}/>
                        <br/>
                        <Sec1Option
                            title={'Oven-Baked Subs'}
                            text={'Choose one of our plans, enter delivery time and enjoy delicious food without leaving your home!'}
                        />
                        <br/>
                        <Sec1Option title={'Wings, Sides & More'} text={'Choose one of our plans, enter delivery time.'}/>
                        <br/>
                        <br/>
                        <Button
                            style={{
                                backgroundColor: "#F8A22F",
                                color: "white",
                                padding: '7px 40px',
                                borderRadius: 25,
                                textAlign: "left"
                            }}
                        >
                            ORDER NOW
                        </Button>
                    </Grid>
                </Stack>
            </section>
            <section className={classes.sectionPlans}>
                <Stack
                    justifyContent={"center"}
                    direction={"row"}
                    spacing={10}
                    alignItems={"center"}
                    paddingTop={"20%"}
                >

                    <Grid className={classes.secPlansPizza1} md={5}>
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "flex-end",
                                alignItems: "flex-end",
                                height: "90%",
                                marginRight: "150px",

                            }}
                        >
                            <p style={{
                                fontWeight: "500",
                                fontSize: "36px",
                                lineHeight: "52px",
                                textAlign: "left",
                                color: "#fff",
                                textShadow: "0px 3px 6px rgba(0, 0, 0, 0.16)",
                            }}
                            >
                                FLAT
                                <span style={{color: "#F8A22F", fontSize: "60pt"}}>20 %</span></p>
                            <br/><br/>
                            <p style={{
                                fontWeight: "500",
                                fontSize: "36px",
                                lineHeight: "52px",
                                textAlign: "left",
                                color: "#fff",
                                textShadow: "0px 3px 6px rgba(0, 0, 0, 0.16)",
                            }}>
                                Min. Order Value 30 $
                            </p>
                        </div>

                    </Grid>
                    <Grid className={classes.secPlansPizza2} md={5}>
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "flex-end",
                                alignItems: "flex-start",
                                height: "90%",
                                marginLeft: "60px",
                            }}
                        >

                            <p
                                style={{
                                    fontWeight: "500",
                                    fontSize: "30px",
                                    lineHeight: "52px",
                                    textAlign: "left",
                                    color: "#fff",
                                    textShadow: "0px 3px 6px rgba(0, 0, 0, 0.16)",
                                }}
                            >GET 2 MEDIUM</p>
                            <br/>
                            <span style={{color: "#F8A22F", fontSize: "xxx-large"}}>PIZZA</span>
                            <br/>
                            <p
                                style={{
                                    fontWeight: "500",
                                    fontSize: "30px",
                                    lineHeight: "52px",
                                    textAlign: "left",
                                    color: "#fff",
                                    textShadow: "0px 3px 6px rgba(0, 0, 0, 0.16)",
                                }}
                            >AT 10$ EACH </p>
                        </div>

                    </Grid>
                </Stack>
            </section>
        </div>
    );
}

export default HomePage;