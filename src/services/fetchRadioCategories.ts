export const fetchRadioCategories = async () => {
  const dataUrl =
    "https://api.sr.se/api/v2/programcategories/?format=JSON&pagination=false";
  const response = await fetch(dataUrl);
  const data = await response.json();
  return data.programcategories;
};
