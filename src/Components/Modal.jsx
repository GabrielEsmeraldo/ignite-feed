import styles from '../styles/Modal.module.css'

export function Modal({ Cancel, Delete }) {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <strong className={styles.title}>Excluir Comentário</strong>
        <p className={styles.description}>Você tem certeza que gostaria de excluir este comentário?</p>

        <div className={styles.buttonGroup}>
          <button className={styles.cancelBtn} onClick={() => Cancel(false)}>Cancelar</button>
          <button className={styles.confirmBtn} onClick={() => Delete()}>Sim, excluir</button>
        </div>
      </div>
    </div>
  )
}