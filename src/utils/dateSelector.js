export const DATE_TEMPLATE = (date) =>
  `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(
    date.getDate(),
  ).padStart(2, '0')}`;

export const DATE_INTERVAL = [
  { index: 0, interval: 0, display: '오늘' },
  { index: 1, interval: 7, display: '7일' },
  { index: 2, interval: 15, display: '15일' },
  { index: 3, interval: 30, display: '1개월' },
  { index: 4, interval: 91, display: '3개월' },
  { index: 5, interval: 365, display: '1년' },
];
