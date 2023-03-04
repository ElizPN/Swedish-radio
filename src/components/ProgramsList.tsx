import { Box, Button } from "@mui/material";
import { useState } from "react";
import { fetchRadioData } from "../services/radioService";
import { RadioItem } from "./RadioItem";

export interface ProgramData {
  name: string;
  description: string;
  programimage: string;
  programurl: string;
}

export function ProgramsList() {
  const [radioList, setRadioList] = useState<ProgramData[]>([]);

  const handleOnclick = async () => {
    const radioData = await fetchRadioData(133);
    const programs = radioData.programs;

    const programsInfo = programs.map((item: ProgramData) => {
      const progaramdata = {
        name: item.name,
        description: item.description,
        programimage: item.programimage,
        programurl: item.programurl,
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
