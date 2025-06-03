import { FiShoppingBag } from 'react-icons/fi';
import { useDispatch } from 'react-redux';
import { addItem } from '../features/cart/cartSlice';
import { Link } from 'react-router-dom';

export default function ProductCard({ product }) {
  const dispatch = useDispatch();
  const [firstLine, secondLine] = product.name.split(/ - (.*)/s);

  const handleAddToBag = () => {
    dispatch(addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image
    }));
  };

  return (
    <div className="group bg-transparent rounded-lg overflow-hidden w-64 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
      <Link to={`/product/${product.id}`}>
        <div className="bg-white rounded-lg p-4 flex justify-center transition-transform duration-300 group-hover:scale-[1.02]">
          <img 
            src={product.image} 
            className="h-48 object-contain transition-transform duration-500 group-hover:scale-105" 
            alt={product.name}
          />
        </div>
      </Link>

      <div className="p-4 bg-white flex flex-col gap-2">
        <div>
          <h2 className="text-md font-semibold text-gray-900">{firstLine}</h2>
          {secondLine && <p className="text-sm text-gray-500">{secondLine}</p>}
        </div>
        <div className="flex justify-between items-center mt-2">
          <span className="text-lg font-bold text-indigo-600">${product.price}</span>
          <button
            className="text-indigo-600 hover:text-indigo-800"
            onClick={handleAddToBag}
          >
            <FiShoppingBag size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
