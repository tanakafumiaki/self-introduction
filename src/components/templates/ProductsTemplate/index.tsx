import {CommonLink, Title} from "components/atoms";
import {ProductBox} from "components/molecules";
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
                <ProductBox
                    url={`
                    GitHub: 
                    https://github.com/tanakafumiaki
                        `}
                    outline={`
                    作成物名：　Self-Introduction
                    
                    概要：　自己紹介
                    `}/>
            </main>
        </div>
    )
}
export default ProductsTemplate;
