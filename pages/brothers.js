import Head from 'next/head'
import Layout from '../components/Layout'
import BrotherCard from '../components/BrotherCard'
import styles from '../styles/Home.module.css'

// Sample data - in a real application, this would come from an API or database
const brothers = [
  {
    id: 1,
    name: "John Dela Cruz",
    position: "Grand Triskelion",
    chapter: "Alpha Chapter",
    image: "/images/brothers/john.jpg",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    id: 2,
    name: "Michael Santos",
    position: "Vice Grand Triskelion",
    chapter: "Beta Chapter",
    image: "/images/brothers/michael.jpg",
    bio: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  {
    id: 3,
    name: "Robert Lim",
    position: "Secretary",
    chapter: "Gamma Chapter",
    image: "/images/brothers/robert.jpg",
    bio: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
  },
  {
    id: 4,
    name: "David Tan",
    position: "Treasurer",
    chapter: "Delta Chapter",
    image: "/images/brothers/david.jpg",
    bio: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  }
]

export default function Brothers() {
  return (
    <Layout>
      <Head>
        <title>Tau Gamma Phi - Brothers</title>
        <meta name="description" content="Meet the brothers of Tau Gamma Phi Fraternity" />
      </Head>

      <div className={styles.pageHeader}>
        <div className={styles.container}>
          <h1>Our Brothers</h1>
          <p>Meet the dedicated members of Tau Gamma Phi</p>
        </div>
      </div>

      <main className={styles.main}>
        <section className={styles.section}>
          <div className={styles.container}>
            <h2>Leadership</h2>
            <div className={styles.brothersGrid}>
              {brothers.map(brother => (
                <BrotherCard key={brother.id} brother={brother} />
              ))}
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.container}>
            <h2>Join Our Brotherhood</h2>
            <p>Becoming a Triskelion means joining a network of professionals, leaders, and lifelong friends. Our membership process is designed to identify individuals who embody our values and are committed to making a positive impact.</p>
            <a href="/contact" className={styles.primaryButton}>Express Interest</a>
          </div>
        </section>
      </main>
    </Layout>
  )
}