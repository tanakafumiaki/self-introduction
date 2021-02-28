import styles from "./styles.module.sass";
import {CommonLink, Title, TextBox} from "components/atoms";
import React from "react";

const ProductsTemplate: React.VFC　= () => {
    return (
        <div>
            <Title
                title="Products"/>

            <CommonLink
                text="HOME"
                href="/selection"/>

            <main>
                <TextBox text={
                    `
                    作成物名：Portfolio
                    概要：自己紹介
                    `
                }/>
            </main>
        </div>
    )
}
export default ProductsTemplate;
