import {makeStyles} from "@mui/styles";
import {Fpizza} from "../../../assets/main";

const useStyles = makeStyles({
    contactUsLink: {
        backgroundColor: "#F8A22F",
        borderRadius: 30,
        padding: "10px"
    },
    HeaderLinksParent: {
        paddingRight: 100,
        "&> a": {
            textDecoration: "none",
            color: "white",
            marginTop: "40px"
        },
        backgroundImage: `url('${Fpizza}')`,
        height: '80vh',
        backgroundPositionY: "90%",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        width: "100%"
    }
});
export default useStyles;