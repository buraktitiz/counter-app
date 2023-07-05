import React from 'react';
import styles from './styles.module.css';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className={styles.footerContainer}>
            <div>
                <p>LinkedIn ve GitHub Hesapları</p>
            </div>
            <div className={styles.social}>
                <div>
                    <a href="https://www.linkedin.com/in/burak-titiz/" className={styles.btnlinkedIn}>
                        <FaLinkedin />
                    </a>
                </div>
                <div>
                    <a href="https://github.com/buraktitiz/counter-app" className={styles.btnGitHub}>
                        <FaGithub />
                    </a>
                </div>
            </div>
            <div>
                <p className={styles.copyright}>Copyright &copy; 2023 Counter App - Burak TİTİZ</p>
            </div>
        </div>
    );
}

export default Footer;
