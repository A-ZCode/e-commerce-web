import { FiTrash2 } from 'react-icons/fi';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from '../features/cart/cartSlice';
import { useNavigate } from 'react-router-dom';

export default function BagPanel() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { items } = useSelector((state) => state.cart);

  const bagTotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2);

  return (
    <div className="bg-gray-100 p-6 w-full md:w-[22rem] border-l border-gray-300 flex flex-col justify-between">
      <h2 className="text-xl font-semibold mb-4">Bag</h2>

      {/* Thumbnails */}
      <div className="flex gap-2 mb-6">
        {items.slice(0, 4).map((item) => (
          <img
            key={item.id}
            src={item.image}
            alt={item.name}
            className="w-12 h-12 object-cover rounded"
          />
        ))}
      </div>

      {/* Bag Summary */}
      <div className="text-sm text-gray-700 mb-2">
        <p className="flex justify-between">
          <span>Bag Total:</span>
          <span className="font-semibold">$ {bagTotal}</span>
        </p>
      </div>

      {/* Checkout Button */}
      <button
        onClick={() => navigate('/products')}
        className="w-full bg-black text-white py-3 mt-4 rounded-lg text-center font-medium hover:bg-gray-800"
      >
        Checkout
      </button>
    </div>
  );
}
