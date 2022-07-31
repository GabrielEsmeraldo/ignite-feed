import styles from '../styles/Sidebar.module.css'

import { PencilLine } from 'phosphor-react'
import { Avatar } from './Avatar'

export function Sidebar(props) {

  return (
    <aside className={styles.sidebar}>
      <img className={styles.cover} src="https://images.unsplash.com/photo-1522252234503-e356532cafd5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50" />

      <div className={styles.profile}>
        <Avatar avatarWithBorder={true} avatarImage='http://github.com/gabrielesmeraldo.png'/>
        <strong>Gabriel Esmeraldo</strong>
        <span>Front-End Developer</span>
      </div>

      <footer>
        <button>
          <PencilLine size={20} />
          Editar seu perfil
        </button>
      </footer>
      
    </aside>
  )
}