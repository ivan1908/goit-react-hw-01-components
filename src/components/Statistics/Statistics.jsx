import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

const getRandomHexColor = () =>
  '#' + Math.floor(Math.random() * 16777215).toString(16);

const Statistics = ({ title, stats }) => (
  <section className={styles.statistics}>
    {title && <h2 className={styles.title}>{title}</h2>}

    <ul className={styles.list}>
      {stats.map(stat => (
        <li
          className={styles.item}
          key={stat.id}
          style={{ backgroundColor: getRandomHexColor() }}
        >
          <span className={styles.label}>{stat.label}</span>
          <span className={styles.percentage}>{stat.percentage}%</span>
        </li>
      ))}
    </ul>
  </section>
);

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
export default Statistics;