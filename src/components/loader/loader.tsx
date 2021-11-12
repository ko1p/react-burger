import React, { FC } from "react";
import styles from './loader.module.css'

export const Loader: FC = () => (
    <div className={styles.container}>
        <h1 className={styles.title}>Идёт загрузка данных с сервера...</h1>
    </div>
)
