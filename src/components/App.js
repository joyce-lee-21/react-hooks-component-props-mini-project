import React from "react";
import blogData from "../data/blog";
import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";

const elements = blogData
// console.log(elements);

function App() {
  return (
    <div className="App">
      <Header name={elements.name}/>
      <About image={elements.image} about={elements.about}/>
      <ArticleList posts={elements.posts}/>
    </div>
  );
}

export default App;
