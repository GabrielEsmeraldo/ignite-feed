import { useState } from 'react'
import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

import { Avatar } from './Avatar'
import { Comment } from './Comment'

import styles from '../styles/Post.module.css'

export function Post({ author, publishedAt, content }) {

  const [comments, setComments] = useState([])
  const [newComment, setNewComment] = useState('')

  const publishedDateFormatted = format(publishedAt, "dd 'de' LLLL 'às' H:mm'h'", {
    locale: ptBR
  })

  const publishedDateRelative = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  })

  function handleCreateNewComment() {
    event.preventDefault()

    setComments([...comments, newComment])
    setNewComment('')
  }

  function handleCommentChange() {
    event.target.setCustomValidity('')
    setNewComment(event.target.value)
  }

  function deleteComment(commentToDelete) {
    const comentWithoutDeleteOne = comments.filter(comment => {
      return comment !== commentToDelete
    })
    setComments(comentWithoutDeleteOne)
  }

  function handleNewCommentInvalid(){
    event.target.setCustomValidity('Esse campo é obrigatorio')
  }

  return (
    <>
      <article className={styles.post}>
        <header>
          <div className={styles.author}>
            <Avatar avatarImage={author.avatarURL} />
            <div className={styles.authorInfo}>
              <strong className={styles.author}>{author.name}</strong>
              <span className={styles.profession}>{author.role}</span>
            </div>
          </div>
          <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>{publishedDateRelative}</time>
        </header>

        <div className={styles.content}>
          {content.map((line, index) => {
            if (line.type === 'paragraph') {
              return (
                <p key={index}>{line.content}</p>
              )
            } else {
              return (
                <p key={index}><a href={line.content}>{line.content}</a></p>
              )
            }
          })}
        </div>

        <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
          <strong>Deixe seu feedback</strong>

          <textarea
            placeholder='Deixe um comentário'
            value={newComment}
            onChange={handleCommentChange}
            onInvalid={handleNewCommentInvalid}
            required
          />

          <footer>
            <button type='submit' disabled={newComment.length === 0}>Comentar</button>
          </footer>
        </form>

        <div className={styles.commentList}>
          {comments.map((comment) => {
            return <Comment key={comment} content={comment} deleteComment={deleteComment} />
          })}
        </div>
      </article >


    </>


  )
}