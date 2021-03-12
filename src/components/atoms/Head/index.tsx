import React from "react";
import Head from "next/head";

interface Props {
    tabName: string
}

const Header: React.VFC<Props> = ({ tabName }) => {
    return (
        <Head>
            <title>{tabName}</title>
            <meta name="viewport" content="width=device-width"/>
            <link rel="preconnect" href="https://fonts.gstatic.com"/>
            <link href="https://fonts.googleapis.com/css2?family=Ribeye+Marrow&display=swap" rel="stylesheet"/>
            <link rel="preconnect" href="https://fonts.gstatic.com"/>
            <link href="https://fonts.googleapis.com/css2?family=Passion+One&display=swap" rel="stylesheet"/>
        </Head>
    )
}
export default Header;
