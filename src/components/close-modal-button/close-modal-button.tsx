import React, { FC } from 'react'
import styles from "../modal-overlay/modal-overlay.module.css"
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components"
import { ICloseModalProps } from "../../types"

export const CloseModalButton: FC<ICloseModalProps> = ({ closeModal }) => {
    return (
        <div className={styles.icon} onClick={closeModal} id='close-button'>
            <CloseIcon type="primary"/>
        </div>
    )
}
