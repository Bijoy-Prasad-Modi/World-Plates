import { useParams } from "react-router-dom";
import { food_bg_two } from "../../utils/images";
import { Title } from "../../components/common";

const TypeListPage = () => {
  const { typeId } = useParams();

  

  return (
    <main
      className="type-list-page custom-min-h pt-[4px]"
      style={{
        background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('${food_bg_two}') center/cover no-repeat fixed`,
      }}
    >
      <div className="container">
        <Title subTitle="Get Meal Ready" mainTitle={`Recipe ${typeId}s`} />
      </div>
    </main>
  );
};

export default TypeListPage;