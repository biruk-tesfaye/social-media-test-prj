import { UserType } from "../../../../pages";
import styles from "./user-card.module.scss";
import Image from "next/image";
import Link from "next/link";
type UserCardType = {
  user: UserType;
};
export default function UserCard({ user }: UserCardType) {
  return (
    <Link href={`/user/${user.id}`}>
      <a>
        <div className={styles["user-card-container"]}>
          <div className={styles["name-box"]}>
            <div className={styles["vip-box"]}>
              <h4>{user.name}</h4>
              <div>
                <span>VIP</span>
              </div>
            </div>
            <div className={styles["icon-layout"]}>
              <div>
                <Image src={"/icons/post.png"} width={24} height={24} />
              </div>

              <span>posts</span>
            </div>
          </div>

          <div className={styles["auto-layout"]}>
            <div className={styles["icon-layout"]}>
              <div>
                <Image src={"/icons/mail.png"} width={24} height={24} />
              </div>
              <span>{user.email}</span>
            </div>

            <div className={`${styles["icon-layout"]} ${styles["location"]}`}>
              <div>
                <Image src={"/icons/location.png"} width={24} height={24} />
              </div>
              <span>{user.address.city.slice(0, 12)}</span>
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
}
