import React from "react";

function Article({
    title, 
    date = "January 1, 1970", 
    preview,
    minutes,
}) {
    console.log(minutes)
    return (
      <div>
          <article>
              <h3>{title}</h3>
              <small>{date}</small>
              <p>{preview}</p>
              {minutes >= 30 ? 
              "🍱 min read" : 
              `☕️ ${minutes} min read`}
          </article>
      </div>
    );
}

export default Article;