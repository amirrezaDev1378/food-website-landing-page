import {makeStyles} from "@mui/styles";
import {footerBG} from "../../../assets/main";

const useStyles = makeStyles({
    Footer: {
        backgroundImage:`url("${footerBG}")`,
        backgroundSize:"contain",
        backgroundRepeat:"no-repeat",
        width:"100%",
        height:"43.9vh"
    },
    FooterLinks:{
        '&> a':{
            color:"white",
            textDecoration:"none"
        }
    }
});
export default useStyles;