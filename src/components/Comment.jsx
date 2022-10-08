import { ThumbsUp, Trash } from "phosphor-react";
import { Avatar } from "./Avatar";
import "./Comment.scss";

export function Comment() {
  return (
    <div className="comment">
      <Avatar hasBorder={false} src="https://github.com/LuisHBM.png" alt="" />

      <div className="commentBox">
        <div className="commentContent">

          <header>
            <div className="authorAndTime">
              <strong>Luís Henrique</strong>
              <time title="11 de maio às 8:50h" dateTime="2022-05-11 08:50:15">
                Cerca de 1h atrás
              </time>
            </div>

            <button title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>

          <p>Muito bom, parabéns!</p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
        
      </div>
    </div>
  );
}
