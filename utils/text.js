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
