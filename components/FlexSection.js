import styles from '../styles/flexSection.module.css'


export default function FlexSection(){
    return(
        <div className={styles.main_container}>
            <h2 className={styles.head}>Our creations</h2>
            <div className={styles.flex_container}>
                <div className={styles.flexitem}><div className={styles.images}><span id={styles.text}>The curiosity</span></div></div>
                <div className={styles.flexitem}><div className={styles.images1}><span id={styles.text}>Deep earth</span></div></div>
                <div className={styles.flexitem}><div className={styles.images2}><span id={styles.text}>Make it fisheye</span></div></div>
                <div className={styles.flexitem}><div className={styles.images3}><span id={styles.text}>From up above vr</span></div></div>
                <div className={styles.flexitem}><div className={styles.images4}><span id={styles.text}>The grid</span></div></div>
                <div className={styles.flexitem}><div className={styles.images5}><span id={styles.text}>Night arcade</span></div></div>
                <div className={styles.flexitem}><div className={styles.images6}><span id={styles.text}>Pocket borealis</span></div></div>
                <div className={styles.flexitem}><div className={styles.images7}><span id={styles.text}>Soccer team vr</span></div></div>
            </div>
            <button className={styles.btn}>See all</button>
        </div>
        
    )
}
