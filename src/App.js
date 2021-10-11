import logo from './logo.svg';
import './App.css';
import Suscriber from './components/Suscriber';
import Form from './components/Form';
import Footer from './components/Footer';
import Filter from './components/Filter';
import Cards from './components/Cards';
import Navbar from './components/Navbar';
import React, { useState, useEffect } from 'react'
import Paginator from './components/Paginator';
import axios from 'axios';

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(2)

  const [posts, setPost] = useState([])
  const REACT_APP_SPACE_ID = process.env;
  useEffect(() => {
      axios.get(`https://api.airtable.com/v0/appDz13O7ugHyw4mH/jobs?api_key=${REACT_APP_SPACE_ID}`)
          .then(res => {
              setPost(res.data.records)
          })
          .catch(err => {
              console.log(err)
          })
  })
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = pageNumber => setCurrentPage(pageNumber);
  return (
    <div>
      <Navbar />
      <Form />
      <Cards name="Desarrollo Web" posts={currentPosts}></Cards>
      <Paginator
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}/>
      <Filter />
      <Suscriber />
      <Footer />

    </div>
  );
}

export default App;
