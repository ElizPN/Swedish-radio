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
interface ProgramsListProps {
  selectedOption: string;
}

export function ProgramsList({ selectedOption }: ProgramsListProps) {
  const [radioList, setRadioList] = useState<ProgramData[]>([]);

  const handleOnclick = async () => {
    const radioData = await fetchRadioData(selectedOption);
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
