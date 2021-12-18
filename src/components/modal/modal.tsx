import React, { useEffect, FC } from 'react'
import ReactDOM from "react-dom"
import styles from './modal.module.css'
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { ModalOverlay } from '../modal-overlay/modal-overlay'
import { IModalProps } from "../../types"

export const Modal: FC<IModalProps> = ({ closeModal, children }) => {
    useEffect(() => {
        document.addEventListener('keydown', closeModal)
        return () => {
            document.removeEventListener('keydown', closeModal)
        }
    })
    return ReactDOM.createPortal(
        <>
            <ModalOverlay closeModal={closeModal} />
            <section className={styles.modal}>
                <div className={styles.icon} onClick={closeModal} id='close-button'>
                    <CloseIcon type="primary"/>
                </div>
                {children}
            </section>
        </>,
        document.getElementById("modal") as HTMLElement
    )
}

// TODO: переделать вёрстку модалок
