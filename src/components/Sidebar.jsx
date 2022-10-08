import { PencilLine } from "phosphor-react";
import { Avatar } from "./Avatar";

import "./Sidebar.scss";

export function Sidebar() {
  return (
    <aside className="sidebar">
      <img
        className="cover"
        src="https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=40"
        alt=""
        srcset=""
      />

      <div className="profile">
        <Avatar src="https://github.com/LuisHBM.png" />
        <strong>Luís Henrique</strong>
        <span>Developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}
