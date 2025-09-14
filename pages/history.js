import Head from 'next/head'
import Layout from '../components/Layout'
import styles from '../styles/Home.module.css'

export default function History() {
  return (
    <Layout>
      <Head>
        <title>Tau Gamma Phi - History</title>
        <meta name="description" content="History of Tau Gamma Phi Fraternity" />
      </Head>

      <div className={styles.pageHeader}>
        <div className={styles.container}>
          <h1>Our History</h1>
          <p>The legacy of Tau Gamma Phi since 1968</p>
        </div>
      </div>

      <main className={styles.main}>
        <section className={styles.section}>
          <div className={styles.container}>
            <h2>Foundation</h2>
            <p>Tau Gamma Phi Fraternity was founded on October 4, 1968, at the University of the Philippines Diliman. It was established by a group of students who sought to create an organization that would promote brotherhood, leadership, and service.</p>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.container}>
            <h2>Early Years</h2>
            <p>In its formative years, the fraternity quickly grew in numbers and influence, establishing chapters in various universities across the Philippines. The Triskelions became known for their academic excellence, leadership, and commitment to social causes.</p>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.container}>
            <h2>Expansion</h2>
            <p>Throughout the 1970s and 1980s, Tau Gamma Phi expanded beyond university campuses, establishing alumni chapters and engaging in community development projects. The fraternity became one of the largest and most recognized Greek-letter organizations in the Philippines.</p>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.container}>
            <h2>Modern Era</h2>
            <p>Today, Tau Gamma Phi continues to thrive with chapters throughout the Philippines and overseas. The fraternity remains committed to its founding principles while adapting to the challenges of the modern world.</p>
          </div>
        </section>
      </main>
    </Layout>
  )
}