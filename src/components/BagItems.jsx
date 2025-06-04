import { useSelector, useDispatch } from 'react-redux';
import { updateQuantity, removeItem } from '../features/cart/cartSlice';
import { FiTrash2 } from 'react-icons/fi';

export default function BagItems() {
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.cart);

  return (
    <div className="flex flex-col gap-4">
      {items.map((item) => (
        <div key={item.id} className="bg-white shadow-md rounded-lg p-4 flex gap-4 items-center">
          <img src={item.image} alt={item.name} className="w-24 h-24 object-contain" />
          <div className="flex-1">
            <h3 className="font-semibold">{item.name}</h3>
            <p className="text-gray-500 text-sm">{item.color}</p>
            <p className="text-sm text-gray-600">Lorem ipsum dolor sit amet...</p>
            <p className="text-green-600 text-sm mt-1">4.5/5</p>
            <p className="font-semibold mt-1">R {item.price}</p>
          </div>

          {/* Quantity controls */}
          <div className="flex items-center gap-2">
            <button
              onClick={() =>
                dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }))
              }
              className="px-2 py-1 bg-gray-200 rounded"
            >
              -
            </button>
            <span>{item.quantity}</span>
            <button
              onClick={() =>
                dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }))
              }
              className="px-2 py-1 bg-gray-200 rounded"
            >
              +
            </button>
          </div>

          {/* Delete */}
          <button onClick={() => dispatch(removeItem(item.id))} className="ml-2 text-gray-500">
            <FiTrash2 />
          </button>
        </div>
      ))}
    </div>
  );
}
