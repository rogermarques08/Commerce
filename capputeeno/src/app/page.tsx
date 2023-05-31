'use client'

import Filters from '@/components/Filters'
import { ProductList } from '@/components/ProductList'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <Filters />
      <ProductList />
    </main>
  )
}
