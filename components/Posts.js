import React from 'react'
import Post from './Post'

const posts = [
    {
        id: "123",
        username: "theayochase",
        image: "https://github.com/emmanuelawe/portfolio-chase/blob/main/public/assets/Chasepfp.png?raw=true",
        img: "https://github.com/emmanuelawe/portfolio-chase/blob/main/public/assets/Chasepfp.png?raw=true",
        caption: "The mastermind! Created OAUVIBES in 2016 and went ahead to create LYRICS AFRICA in 2021"
    },
    {
        id: "123",
        username: "theayochase",
        image: "https://github.com/emmanuelawe/portfolio-chase/blob/main/public/assets/Chasepfp.png?raw=true",
        img: "https://github.com/emmanuelawe/portfolio-chase/blob/main/public/assets/Chasepfp.png?raw=true",
        caption: "The mastermind! Created OAUVIBES in 2016 and went ahead to create LYRICS AFRICA in 2021"
    },
]

const Posts = () => {
  return (
    <div>
    {posts.map((post) => (
    <Post key={post.id} 
        id={post.id} username={post.username}
        userImg={post.image} img={post.img} caption={post.caption}
    />
    ))}
    </div>
  )
}

export default Posts