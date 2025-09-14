import styles from '../styles/Home.module.css'

export default function BrotherCard({ brother }) {
  return (
    <div className={styles.brotherCard}>
      <div className={styles.brotherImage}>
        <img src={brother.image || "/images/placeholder.jpg"} alt={brother.name} />
      </div>
      <div className={styles.brotherInfo}>
        <h3>{brother.name}</h3>
        <p className={styles.brotherPosition}>{brother.position}</p>
        <p className={styles.brotherChapter}>{brother.chapter}</p>
        <p className={styles.brotherBio}>{brother.bio}</p>
      </div>
    </div>
  )
}