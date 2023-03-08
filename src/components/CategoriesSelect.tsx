import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { CategoryItem } from "./RadioContainer";

interface CategoriesSelectProps {
  selectedOption: string;
  handleOnchange: (e: SelectChangeEvent<string>) => void;
  genereteId: () => string;
  categoryList: CategoryItem[];
}

export function CategoriesSelect({
  selectedOption,
  handleOnchange,
  genereteId,
  categoryList,
}: CategoriesSelectProps): JSX.Element {
  return (
    <FormControl fullWidth={true}>
      <InputLabel
        sx={{
          backgroundColor: "black",
          pr: "5px",
        }}
        id='demo-simple-select-label'
      >
        Kategori
      </InputLabel>
      <Select
        value={selectedOption}
        onChange={handleOnchange}
        labelId='demo-simple-select-label'
        id='demo-simple-select'
        label='Kategori'
      >
        {categoryList.length > 0 &&
          categoryList.map((item) => {
            return (
              <MenuItem key={genereteId()} value={item.id}>
                {item.name}
              </MenuItem>
            );
          })}
      </Select>
    </FormControl>
  );
}
