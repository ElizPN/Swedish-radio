import { Box } from "@mui/material";
import { ProgramData } from "./CategoriesList";
import { RadioItem } from "./RadioItem";


interface ProgramsListProps {
  selectedOption: string;
  radioList: ProgramData[];
}

export function ProgramsList({
 
  radioList,
}: ProgramsListProps) {
  

  return (
    <Box>
      <RadioItem radioList={radioList} />
    </Box>
  );
}
