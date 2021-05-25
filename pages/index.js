import styles from '../styles/Home.module.css'
import Mainheader from '../components/header.js'
import TextSection from '../components/TextSection.js'
import FlexSection from '../components/FlexSection.js'
import Footer from '../components/Footer.js'

export default function Home() {
  return (
    <div className={styles.container}>
      <Mainheader />
      <TextSection />
      <FlexSection />
      <Footer />
    </div>
  )
}
