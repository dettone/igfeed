import { format, formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";
import { ThumbsUp, Trash } from "phosphor-react";
import { useState } from "react";
import { Avatar } from "./Avatar";
import styles from "./Comment.module.css";



interface Comment {
  commentText: string;
  commentDatedAt: Date;
  onDeleteComment: ( commentToDelete : string ) => void;
}

export function Comment({ commentText, commentDatedAt, onDeleteComment }: Comment) {
  const [likeCount , setLikeCount] = useState<number>(0);

  function handleDeleteComment() {
    onDeleteComment(commentText);
  }

  function handleLikeComment() {
    setLikeCount((state)=>{
      return state + 1;
    });
  }


  const publishedDateFormat = format(commentDatedAt, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR
  });
  const publishedDateRelativeToNow = formatDistanceToNow(commentDatedAt, {
    locale: ptBR,
    addSuffix: true
  });

  return (
    <div className={styles.comment}>
      <Avatar src={"https://avatars.githubusercontent.com/u/32111175?v="} hasBorder={false} />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>João Vitor Dettoni</strong>
              <time
                title={publishedDateFormat}
                dateTime={
                  commentDatedAt.toISOString()
                }
              >
                {" "}
                {publishedDateRelativeToNow}
              </time>
            </div>

            <button onClick={handleDeleteComment} title="Deletar Comentário" className={styles.replyButton}> <Trash size={24} /> </button>
          </header>
          <p> {commentText} </p>
        </div>


        <footer>

          <button onClick={handleLikeComment}>
            <ThumbsUp size={20} />
            Aplaudir <span>{likeCount}</span>
          </button>

        </footer>

      </div>
    </div>
  );
}
