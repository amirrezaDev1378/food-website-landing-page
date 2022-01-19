/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import useStyles from "./footer.style";
import {Stack} from "@mui/material";
import {whiteLogo} from "../../../assets/main";
import {Facebook, Google, Instagram, Twitter} from "@mui/icons-material";

function Footer(props) {
    const classes = useStyles();
    return (
        <div className={classes.Footer}>
            <br/>
            <br/>
            <br/>
            <Stack justifyContent={"space-around"} direction={"row"}>
                <img style={{
                    // paddingLeft:200,
                }}
                     height={'100%'} src={whiteLogo} alt="LOGO"/>

                <div>
                    <p style={{color: 'white' , textAlign:"left"}}>
                        <b> Contact</b>
                        <br/>
                        Lorem ipsum, #239, Trinity Plaza
                        <br/>
                        Peuerbach. Gorakhpur, Modal
                        <br/>
                        Telephone: +91 99999-88888
                        <br/>
                        E-mail: mail@Babaapp.com
                    </p>
                </div>

                <Stack style={{color: 'white' , textAlign:"left"}} className={classes.FooterLinks} direction={"column"} spacing={2}>
                    <p style={{fontSize:"xx-large"}}>Menu</p>
                    <br/>

                    <a href="#">About us</a>
                    <a href="#">Our Food</a>
                    <a href="#">Plans</a>
                    <a href="#">Contact us</a>
                </Stack>
                <div>
                    <p style={{color: 'white'}}>Follow us</p>
                    <br/>

                    <Stack direction={"row"} spacing={2}>
                        <Facebook
                            style={{
                                color: "#F8A22F",
                                backgroundColor: "white",
                                borderRadius: "100%",
                                padding: "5px",
                                cursor: "pointer"
                            }}
                        />
                        <Twitter
                            style={{
                                color: "#F8A22F",
                                backgroundColor: "white",
                                borderRadius: "100%",
                                padding: "5px",
                                cursor: "pointer"
                            }}
                        />
                        <Google
                            style={{
                                color: "#F8A22F",
                                backgroundColor: "white",
                                borderRadius: "100%",
                                padding: "5px",
                                cursor: "pointer"
                            }}
                        />
                        <Instagram
                            style={{
                                color: "#F8A22F",
                                backgroundColor: "white",
                                borderRadius: "100%",
                                padding: "5px",
                                cursor: "pointer"
                            }}
                        />
                    </Stack>
                </div>
            </Stack>

        </div>
    );
}

export default Footer;