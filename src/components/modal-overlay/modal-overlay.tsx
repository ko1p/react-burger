import React, { FC } from 'react'
import ReactDOM from "react-dom"
import styles from './modal-overlay.module.css'
import { ICloseModalProps } from "../../types"
import { CloseModalButton } from "../close-modal-button/close-modal-button"
import { Modal } from "../modal/modal"

export const ModalOverlay: FC<ICloseModalProps> = ({ closeModal, children }) => {
    return ReactDOM.createPortal(
        <>
            <Modal closeModal={closeModal}>
                <div className={styles.modal}>
                    {children}
                    <CloseModalButton closeModal={closeModal} />
                </div>
            </Modal>
        </>,
        document.getElementById("modal") as HTMLElement
    )
}
