import { Avatar } from "./Avatar";
import { Comment } from "./Comment";
import styles from "./Post.module.css";
import { format, formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { useEffect, useState } from "react";
interface Post {
  id: number;
  author: {
    avatarUrl: string;
    name: string;
    role: string;
  };
  content: {
    type: string;
    content: string;
  }[];
  publishedAt: Date;
}
[];

interface Comment {
  id: number;
  text: string;
  date: Date;
}

export function Post({ id, author, content, publishedAt }: Post) {
  const [comments, setComment] = useState<Comment[]>([]);

  const [newCommentPost, setNewCommentPost] = useState<string>("");

  function handleNewCommentChange() {
    event.target?.setCustomValidity('');
    const commentTarget = event.target as HTMLInputElement;
    setNewCommentPost(commentTarget.value);
  }

  function handleNewCommentInvalid(){
    event.target?.setCustomValidity('Por favor, digite um comentário válido');
  }


  function handleCreateNewComment() {
    event.preventDefault();
    setComment([
      ...comments,
      { id: Math.random(), text: newCommentPost, date: new Date() },
    ]);
    setNewCommentPost("");
  }

  function deleteComment(commentToDelete: string) {
    const commentsWithoutDeletedOne = comments.filter(
      (comment) => comment.text !== commentToDelete
    );
    setComment(commentsWithoutDeletedOne);
  }



  const publishedDateFormat = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR,
  });

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });

  const isNewCommentEmpty = newCommentPost.length === 0;
  
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong> {author.name}</strong>
            <span> {author.role}</span>
          </div>
        </div>

        <time title={publishedDateFormat} dateTime={publishedAt.toISOString()}>
          {" "}
          {publishedDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        <div className={styles.content}>
          {content.map((content) => {
            if (content.type === "paragraph") {
              return <p key={content.content}>{content.content}</p>;
            } else if (content.type === "link") {
              return (
                <p key={content.content}>
                  <a href={content.content}>{content.content}</a>
                </p>
              );
            }
          })}
        </div>
      </div>
      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong> Deixe seu feedback</strong>
        <textarea
          placeholder="Deixe seu comentário"
          name="comment"
          onChange={handleNewCommentChange}
          value={newCommentPost}
          onInvalid={handleNewCommentInvalid}
          required
        />
        <footer>
          <button type="submit" disabled={isNewCommentEmpty}>Comentar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map((comment) => {
          return (
            <Comment
              key={comment.id}
              commentText={comment.text}
              commentDatedAt={comment.date}
              onDeleteComment={deleteComment}
            />
          );
        })}
      </div>
    </article>
  );
}
