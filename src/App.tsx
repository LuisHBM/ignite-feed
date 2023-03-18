import { Post } from "./components/Post";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";

import './global.scss';
import './App.scss';

export function App() {
  const posts = [
    {
      id: 1,
      author: {
        avatarUrl: 'http://github.com/LuisHBM.png',
        name: 'Luis Henrique',
        role: 'Developer',
      },
      content: [
        { type: 'paragraph', content: 'Fala galeraa 👋' },
        { type: 'paragraph', content: 'Acabei de postar lá uma parada, curte lá.' },
        { type: 'link', content: 'maf.design/port' }

    ],
    publishedAt: new Date('2022-9-09 20:00:00'),
    },
    {
      id: 2,
      author: {
        avatarUrl: 'https://github.com/Lulinha-do-Synthwave.png',
        name: 'Pedro',
        role: 'Pipas',
      },
      content: [
        { type: 'paragraph', content: 'Fala galeraa 👋' },
        { type: 'paragraph', content: 'Acabei de postar lá uma parada, curte lá.' },
        { type: 'link', content: 'maf.design/port' }

    ],
    publishedAt: new Date('2022-08-09 20:00:00'),
    },
    {
      id: 3,
      author: {
        avatarUrl: 'https://github.com/Joojbr.png',
        name: 'Joojbr',
        role: 'Cringe',
      },
      content: [
        { type: 'paragraph', content: 'Fala galeraa 👋' },
        { type: 'paragraph', content: 'Acabei de postar lá uma parada, curte lá.' },
        { type: 'link', content: 'maf.design/port' }

    ],
    publishedAt: new Date('2022-05-03 20:00:00'),
    }
  ]

  return (
    <>
      <Header/>
      
      <div className="wrapper">

        <Sidebar/>

        <main>
          {posts.map(post => {
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


