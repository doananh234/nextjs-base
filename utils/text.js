/* eslint-disable */
export const upperFirstChar = text =>
  text.replace(/\w\S*/g, txt => txt.charAt(0).toUpperCase() + txt.substr(1));

export const lowerFirstChar = text =>
  text.charAt(0).toLowerCase() + text.substr(1);

export const replaceAll = (text, search, replacement) =>
  text.replace(new RegExp(search, 'g'), replacement);

export const makeActionName = text =>
  lowerFirstChar(
    replaceAll(
      upperFirstChar(replaceAll(text, '_', ' ').toLowerCase()),
      ' ',
      ''
    )
  );

export const formatNumber = (number, n, x) => {
  const re = `\\d(?=(\\d{${x || 3}})+${n > 0 ? '\\.' : '$'})`;
  return Number(number)
    .toFixed(Math.max(0, ~~n))
    .replace(new RegExp(re, 'g'), '$&,');
};

export const formatMoney = (number = 0, n, x) => {
  const UNIT = ['', 'K', 'tr', 'tỉ'];
  let unitRank = 0;
  let tmpPrice = Math.abs(number);
  while (1) {
    tmpPrice = Number(tmpPrice) / 1000;
    unitRank += tmpPrice > 1 ? 1 : 0;
    if (tmpPrice < 1) break;
  }
  const re = `\\d(?=(\\d{${x || 3}})+${n > 0 ? '\\.' : '$'})`;
  return `${number >= 0 ? '' : '-'}${Number(tmpPrice * 1000)
    .toFixed(1)
    .replace(new RegExp(re, 'g'), '$&,')}${UNIT[unitRank]}`;
};
