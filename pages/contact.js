import Head from 'next/head'
import Layout from '../components/Layout'
import styles from '../styles/Home.module.css'
import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    // In a real application, you would send this data to your API
    console.log('Form submitted:', formData)
    setSubmitted(true)
  }

  return (
    <Layout>
      <Head>
        <title>Tau Gamma Phi - Contact</title>
        <meta name="description" content="Contact Tau Gamma Phi Fraternity" />
      </Head>

      <div className={styles.pageHeader}>
        <div className={styles.container}>
          <h1>Contact Us</h1>
          <p>Get in touch with Tau Gamma Phi</p>
        </div>
      </div>

      <main className={styles.main}>
        <section className={styles.section}>
          <div className={styles.container}>
            <div className={styles.contactGrid}>
              <div className={styles.contactInfo}>
                <h2>Get In Touch</h2>
                <p>We'd love to hear from you. Reach out to us through any of the following channels:</p>
                
                <div className={styles.contactItem}>
                  <h3>Email</h3>
                  <p>info@taugammaphi.org</p>
                </div>
                
                <div className={styles.contactItem}>
                  <h3>Phone</h3>
                  <p>+63 2 1234 5678</p>
                </div>
                
                <div className={styles.contactItem}>
                  <h3>Address</h3>
                  <p>123 Fraternity Road, Diliman, Quezon City, Philippines</p>
                </div>
              </div>

              <div className={styles.contactForm}>
                <h2>Send us a Message</h2>
                {submitted ? (
                  <div className={styles.successMessage}>
                    <h3>Thank you for your message!</h3>
                    <p>We'll get back to you as soon as possible.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className={styles.form}>
                    <div className={styles.formGroup}>
                      <label htmlFor="name">Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    
                    <div className={styles.formGroup}>
                      <label htmlFor="email">Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    
                    <div className={styles.formGroup}>
                      <label htmlFor="message">Message</label>
                      <textarea
                        id="message"
                        name="message"
                        rows="5"
                        value={formData.message}
                        onChange={handleChange}
                        required
                      ></textarea>
                    </div>
                    
                    <button type="submit" className={styles.primaryButton}>Send Message</button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  )
}