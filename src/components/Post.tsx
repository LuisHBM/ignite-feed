import { format, formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { ChangeEvent, FormEvent, useState } from "react";

import { Avatar } from "./Avatar";
import { Comment } from "./Comment";

import "./Post.scss";

interface Author {
  avatarUrl: string;
  name: string;
  role: string;
}

interface Content {
  type: 'paragraph' | 'link';
  content: string;
}

interface PostProps {
  author: Author;
  content: Content[];
  publishedAt: Date;
}

export function Post({ author, publishedAt, content } : PostProps) {

  const [comments, setComments] = useState(["Belo comentário!"]);

  const [newCommentText, setNewCommentText] = useState('');

  const publishedDateFormatted = format(
    publishedAt, "d 'de' LLLL 'às' HH:mm'h'", { locale: ptBR }
  );

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });

  function handleCreateNewComment(event: FormEvent) {
    event.preventDefault();

    setComments([...comments, newCommentText]);
    setNewCommentText('');
  }

  function handleNewCommentText(event: ChangeEvent<HTMLTextAreaElement>) {
    setNewCommentText(event.target.value);
  }

  function deleteComment(commentToDelete : string) {
    const commentsWithoutDeletedOne = comments.filter(comment => {
      return comment != commentToDelete;
    })

    setComments(commentsWithoutDeletedOne);
  }

  const isNewCommentTextEmpty = newCommentText.length === 0;

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
              return <p key={item.content}>{item.content}</p>;
            case "link":
              return (
                <p key={item.content}>
                  <a href="#">{item.content}</a>
                </p>
              );
          }
        })}
      </div>

      <form onSubmit={handleCreateNewComment} className="commentForm">
        <strong>Deixe seu feedback</strong>

        <textarea
         name="comment"
         placeholder="Deixe um comentário" 
         onChange={handleNewCommentText}
         value={newCommentText}
         required={true}
         />

        <footer>
          <button 
            type="submit" 
            disabled={isNewCommentTextEmpty}>
          Publicar
          </button>
        </footer>

      </form>

      <div className="commentList">
        {comments.map((comment) => {
          return <Comment 
            content={comment}
            key={comment}
            onDeleteComment={deleteComment}/>;
        })}
      </div>
    </article>
  );
}
