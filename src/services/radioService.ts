export const fetchRadioData = async (id: string) => {
  const dataUrl = `https://api.sr.se/api/v2/programs/index?programcategoryid=${id}&format=JSON&pagination=false`;
  return fetch(dataUrl).then((response) => {
    return response.json();
  });
};


