import FilterByType from '@/components/FilterByType'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <FilterByType/>
    </main>
  )
}
