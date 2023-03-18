import { ThumbsUp, Trash } from "phosphor-react";
import { useState } from "react";
import { Avatar } from "./Avatar";
import "./Comment.scss";

interface CommentProps {
  content: string;
  onDeleteComment: (comment: string) => void;
}

export function Comment({ content , onDeleteComment}: CommentProps) {

  const [likeCount, setLikeCount] = useState(0);

  function haddleDeleteComment() {
    onDeleteComment(content);
  }

  function handdleLikeCount() {
    setLikeCount(likeCount + 1);
  }

  return (
    <div className="comment">
      <Avatar hasBorder={false} src="https://github.com/LuisHBM.png"/>

      <div className="commentBox">
        <div className="commentContent">

          <header>
            <div className="authorAndTime">
              <strong>Luís Henrique</strong>
              <time title="11 de maio às 8:50h" dateTime="2022-05-11 08:50:15">
                Cerca de 1h atrás
              </time>
            </div>

            <button onClick={haddleDeleteComment} title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button onClick={handdleLikeCount}>
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
        
      </div>
    </div>
  );
}
