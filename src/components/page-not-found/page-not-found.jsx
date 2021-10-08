import styles from './page-not-found.module.css'

export const PageNotFound = () => (
    <div className={styles.container}>
        <p className="text text_type_digits-large text_color_inactive">404</p>
        <p className="text text_type_main-large text_color_inactive">Такой страницы нет</p>
    </div>
)
