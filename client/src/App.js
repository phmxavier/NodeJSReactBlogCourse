import React from 'react'
import logo from './logo.svg'
import './App.css'
import CreatePost from './CreatePost'
import PostList from './PostList'

function App() {
  return (
    <div className="App container">
      <CreatePost />
      <hr />
      <PostList />
    </div>
  )
}

export default App
