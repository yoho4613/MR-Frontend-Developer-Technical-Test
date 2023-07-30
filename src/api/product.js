export const fetchProduct = async (url) => {
  try {
    const result = await fetch(url);
    const data = await result.json();
    return data;
  } catch (e) {
    console.log(e);
    return null;
  }
};
