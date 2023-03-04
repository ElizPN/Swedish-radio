import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { nanoid } from "nanoid";
import { useState } from "react";
import { CategoryItem } from "./CategoriesController";

interface CategoriesListProps {
  categoryList: CategoryItem[];
}

export function CategoriesList({ categoryList }: CategoriesListProps) {
  const [selectedOption, setSelectedOption] = useState("");


  return (
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
              <MenuItem key={nanoid()} value={item.name}>
                {item.name}
              </MenuItem>
            );
          })}
      </Select>
    </FormControl>
  );
}
