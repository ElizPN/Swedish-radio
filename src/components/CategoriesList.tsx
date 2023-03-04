import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import Box from "@mui/system/Box";
import { nanoid } from "nanoid";
import { useState } from "react";
import { CategoryItem } from "./CategoriesController";
import { ProgramsList } from "./ProgramsList";

interface CategoriesListProps {
  categoryList: CategoryItem[];
}

interface Option {
  name: string;
  id: number;
}
const defaultOption: Option = {
  name: "",
  id: 0,
};

export function CategoriesList({ categoryList }: CategoriesListProps) {
  const [selectedOption, setSelectedOption] = useState("");

  return (
    <Box>
      <FormControl>
        <InputLabel id='demo-simple-select-label'>Category</InputLabel>
        <Select
          value={selectedOption}
          onChange={(event) => setSelectedOption(event.target.value)}
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
      <ProgramsList selectedOption={selectedOption} />
    </Box>
  );
}
