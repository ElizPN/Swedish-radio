import { useEffect, useState } from "react";
import { CategoriesList } from "./CategoriesList";
import { fetchRadioCategories } from "../services/fetchRadioCategories";

export interface CategoryItem {
  id: number;
  name: string;
}

export function CategoriesController() {
  const [categoryList, setCategoryList] = useState<CategoryItem[]>([]);

  useEffect(() => {
    async function fetchData() {
      const categories = await fetchRadioCategories();
      setCategoryList(categories);
    }
    fetchData();
  }, []);

  return <CategoriesList categoryList={categoryList} />;
}
