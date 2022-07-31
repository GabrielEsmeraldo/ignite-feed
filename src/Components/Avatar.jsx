import styles from '../styles/Avatar.module.css'

export function Avatar({ avatarWithBorder, avatarImage }) {
  return (
    <img className={avatarWithBorder ? styles.avatarWithBorder : styles.avatar} src={avatarImage} alt="" />
  )
}