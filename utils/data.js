export const getCover = item => item?.covers[0].sizes?.sm?.url;
export const getImageUrl = (item, key = 'logo') => item[key]?.sizes?.sm?.url;
