import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const ProductItem = ({ Id, Logo, Name }) => {
  return (
    <Link to={`/quiz/${Id}`}  className='text-gray-700 cursor-pointer ' >
      <div className="border p-4 rounded-lg shadow-md cursor-pointer">
        <img src={Logo} className="mx-auto mb-4 hover:scale-110 transition ease-in-out" />
        <p className="text-center text-lg font-semibold">{Name}</p>
      </div>
    </Link>
  );
};

export default ProductItem;
