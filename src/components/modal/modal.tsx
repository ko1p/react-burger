import React, { FC, SyntheticEvent } from 'react'
import styles from './modal.module.css'
import { ICloseModalProps } from "../../types"

export const Modal: FC<ICloseModalProps> = ({ closeModal, children }) => {

    const modalCloseHandler = (e: SyntheticEvent) => {
        e.preventDefault()
        if (e.target === e.currentTarget) {
            closeModal()
        }
    }

    return (
        <div className={styles.overlay} onClick={modalCloseHandler}>
            { children }
        </div>
    )
}
