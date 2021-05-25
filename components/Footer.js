import styles from '../styles/footer.module.css'

export default function Footer(){
    return(
        <div className={styles.footer_container}>
            <footer className={styles.footer}>
                <div>
                    <div className={styles.footer_header}>loopstudios</div>
                    <div className={styles.footer_text}>About</div>
                    <div className={styles.footer_text}>Career</div>
                    <div className={styles.footer_text}>Events</div>
                    <div className={styles.footer_text}>Product</div>
                    <div className={styles.footer_text}>Support</div>
                </div>
                <div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div className={styles.footer_end}>@ 2021 Loopstudios. all rights reserved</div>
            </footer>
        </div>
    )
}