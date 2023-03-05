import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import Box from "@mui/system/Box";
import { nanoid } from "nanoid";
import { useState } from "react";
import { CategoryItem } from "./CategoriesController";
import { ProgramsList } from "./ProgramsList";
import { fetchRadioData } from "../services/radioService";

interface CategoriesListProps {
  categoryList: CategoryItem[];
}
export interface ProgramData {
  name: string;
  description: string;
  programimage: string;
  programurl: string;
}

export function CategoriesList({ categoryList }: CategoriesListProps) {
  const [radioList, setRadioList] = useState<ProgramData[]>([]);
  const [selectedOption, setSelectedOption] = useState("");

  // React.ChangeEvent<HTMLSelectElement>

  const handleOnchange = async (event: any) => {
    const radioData = await fetchRadioData(event.target.value);
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
    setSelectedOption(event.target.value);
    setRadioList(programsInfo);
  };

  return (
    <Box>
      <FormControl>
        <InputLabel id='demo-simple-select-label'>Category</InputLabel>
        <Select
          value={selectedOption}
          onChange={handleOnchange}
          labelId='demo-simple-select-label'
          id='demo-simple-select'
          label='Age'
        >
          {categoryList.length > 0 &&
            categoryList.map((item) => {
              return (
                <MenuItem key={nanoid()} value={item.id}>
                  {item.name}
                </MenuItem>
              );
            })}
        </Select>
      </FormControl>
      <ProgramsList selectedOption={selectedOption} radioList={radioList} />
    </Box>
  );
}
