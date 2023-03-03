import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { CategoryItem } from "./CategoriesController";

interface CategoriesListProps {
  categoryList: CategoryItem[];
}

export function CategoriesList({ categoryList }: CategoriesListProps) {
  return (
    <FormControl >
      <InputLabel id='demo-simple-select-label'>Category</InputLabel>
      <Select
        labelId='demo-simple-select-label'
        id='demo-simple-select'
        label='Age'
      >
        {categoryList.length > 0 &&
          categoryList.map((item) => {
            return <MenuItem value={10}>{item.name}</MenuItem>;
          })}
      </Select>
    </FormControl>
  );
}
