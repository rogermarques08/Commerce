import Filters from '@/components/Filters'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <Filters/>
    </main>
  )
}
