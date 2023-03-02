import { useEffect, useState } from "react";
import { RadioItem } from "./RadioItem";

// const apiDomain = "https://api.sr.se/api/v2/programs/?format=json&index?programcategoryid=133"
// const apiDomain = "https://api.sr.se/api/v2/programs/index?programcategoryid=133"

export interface ProgramData {
  name: string;
  description: string;
  programimage: string;
}

const fetchRadioData = async () => {
  const dataUrl =
    "https://api.sr.se/api/v2/programs/?format=json&index?channelid=164&programcategoryid=133";
  return fetch(dataUrl).then((response) => {
    return response.json();
  });
};

export function ProgramsList() {
  const [radioList, setRadioList] = useState<ProgramData[]>([]);

  const handleOnclick = async () => {
    const radioData = await fetchRadioData();
    const programs = radioData.programs;

    const programsInfo = programs.map((item: ProgramData) => {
      const progaramdata = {
        name: item.name,
        description: item.description,
        programimage: item.programimage,
      };
      return progaramdata;
    });
    setRadioList(programsInfo);
  };

  return (
    <div>
      {/* {radioList.length > 0 && (
        <ul>
          <li>{radioList[0].name}</li>
          <li>
            <img src={radioList[0].programimage} />
          </li>
          <li>{radioList[0].description}</li>
        </ul>
      )} */}
      <button onClick={handleOnclick}>start</button>

      {radioList.length > 0 &&
        radioList.map((item, index) => {
          return <RadioItem item={item}></RadioItem>;
        })}
    </div>
  );
}
