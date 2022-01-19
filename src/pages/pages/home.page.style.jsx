import {makeStyles} from "@mui/styles";
import {Pizza2, secPlansPizza1, secPlansPizza2, sectionPlansBG} from "../../assets/main";

const useStyles = makeStyles({
    section1: {
        marginTop: 150
    },
    sec1image: {
        backgroundImage: `url('${Pizza2}')`,
        borderRadius: "0 50px 50px 0",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        height: "80vh"
    },
    sectionPlans: {
        backgroundImage: `url('${sectionPlansBG}')`,
        backgroundRepeat: "no-repeat",
        height: "100vh",
        backgroundSize: "contain"
    },
    secPlansPizza1: {
        color:"white",
        backgroundImage: `url("${secPlansPizza1}")`,
        height:"60vh",
        backgroundRepeat:"no-repeat",
        backgroundSize:"contain",
    },
    secPlansPizza2: {
        color:"white",
        backgroundImage: `url("${secPlansPizza2}")`,
        height:"60vh",
        backgroundRepeat:"no-repeat",
        backgroundSize:"contain",
    }
});
export default useStyles;