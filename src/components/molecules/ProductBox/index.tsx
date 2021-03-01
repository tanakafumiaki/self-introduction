import {ProductImage, TextBox} from "components/atoms";
import styles from './style.module.sass';
import React from "react";

interface Props {
    imageSrc: string
    url: string
    outline: string
}

const ProductBox: React.VFC<Props> = ({imageSrc,url,outline}) => {
    return (
        <main className={styles.main}>
            <div className={styles.image}>
                <ProductImage imageSrc={imageSrc}/>
            </div>

            <div className={styles.url}>
                {url}
            </div>

            <div className={styles.outLine}>
                {outline}
            </div>
        </main>
    )
}
export default ProductBox;
