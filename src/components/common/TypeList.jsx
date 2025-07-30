import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const TypeList = ({ typeList, typeId }) => {
  return (
    <div className="types-list">
      {typeList.map((typeItem, idx) => (
        <Link
          to={`/recipes/${typeId}/${typeItem.type}`}
          className="types-item group relative overflow-hidden"
          key={idx}
        >
          <img src={typeItem.image} alt={typeItem.type}/>
          <span className="absolute inset-0 flex items-center justify-center text-white z-10 text-2xl tracking-wider font-handlee opacity-0 group-hover:opacity-100">
            {typeItem.type}
          </span>
        </Link>
      ))}
    </div>
  );
};

export default TypeList;

TypeList.propTypes = {
  typeList: PropTypes.array,
  typeId: PropTypes.string,
};
