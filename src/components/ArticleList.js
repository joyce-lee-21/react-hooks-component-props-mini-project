import React from "react";
import Article from "./Article";

function ArticleList(props) {
    // console.log(props.posts)
    return (
      <div>
          <main>
            {props.posts.map(post => (
                <Article key={post.id} title={post.title} date={post.date} preview={post.preview} minutes={post.minutes}/>
            ))}
          </main>
      </div>
    );
}


export default ArticleList;