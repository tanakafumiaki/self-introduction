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
                    imageSrc={
                        "/introduction1.gif"
                    }
                    url={`
                    GitHub: 
                    https://github.com/tanakafumiaki/self-introduction
                    `}
                    outline={`
                    作成物名：　Self-Introduction
                    
                    概要：　自己紹介
                    「プロフィール」、「スキル」、「作成物」、「経験」を紹介しています。
                    `}
                />
            </main>
        </div>
    )
}
export default ProductsTemplate;
