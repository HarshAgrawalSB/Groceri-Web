/* eslint-disable no-unused-vars */
/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
import React, {
  forwardRef,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import { createPortal } from "react-dom";
import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import { IoIosHeartEmpty } from "react-icons/io";
import { PiShareFatLight } from "react-icons/pi";
import { LiaTagSolid } from "react-icons/lia";
import { GrToast } from "react-icons/gr";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectEmail, selectToken } from "../../redux/slices/tokenSlice";
import { addItemToCart } from "../../redux/slices/cartSlice";

const ProductModal = forwardRef(({ item }, ref) => {
  const [quantity, setQuantity] = useState(0);
  const [selectedImage, setSelectedImage] = useState(item?.images[0]);

  const dispatch = useDispatch();

  const dialog = useRef();
  useImperativeHandle(ref, () => {
    return {
      open: () => {
        dialog.current.showModal();
      },
    };
  });

  const handleQuantity = (operator) => {
    setQuantity((prev) => {
      if (prev == 0 && operator == -1) {
        return prev;
      }
      return (prev += operator);
    });
  };

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleCart = (product) => {
    // const prevCart = JSON.parse(localStorage.getItem("cart")) || { items: [] };

    // const existingItemIndex = prevCart.items.findIndex(
    //   (item) => item.name === product.name
    // );

    // if (existingItemIndex !== -1) {
    //   const prevQuantity = prevCart.items[existingItemIndex].quantity;
    //   prevCart.items[existingItemIndex].quantity += quantity - prevQuantity;

    //   if (prevCart.items[existingItemIndex].quantity < 0) {
    //     prevCart.items[existingItemIndex].quantity = 0;
    //   }
    // } else {
    //   prevCart.items.push({
    //     name: product.name,
    //     price: product.price,
    //     image: product.images[0],
    //     category: product.category.name,
    //     quantity: quantity,
    //   });
    // }

    // if (quantity === 0) {
    //   toast.error("Quantity is Zero");
    // } else {
    //   localStorage.setItem("cart", JSON.stringify(prevCart));
    //   dialog.current.close();
    // }

    // console.log(prevCart);

    if (quantity === 0) {
      toast.error("Quantity is Zero");
    } else {
      const newItem = {
        name: product.name,
        price: product.price,
        image: product.images[0],
        category: product.category.name,
        quantity: quantity,
      };

      dispatch(addItemToCart(newItem));
      dialog.current.close();
    }
  };

  return createPortal(
    <>
      <dialog
        id="prod-modal"
        ref={dialog}
        className="p-10   md:w-[90%]  w-[90%] h-[80%] rounded-lg"
      >
        <div
          onClick={() => {
            dialog.current.close();
          }}
          className="flex justify-end text-xl font-semibold cursor-pointer"
        >
          X
        </div>

        <div className="grid md:grid-cols-2  ">
          <div className="">
            <div className="md:max-w-screen-lg mx-auto flex items-center">
              <div className="grid grid-rows-3 gap-4 w-32">
                {item?.images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`Product ${index + 1}`}
                    className={`cursor-pointer rounded-lg h-20 w-20 border ${
                      selectedImage === image
                        ? "border-blue-500"
                        : "border-gray-300"
                    }`}
                    onClick={() => handleImageClick(image)}
                  />
                ))}
              </div>

              <div className=" md:mx-16">
                <img
                  src={selectedImage}
                  alt="Selected Product"
                  className="max-w-full h-72 mx-auto rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
          <div className="md:px-5 w-[70%] md:w-auto">
            <div className="text-3xl font-medium">{item?.name}</div>
            <div className="text-xl font-medium py-2">
              Price: <span className="mx-0.5">&#8377;</span>
              {item?.price}
            </div>

            <div className="bg-gray-300 md:w-10/12 my-3 py-4 flex justify-center items-center ">
              <button
                className="mx-8 hover:bg-slate-400 hover:p-1"
                onClick={() => {
                  handleQuantity(-1);
                }}
              >
                <FaMinus />
              </button>
              <div className=" mx-5 text-lg font-semibold">{quantity}</div>
              <button
                className="mx-8 hover:bg-slate-400 hover:p-1"
                onClick={() => {
                  handleQuantity(+1);
                }}
              >
                <FaPlus />
              </button>
            </div>

            <div className="md:w-10/12 bg-[#02B290] my-4 text-center rounded-md ">
              <button
                onClick={() => {
                  handleCart(item);
                }}
                className="py-3 text-white font-semibold text-xl "
              >
                Add to cart
              </button>
            </div>

            <div className="flex  items-center">
              <button className="flex justify-around items-center border px-12 py-4 mr-5">
                <IoIosHeartEmpty className="w-7 h-7" />

                <span className="mx-3"> Wishlist</span>
              </button>
              <button className="flex justify-between items-center border px-12 py-4 ml-10">
                <PiShareFatLight className="w-7 h-7" />

                <span className="mx-3"> Share</span>
              </button>
            </div>

            <div className="flex items-center my-4">
              <LiaTagSolid className="w-5 h-5 mt-1 mx-2" />
              <span className="text-gray-400 text-lg">Tags:</span>

              <div className="flex items-center ">
                <div className="border border-b-2 p-1.5 mx-2 rounded-md">
                  {item.category.name}
                </div>
                <div className="border border-b-2 p-1.5 mx-2 rounded-md">
                  {item.subcategory.name}
                </div>
              </div>
            </div>

            <div className="text-md w-10/12 py-3">
              {item?.description.split(".")[0]}..
              <button className=" text-blue-400">Read More</button>
            </div>
          </div>
        </div>
      </dialog>
    </>,
    document.getElementById("prod-modal")
  );
});

export default ProductModal;
