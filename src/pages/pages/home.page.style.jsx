import {makeStyles} from "@mui/styles";
import {Pizza2} from "../../assets/main";

const useStyles = makeStyles({
    section1: {
        marginTop:150
    },
    sec1image:{
        backgroundImage:`url('${Pizza2}')`,
        borderRadius:"0 50px 50px 0",
        backgroundSize:"contain",
        backgroundRepeat:"no-repeat",
        height:"80vh"
    }
});
export default useStyles;