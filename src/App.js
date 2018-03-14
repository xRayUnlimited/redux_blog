import React from 'react';
import BlogForm from './components/BlogForm';
import BlogList from './components/BlogList';
import Footer from './components/Footer';

const App = () => (
    <div>
      <h1>Add View Remove a Blog</h1>
      <BlogForm />
      <BlogList />
      <Footer />
    </div>
)

export default App;
