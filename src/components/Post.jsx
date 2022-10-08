import { format, formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { useState } from "react";

import { Avatar } from "./Avatar";
import { Comment } from "./Comment";

import "./Post.scss";

export function Post({ author, publishedAt, content }) {
  const [comments, setComments] = useState([1, 2, 3]);

  const publishedDateFormatted = format(
    publishedAt,
    "d 'de' LLLL 'às' HH:mm'h'",
    {
      locale: ptBR,
    }
  );

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });

  function handleCreateNewComment() {
    event.preventDefault();

    console.log("new Comment");
    setComments([...comments, comments.length + 1]);
  }

  return (
    <article className="post">
      <header>
        <div className="author">
          <Avatar src={author.avatarUrl} alt="" />
          <div className="authorInfo">
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time
          title={publishedDateFormatted}
          dateTime={publishedAt.toISOString()}
        >
          {publishedDateRelativeToNow}
        </time>
      </header>

      <div className="content">
        {content.map((item) => {
          switch (item.type) {
            case "paragraph":
              return <p>{item.content}</p>;
            case "link":
              return (
                <p>
                  <a href="#">{item.content}</a>
                </p>
              );
          }
        })}
      </div>

      <form onSubmit={handleCreateNewComment} className="commentForm">
        <strong>Deixe seu feedback</strong>

        <textarea placeholder="Deixe um comentário" />

        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className="commentList">
        {comments.map((item) => {
          return <Comment />;
        })}
      </div>
    </article>
  );
}
