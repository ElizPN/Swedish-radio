import { useEffect, useState } from "react";
import { CategoriesList } from "./CategoriesList";

// export const fetchRadioCategories = async () => {
//   const dataUrl =
//     "https://api.sr.se/api/v2/programcategories/?format=JSON&pagination=false";
//   return fetch(dataUrl).then((response) => {
//     return response.json();
//   });
// };

export const fetchRadioCategories = async () => {
  const dataUrl =
    "https://api.sr.se/api/v2/programcategories/?format=JSON&pagination=false";
  const response = await fetch(dataUrl);
  const data = await response.json();
  return data.programcategories;
};

export interface CategoryItem {
  id: number;
  name: string;
}

export function CategoriesController() {
  const [categoryList, setCategoryList] = useState<CategoryItem[]>([]);

  useEffect(() => {
    async function fetchData() {
      const categories = await fetchRadioCategories();

      const categoriesInfo = categories.map((item: CategoryItem) => {
        const categoryItem = { id: item.id, name: item.name };
        return categoryItem;
      });
      setCategoryList(categoriesInfo);
      console.log(categoriesInfo);
    }
    fetchData();
  }, []);

  return <CategoriesList categoryList={categoryList} />;
}
