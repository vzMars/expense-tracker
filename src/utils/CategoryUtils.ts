import { CategoryType } from '../types';

export const categoriesByType = (
  categories: CategoryType[],
  categoryType: string
) => {
  return categories.filter((category) => category.type === categoryType);
};
