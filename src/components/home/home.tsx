import { HomeType } from "../../../pages";
import styles from "./home.module.scss";
import UserCard from "../_shared/user-card/user-card";

export default function Home({ users }: HomeType) {
  return (
    <div className={styles["home"]}>
      <div className={styles["lead"]}>
        <h1>Social Media Users List</h1>
      </div>

      <div className={styles['card-grid-container']}>
        {users.map((user) => (
          <UserCard user={user} />
        ))}
      </div>
    </div>
  );
}
