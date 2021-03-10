import React from "react";
import Head from "next/head";

interface Props {
    tabName: string
}

const Header: React.VFC<Props> = ({ tabName }) => {
    return (
        <Head>
            <title>{tabName}</title>
        </Head>
    )
}
export default Header;
