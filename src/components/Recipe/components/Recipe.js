import { RecipeList } from './RecipeList/RecipeList';
import recipes from '../recipes.json';
import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout/Layout';

export const Recipe = () => {
  return (
    <Layout>
      <div>Recipe Form</div>
      <RecipeList items={recipes} />
      <div>Image modal</div>
      <GlobalStyle />
    </Layout>
  );
};
