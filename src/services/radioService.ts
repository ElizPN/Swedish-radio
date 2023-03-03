export const fetchRadioData = async () => {
  const dataUrl =
    "https://api.sr.se/api/v2/programs/index?programcategoryid=133&format=JSON&pagination=false";
  return fetch(dataUrl).then((response) => {
    return response.json();
  });
};
