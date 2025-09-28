import React, { useContext } from "react"
import { storeContex } from "../../Context/StoreContextProvider"
import { food_list } from "../../assets/assets"
import { useNavigate } from "react-router-dom";

function Cart(){
  const navigate = useNavigate();

    const { cartItem, food_list, url,removeFromCart, getCartTotalAmount } =
      useContext(storeContex);

    return (
      <>
        <div className="mt-[100px] w-[80%] place-self-center">
          <div className="cart-item">
            <div className="grid grid-cols-[repeat(auto-fit,minmax(10px,1fr))] text-gray-600 text-center text-xl ">
              <p>Item</p>
              <p>Title</p>
              <p>Price</p>
              <p>Quantity</p>
              <p>Total</p>
              <p>Remove</p>
            </div>
            <br />
            <hr />
            {food_list.map((item, index) => {
              if (cartItem[item._id] > 0) {
                return (
                  <div key={index}>
                    <div
                      key={item._id}
                      className="grid grid-cols-[repeat(auto-fit,minmax(10px,1fr))] text-black text-center my-[10px] rounded-2xl"
                    >
                      <img className="w-[50px]" src={url+"/image/"+item.image} alt="" />
                      <p>{item.name}</p>
                      <p>${item.price}</p>
                      <p>{cartItem[item._id]}</p>
                      <p>${item.price * cartItem[item._id]}</p>
                      <p
                        className="cursor-pointer"
                        onClick={() => removeFromCart(item._id)}
                      >
                        x
                      </p>
                    </div>
                    <hr />
                  </div>
                );
              }
            })}
          </div>
          <div className="mt-[80px] flex justify-between gap-[20px] ">
            <div className="flex flex-1 flex-col gap-[20px]">
              <h2>Cart Totals</h2>
              <div>
                <div className="flex justify-between text-[#555]">
                  <p>subtotal</p>
                  <p>${getCartTotalAmount()}</p>
                </div>
                <hr />
                <div className="flex justify-between text-[#555]">
                  <p>Delivery Fee</p>
                  <p>${getCartTotalAmount() === 0 ? 0 : 2}</p>
                </div>
                <hr />
                <div className="flex justify-between text-[#555]">
                  <p>Total</p>
                  <p>${getCartTotalAmount()===0?0:getCartTotalAmount() + 2}</p>
                </div>
              </div>
              <button
                className="border-none text-white bg-orange-600 py-[12px] rounded cursor-pointer "
                onClick={() => navigate("/order")}
              >
                PROCEED TO CHECKOUT
              </button>
            </div>
            <div className=" text-[#555] ">
              <div>
                <div>
                  <p>If you have a promo code,Enter it here</p>
                  <div
                    className="mt-[10px] flex justify-between items-center bg-[#eaeaea]
                            rounded-2xl"
                  >
                    <input
                      className="bg-transparent border-none outline-none pl-[10px] "
                      type="text"
                      placeholder="promo code"
                      name=""
                      id=""
                    />
                    <button
                      className="w-10vw px-[12px] py-[5px]
                                bg-black border-none text-white "
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}
export default Cart