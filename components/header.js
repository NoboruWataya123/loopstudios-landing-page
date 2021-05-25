import styles from '../styles/header.module.css'

export default function Mainheader(){
    return (
        <header className={styles.header}>
            <div className={styles.logo}>loopstudios</div>
            <div className={styles.header_container}>
                <article className={styles.article}><h1>Immersive expreriences that delivers</h1></article>
            </div>
        </header>
    )
}