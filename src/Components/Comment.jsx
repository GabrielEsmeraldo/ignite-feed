import { useState } from "react";
import { ThumbsUp, Trash } from "phosphor-react";
import { formatDistanceToNow } from 'date-fns'

import { Avatar } from "./Avatar";
import { Modal } from "../Components/Modal"

import styles from '../styles/Comment.module.css'
import ptBR from "date-fns/locale/pt-BR";

export function Comment({ content, deleteComment, id }) {

  const [likes, setLikes] = useState(0)
  const [modal, setModal] = useState(false)

  const relativeTimeToNow = formatDistanceToNow(
    new Date(Date.now()),
    { includeSeconds: true, locale: ptBR }
  )

  function handleLikeComment() {
    if (likes === 1) {
      setLikes(0)
    } else {
      setLikes(likes + 1)
    }

  }

  function HandleOpenModal() {
    setModal(true)
  }

  function HandleDeleteComment() {
    deleteComment(id)
  }

  return (
    <div className={styles.comment}>
      <Avatar avatarImage='http://github.com/gabrielesmeraldo.png' />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Gabriel Esmeraldo</strong>
              <time title="11 de Maio às 08:13h" dateTime="2022-05-11">{relativeTimeToNow}</time>
            </div>

            <button onClick={HandleOpenModal} title="Deletar comentário">
              <Trash size={20} />
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp size={24} />
            Like <span>{likes}</span>
          </button>

          {modal && <Modal Cancel={setModal} Delete={HandleDeleteComment} />}
        </footer>
      </div>
    </div>
  )
}