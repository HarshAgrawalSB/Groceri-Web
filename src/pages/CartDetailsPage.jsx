import React, { useEffect, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectToken } from "../redux/slices/tokenSlice";
import { selectCartItems, removeItemFromCart, clearCart } from "../redux/slices/cartSlice";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import EMPTYCART from "../assets/empty-cart.webp";

const CartDetailsPage = () => {
  const token = useSelector(selectToken);
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      toast.error("Sign in or create an account to view Cart");
      navigate("/");
    }
  }, [token, navigate]);

  const calculateTotal = useMemo(() => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  }, [cartItems]);

  const handleRemoveItem = (name) => {
    dispatch(removeItemFromCart(name));
    toast.success("Item removed from cart");
  };

  const handleCheckout = () => {
    toast.success("Order Placed")
    dispatch(clearCart())
    navigate('/')
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Cart Details</h1>

      {cartItems.length <= 0 && (
        <div className="text-center">
          <img src={EMPTYCART} alt="empty-cart" className="mx-auto" />
          <h1 className="my-3 text-xl font-medium">No products in cart</h1>
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {cartItems.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg overflow-hidden"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-40 h-40 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">{item.name}</h2>
              <p className="text-gray-600 mb-2">Quantity: {item.quantity}</p>
              <p className="text-gray-600 mb-2">
                Price:<span className="mx-0.5">&#8377;</span>
                {item.price.toFixed(2)}
              </p>
              <p className="text-gray-600 mb-2">
                Total: <span className="mx-0.5">&#8377;</span>
                {(item.price * item.quantity).toFixed(2)}
              </p>
              <button
                onClick={() => handleRemoveItem(item.name)}
                className="mt-2 px-4 py-2 bg-red-500 text-white rounded"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 text-xl font-bold">
        Total: <span className="mx-0.5">&#8377;</span>
        {calculateTotal.toFixed(2)}
      </div>

      <button onClick={handleCheckout} className="mt-8 text-xl font-bold border-2 border-[#02B290] hover:bg-[#02B290] hover:text-white px-2 ">
        Checkout
      </button>
    </div>
  );
};

export default CartDetailsPage;
