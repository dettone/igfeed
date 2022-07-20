import { ThumbsUp, Trash } from "phosphor-react";
import { Avatar } from "./Avatar";
import styles from "./Comment.module.css";

export function Comment() {
  return (
    <div className={styles.comment}>
        <Avatar  src = {"https://avatars.githubusercontent.com/u/32111175?v="}  hasBorder = {false}/>
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>João Vitor Dettoni</strong>
              <time
                title="19 de julho de 2022 ás 10 e 40"
                dateTime="2022-07-19 10:40:00"
              >
                {" "}
                Cerca de 1 hora atrás
              </time>
            </div>

            <button title="Deletar Comentário" className={styles.replyButton}> <Trash size={24} /> </button>
          </header>
          <p> Muuito bom mano, parabéns </p>
        </div>


        <footer>  

        <button>
            <ThumbsUp size ={20} />
            Aplaudir <span>20</span>
        </button>

        </footer>
        
      </div>
    </div>
  );
}
