import { DetailType } from "../../../pages/user/[id]";
import styles from "./user-detail.module.scss";
import Image from "next/image";

export default function UserDetail({
  user,
  posts,
  user_comments,
  leastCommented,
  mostCommented,
}: DetailType) {
  return (
    <div className={styles["user-detail-container"]}>
      <div className={styles["user-detail-lead"]} />

      <div className={styles["user-info"]}>
        <h1>{user.name}</h1>

        <div className={styles["layout-info"]}>
          <div className={styles["detail-icon-layout"]}>
            <div>
              <Image src={"/icons/post.png"} width={24} height={24} />
            </div>

            <span>{posts.length} posts</span>
          </div>

          <div className={styles["detail-icon-layout"]}>
            <div>
              <Image src={"/icons/mail.png"} width={24} height={24} />
            </div>
            <span>{user.email}</span>
          </div>

          <div className={`${styles["detail-icon-layout"]}`}>
            <div>
              <Image src={"/icons/location.png"} width={24} height={24} />
            </div>
            <span>{user.address.city.slice(0, 12)}</span>
          </div>

          <div className={`${styles["detail-icon-layout"]}`}>
            <div>
              <Image src={"/icons/comment.png"} width={24} height={24} />
            </div>
            <span>{user_comments?.length} Comments</span>
          </div>
        </div>

        <div className={styles["top-container"]}>
          <div className={`${styles["detail-icon-layout"]}`}>
            <div className={styles['comment-icons']}>
              <span>{leastCommented?.length}</span>
              <div>
                <Image
                  src={"/icons/white_comment.png"}
                  width={24}
                  height={24}
                />
              </div>
            </div>
            <span>{mostCommented?.post?.title}</span>
          </div>

          <div className={`${styles["detail-icon-layout"]} `}>
            <div className={styles['comment-icons']}>
              <span>{leastCommented?.length}</span>
              <div>
                <Image
                  src={"/icons/white_comment.png"}
                  width={24}
                  height={24}
                />
              </div>
            </div>
            <span>{leastCommented?.post?.title}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
