import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchLoggedInUserOrderAsync,
  selectUserInfo,
  selectUserInfoStatus,
  selectUserOrders,
} from "../userSlice";
import { Grid } from "react-loader-spinner";
import { selectLoggedInUser } from "../../auth/AuthSlice";
import { Link } from "react-router-dom";

export default function UserOrders() {
  const dispatch = useDispatch();
  const orders = useSelector(selectUserOrders);
  const status = useSelector(selectUserInfoStatus);
  const user = useSelector(selectLoggedInUser);
  const [open, setOpen] = useState(true);

  useEffect(() => {
    dispatch(fetchLoggedInUserOrderAsync(user.id));
  }, []);

  return (
    <div>
      {orders.map((order) => (
        <div>
          <div className="mx-auto max-w-7xl mt-12 bg-white px-4 sm:px-6 lg:px-8">
            <div className=" border-t border-gray-200 px-4 py-6 sm:px-6">
              <h1 className="font-bold text-4xl my-5 text-gray-900 tracking-tight">
                Order # {order.id}
              </h1>
              <h3 className="font-bold text-xl my-5 text-red-900 tracking-tight">
                Order Status : {order.status}
              </h3>
              <div className="flow-root">
                <ul role="list" className="-my-6 divide-y divide-gray-200">
                  {order.items.map((item) => (
                    <li key={item.id} className="flex py-6">
                      <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                        <img
                          src={item.thumbnail}
                          alt={item.title}
                          className="h-full w-full object-cover object-center"
                        />
                      </div>

                      <div className="ml-4 flex flex-1 flex-col">
                        <div>
                          <div className="flex justify-between text-base font-medium text-gray-900">
                            <h3>
                              <a href={item.href}>{item.title}</a>
                            </h3>
                          </div>
                          <p className="mt-1 text-sm text-gray-500">
                            {item.brand}
                          </p>
                        </div>
                        <div className="flex flex-1 items-end justify-between text-sm">
                          <label
                            htmlFor="quantity"
                            className="text-gray-900 mr-5 block font-medium text-sm"
                          >
                            {" "}
                            Qty : {item.quantity}
                          </label>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
              <div className="flex justify-between my-2 text-base font-medium text-gray-900">
                <p>Subtotal</p>
                <p>$ {order.totalAmount}</p>
              </div>
              <div className="flex justify-between my-2 text-base font-medium text-gray-900">
                <p>Total Items in Cart</p>
                <p>{order.totalItems} items</p>
              </div>
              <p className="mt-0.5 text-sm text-gray-500">
                Shipping and taxes calculated at checkout.
              </p>
              <div className="py-3 px-6 text-center">
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
