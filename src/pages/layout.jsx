import React from 'react';
import useStyles from "./layout.style";
import HomePage from "./pages/home.page";


function Layout(props) {
    const styles = useStyles();

    return (
        <div className={styles.LayoutBody}>
            <HomePage />

        </div>
    );
}

export default Layout;