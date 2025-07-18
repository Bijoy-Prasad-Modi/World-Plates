import {
  BannerSlider,
  CategorySlider,
  MealSlider,
  Title,
} from "../../components/common";
import { pattern_one } from "../../utils/images";

const HomePage = () => {
  return (
    <main className="home-page custom-min-h pt-[4px]">
      <BannerSlider />
      <section
        className="categories"
        style={{
          background: `url('${pattern_one}') center/cover no-repeat`,
        }}
      >
        <div className="container">
          <Title subTitle="Choose a Category" mainTitle="Recipe Categories" />
        </div>
        <CategorySlider />
      </section>
      <section className="meals">
        <div className="container">
          <Title subTitle="Get Meal Ready" mainTitle="Recipe Meals" />
          <MealSlider />
        </div>
      </section>
    </main>
  );
};

export default HomePage;
