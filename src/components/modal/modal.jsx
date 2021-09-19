import React, { useEffect } from 'react';
import ReactDOM from "react-dom";
import styles from './modal.module.css';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import {ModalOverlay} from '../modal-overlay/modal-overlay'
import PropTypes from 'prop-types';

export const Modal = ({ closeModal, children, escButtonHandler }) => {
    useEffect(() => {
        document.addEventListener('keydown', escButtonHandler)
        return () => {
            document.removeEventListener('keydown', escButtonHandler)
        }
    })
    return ReactDOM.createPortal(
        <>
            <ModalOverlay closeModal={closeModal} />
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

Modal.propTypes = {
    children: PropTypes.object.isRequired,
    closeModal: PropTypes.func.isRequired,
    escButtonHandler: PropTypes.func.isRequired
};
