import { Footer } from '../../Components/Footer/Footer'
import { Navbar } from '../../Components/Navbar/Navbar'
import styles from './AboutUs.module.css'
import { Detail } from './Components/Detail/Detail'
import { Landing } from './Components/Landing/Landing'
type Props = {}

export const AboutUs = (_props: Props) => {
  return (
    <div className={styles.Wrapper}>
        <Navbar />
        <div className={styles.InnerSegment}>
            <Landing />
            <Detail />
        </div>
        <Footer />
    </div>
  )
}