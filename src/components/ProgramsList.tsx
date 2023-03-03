import { Box, Button, Container, Typography } from "@mui/material";
import { useState } from "react";
import { RadioItem } from "./RadioItem";


export interface ProgramData {
  name: string;
  description: string;
  programimage: string;
}

const fetchRadioData = async () => {
  const dataUrl =
    "https://api.sr.se/api/v2/programs/index?programcategoryid=133&format=JSON&pagination=false";
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
    <Box>
      <Button onClick={handleOnclick}>start</Button>
      <RadioItem radioList={radioList} />
    </Box>
  );
}
