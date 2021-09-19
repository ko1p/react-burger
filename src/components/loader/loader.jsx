import React from "react";
import styles from './loader.module.css'

export const Loader = () => (
    <div className={styles.container}>
        <h1 className={styles.title}>Идёт загрузка данных с сервера...</h1>
    </div>
)
