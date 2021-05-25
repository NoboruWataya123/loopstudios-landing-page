import styles from '../styles/textSection.module.css';

export default function TextSection(){
    return(
        <div className={styles.section_container}>
            <div className={styles.section_image}></div>
            <div className={styles.section_text}>
                <h2>The leader in interactive VR</h2>
                <p className={styles.paragraph}>Founded in 2011, loopstudios has been producing world-class virtual reaity projects for some of the best companies around the globe. Our award-winning creations have transformed businesses through digital exprertises that bind to their bland.</p>
            </div>
        </div>
    )
}