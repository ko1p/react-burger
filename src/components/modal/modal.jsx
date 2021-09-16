import React from 'react';
import ReactDOM from "react-dom";
import styles from './modal.module.css';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import {ModalOverlay} from '../modal-overlay/modal-overlay'

export const Modal = ({ closeModal, children }) => {
    return ReactDOM.createPortal(
        <>
            <ModalOverlay onClick={closeModal} />
            <section className={styles.modal}>
                <div className={styles.icon} onClick={closeModal}>
                    <CloseIcon type="primary" />
                </div>
                {children}
            </section>
        </>,
        document.getElementById("modal")
    )
}
