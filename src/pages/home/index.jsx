import { useContext } from "react";
import { GlobalContext } from "../../context/index";
import RecipeItem from "../../components/recipe-item";

export default function Home() {
  const { recipeList, loading } = useContext(GlobalContext);

  if (loading) {
    return <div>Loading...Please wait!</div>;
  }
  return (
    <div className="py-8 container mx-auto flex-wrap flex justify-center gap-10">
      {recipeList && recipeList.length > 0 ? (
        recipeList.map((item) => <RecipeItem item={item} />)
      ) : (
        <div>
          <p className="lg:text-4xl text-x1 text-center text-black font-extralight">
            Nothing to show. Please seatch something
          </p>
        </div>
      )}
    </div>
  );
}
