import {
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
} from "@mui/material";
import Box from "@mui/system/Box";
import { useState } from "react";
import { CategoryItem } from "./CategoriesController";
import { ProgramsList } from "./ProgramsList";
import { fetchRadioData } from "../services/fetchRadioPrograms";
import { genereteId } from "../services/generateId";

interface CategoriesListProps {
  categoryList: CategoryItem[];
}
export interface ProgramData {
  name: string;
  description: string;
  programimage: string;
  programurl: string;
}

const styleGridContainer = {
  marginTop: 5,
  marginLeft: 1,
  width: { xs: "90%", md: "50%", lg: "35%" },
  padding: 1,
};

export function CategoriesList({ categoryList }: CategoriesListProps) {
  const [radioList, setRadioList] = useState<ProgramData[]>([]);
  const [selectedOption, setSelectedOption] = useState("");

  const handleOnchange = async (event: SelectChangeEvent<string>) => {
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
      <Typography textAlign='center' variant='h3'>
        Sveriges Radio program
      </Typography>
      <Grid container direction='column' sx={styleGridContainer} spacing={3}>
        <Grid item xs={6}>
          <Typography textAlign='center' variant='h5'>
            Välj en kategori för att se programmen
          </Typography>
        </Grid>
        <Grid item xs='auto'>
          <FormControl fullWidth={true}>
            <InputLabel
              sx={{ backgroundColor: "black", pr: "5px" }}
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
        </Grid>
      </Grid>
      <ProgramsList radioList={radioList} />
    </Box>
  );
}
