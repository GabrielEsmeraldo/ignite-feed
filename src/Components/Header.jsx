import styles from '../styles/Header.module.css'
import IgniteLogo from '../assets/ignite-logo.svg'

export function Header() {
  return (
    <header className={styles.header}>
      <img src={IgniteLogo} alt="" />
      <strong>Ignite Feed</strong>
    </header>
  )
}