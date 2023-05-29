import React from 'react';
import styles from './SortByMonth.module.css';

interface SortByMonthProps {
  sortType: string;
  onChange: (sortType: string) => void;
}

const SortByMonth: React.FC<SortByMonthProps> = ({ sortType, onChange }) => {
  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(event.target.value);
  };

  return (
    <div className={styles.sortByMonth}>
      <label htmlFor="sortSelect" className={styles.label}>
        Sort:
      </label>
      <select id="sortSelect" value={sortType} onChange={handleSortChange} className={styles.select}>
        <option value="">None</option>
        <option value="asc">Ascending</option>
        <option value="desc">Descending</option>
      </select>
    </div>
  );
};

export default SortByMonth;
