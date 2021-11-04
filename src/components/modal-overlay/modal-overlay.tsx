import React, { FC } from 'react';
import styles from './modal-overlay.module.css';
import { IModalOverlayProps } from "../../types";

export const ModalOverlay: FC<IModalOverlayProps> = ({ closeModal }) => <div className={styles.overlay} onClick={closeModal}></div>
