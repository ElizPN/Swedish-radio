import { useState } from "react";

// const apiDomain = "https://api.sr.se/api/v2/programs/?format=json&index?programcategoryid=133"
// const apiDomain = "https://api.sr.se/api/v2/programs/index?programcategoryid=133"

const fetchRadioData = async () => {
  const dataUrl =
    "https://api.sr.se/api/v2/programs/?format=json&index?programcategoryid=133";
  return fetch(dataUrl).then((response) => {
    // console.log(response.json());

    return response.json();
  });
};

export function ProgramsList() {
  const [radioList, setRadioList] = useState([]);

  const handleOnclick = async () => {
    try {
      const radioData = await fetchRadioData();
      const programs = radioData.programs;

      const programsInfo = programs.map(
        (item: { name: string; description: string; programimage: string }) => {
          const progaramdata = {
            name: item.name,
            description: item.description,
            programimage: item.programimage,
          };

          return progaramdata;
        }
      );
      console.log(programsInfo);
      

    //   console.log(programs);
    } catch (error) {
      console.log(error);
    }
  };

  //   console.log(radioData);

  return <button onClick={handleOnclick}>start</button>;
}
