import React from "react";
import blogData from "../data/blog";
import Header from './Header';
import About from './About';
import ArticleList from './ArticleList'

console.log(blogData);

function App() {
  return (
    <div className="App">
      <Header blogName="Ray Blog" />
      <About
        image="https://via.placeholder.com/215"
        about="A blog about learning React"
      />
      <ArticleList posts={blogData.posts} /> {/* Fix the variable name here */}
    </div>
  );
}

export default App;
