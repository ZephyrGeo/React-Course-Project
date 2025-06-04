import styles from "./CityItem.module.css";
import { Link } from "react-router-dom";

const formatDate = (date) => {
  return new Intl.DateTimeFormat("en", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(date));
};

function CityItem({ city }) {
  const { cityName, emoji, date,id } = city;

  return (
    <li>
      <Link className={styles.cityItem} to={`${id}`}>
      <span className={styles.emoji}>{emoji}</span>
      <span className={styles.name}>{cityName}</span>
      <time className={styles.date}>{formatDate(date)}</time>
      <button className={styles.deleteBtn}>&times;</button>
      </Link>
    </li>
  );
}

export default CityItem;
