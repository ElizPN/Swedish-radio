import { Grid, SelectChangeEvent, Typography } from "@mui/material";
import Box from "@mui/system/Box";
import { useEffect, useState } from "react";
import { ProgramsList } from "./ProgramsList";
import { fetchRadioData } from "../services/fetchRadioPrograms";
import { genereteId } from "../services/generateId";
import { CategoriesSelect } from "./CategoriesSelect";
import { fetchRadioCategories } from "../services/fetchRadioCategories";

export interface CategoryItem {
  id: number;
  name: string;
}
export interface ProgramData {
  name: string;
  description: string;
  programimage: string;
  programurl: string;
}
interface RadioContainerProps {
  fetchDefaultRadioCategories?: () => Promise<CategoryItem[]>;
}

const styleGridContainer = {
  marginTop: 5,
  marginLeft: 1,
  width: { xs: "90%", md: "50%", lg: "35%" },
  padding: 1,
};

export function RadioContainer({
  fetchDefaultRadioCategories = fetchRadioCategories,
}: RadioContainerProps) {
  const [categoryList, setCategoryList] = useState<CategoryItem[]>([]);
  const [selectedOption, setSelectedOption] = useState("");
  const [radioList, setRadioList] = useState<ProgramData[]>([]);

  useEffect(() => {
    async function fetchData() {
      const categories = await fetchDefaultRadioCategories();
      setCategoryList(categories);
    }
    fetchData();
  }, [fetchDefaultRadioCategories]);

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
      <Typography textAlign='center' variant='h3' sx={{ mt: 5 }}>
        Sveriges Radio program
      </Typography>
      <Grid container direction='column' sx={styleGridContainer} spacing={3}>
        <Grid item xs={6}>
          <Typography textAlign='center' variant='h5'>
            Välj en kategori för att se programmen
          </Typography>
        </Grid>
        <Grid item xs='auto'>
          <CategoriesSelect
            selectedOption={selectedOption}
            handleOnchange={handleOnchange}
            genereteId={genereteId}
            categoryList={categoryList}
          />
        </Grid>
      </Grid>
      <ProgramsList radioList={radioList} />
    </Box>
  );
}
