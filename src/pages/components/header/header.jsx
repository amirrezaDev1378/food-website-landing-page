/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import useStyles from "./header.style";
import {Grid, Stack} from "@mui/material";
import {blackLogo, mouseScroll} from "../../../assets/main";

function Header(props) {
    const classes = useStyles();
    return (
        <div>
            <Stack direction={"row"}>
                <Grid md={5}>
                    <img data-aos="fade-right" src={blackLogo} alt="LOGO"/>
                </Grid>
                <Grid justifyContent={"flex-end"} display={'flex'} md={7}>
                    <Stack
                        className={classes.HeaderLinksParent}
                        alignItems={"baseline"}
                        direction={"row"}
                        spacing={5}
                        justifyContent={"flex-end"}
                    >
                        <a href="#">ABOUT</a>
                        <a href="#">OUR FOOD</a>
                        <a href="#">PLANS</a>
                        <a className={classes.contactUsLink} href="#">CONTACT US</a>
                    </Stack>
                </Grid>
            </Stack>
            <img data-aos="fade-up" src={mouseScroll} alt="mouse"/>
        </div>
    );
}

export default Header;