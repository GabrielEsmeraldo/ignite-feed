import { Header } from './Components/Header'
import { Sidebar } from './Components/Sidebar'
import { Post } from './Components/Post'


import './styles/global.css'
import styles from './styles/App.module.css'

export function App() {

  const post = [
    {
      id: 1,
      author: {
        avatarURL: 'https://github.com/gabrielesmeraldo.png',
        name: 'Gabriel Esmeraldo',
        role: 'Front-End Developer'
      },
      content: [
        { id: 1 },
        { type: 'paragraph', content: 'Fala galeraa 👋, acabei de subir mais um projeto no meu portfólio.É um projeto que fiz no NLW Return, evento da Rocketseat.O nome do projeto é DoctorCare 🚀' },
        { type: 'link', content: 'https://nlw-origin-8.vercel.app/' }
      ],
      publishedAt: new Date('2022-07-20 20:00:00')
    },
    {
      id: 2,
      author: {
        avatarURL: 'https://github.com/diego3g.png',
        name: 'Diego Fernandes',
        role: 'CTO @Rocketseat'
      },
      content: [
        { id: 2 },
        { type: 'paragraph', content: 'ipsum dolor sit amet consectetur adipisicing elit. Eligendi qui nobis debitis! Obcaecati sapiente nesciunt facilis, labore illo tenetur nostrum itaque accusantium porro. Distinctio vitae quis tempore voluptatibus iure? Cum.,ipsum dolor sit amet consectetur adipisicing elit. Eligendi qui nobis debitis! Obcaecati sapiente nesciunt facilis, labore illo tenetur nostrum itaque accusantium porro. Distinctio vitae quis tempore voluptatibus iure? Cum.,' },
        { type: 'link', content: 'https://nlw-origin-8.vercel.app/' }
      ],
      publishedAt: new Date('2022-05-10 20:00:00')
    },
  ]


  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>

          {post.map(post => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </>

  )
}
