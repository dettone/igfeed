import { Avatar } from "./Avatar";
import { Comment } from "./Comment";
import styles from "./Post.module.css";
export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
        <Avatar  src = {"https://avatars.githubusercontent.com/u/32111175?v="} />
          <div className={styles.authorInfo}>
            <strong> João Vitor Dettoni</strong>
            <span> Web Developer</span>
          </div>
        </div>

        <time
          title="19 de julho de 2022 ás 10 e 40"
          dateTime="2022-07-19 10:40:00"
        >
          {" "}
          Publicado há 1h
        </time>
      </header>

      <div className={styles.content}>
        <p>
          Acelere sua carreira em programação e especialize-se nas tecnologias
        </p>
        <p>mais modernas Evolua através de um método eficiente, uma grade</p>
        <p>
          curricular alinhada com o mercado e as atitudes que vão te destacar
          como
        </p>
        <p>profissional.</p>
        <p>
          {" "}
          <a href="#">Clique aqui e veja as novidades</a>
        </p>
      </div>
      <form className={styles.commentForm}>
        <strong> Deixe seu feedback</strong>
        <textarea placeholder="Deixe seu comentário"/>

      <footer>
      <button type="submit">Comentar</button>
        </footer> 
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
        </div>
    </article>
  );
}
