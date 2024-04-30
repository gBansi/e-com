import React, { useEffect } from "react";
import { PhotoIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import { useDispatch, useSelector } from "react-redux";
import {
  clearSelectedProduct,
  createProductAsync,
  fetchProductByIdAsync,
  selectProductById,
  selectcategories,
  updateProductAsync,
} from "../../product-list/ProductSlice";
import { useForm } from "react-hook-form";
import { checkUserAsync } from "../../auth/AuthSlice";
import { CgPassword } from "react-icons/cg";
import { useParams } from "react-router-dom";

function ProductForm() {
  const categories = useSelector(selectcategories);
  const dispatch = useDispatch();
  const params = useParams();
  const selectedProduct = useSelector(selectProductById);
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm();
  useEffect(() => {
    if (params.id) {
      dispatch(fetchProductByIdAsync(params.id));
    } else {
      dispatch(clearSelectedProduct());
    }
  }, [params.id, dispatch]);
  useEffect(() => {
    if (selectedProduct && params.id) {
      setValue("title", selectedProduct.title);
      setValue("description", selectedProduct.description);
      setValue("price", selectedProduct.price);
      setValue("discountPercentage", selectedProduct.discountPercentage);
      setValue("rating", selectedProduct.rating);
      setValue("stock", selectedProduct.stock);
      setValue("brand", selectedProduct.brand);
      setValue("category", selectedProduct.category);
      setValue("thumbnail", selectedProduct.thumbnail);
      setValue("image1", selectedProduct.images[0]);
      setValue("image2", selectedProduct.images[1]);
      setValue("image3", selectedProduct.images[2]);
    }
  }, [selectedProduct, params.id, setValue]);

  const handleDelete = () => {
    const product = {...selectedProduct};
    product.deleted = true;
    dispatch(updateProductAsync(product));
  };
  return (
    <div>
      <form
        noValidate
        onSubmit={handleSubmit((data) => {
          console.log(data);
          const product = { ...data };
          product.images = [
            product.image1,
            product.image2,
            product.image3,
            product.thumbnail,
          ];

          delete product["image1"];
          delete product["image2"];
          delete product["image3"];
          product.price = +product.price;
          product.stock = +product.stock;
          product.discountPercentage = +product.discountPercentage;
          console.log(product);
          if (params.id) {
            product.id = params.id;
            product.rating = selectedProduct.rating || 0;
            dispatch(updateProductAsync(product));
            reset();
          } else {
            dispatch(createProductAsync(product));
            reset();
          }
        })}
      >
        <div className="space-y-12 bg-white p-12">
          <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-base font-semibold leading-7 text-gray-900">
              Add Product
            </h2>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-4">
                <label
                  htmlFor="title"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Product Name
                </label>
                <div className="mt-2">
                  <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 ">
                    <input
                      type="text"
                      {...register("title", { require: "tittle is required" })}
                      id="title"
                      className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>

              <div className="col-span-full">
                <label
                  htmlFor="description"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Description
                </label>
                <div className="mt-2">
                  <textarea
                    id="description"
                    {...register("description", {
                      require: "description is required",
                    })}
                    rows={3}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    defaultValue={""}
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="price"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  price
                </label>
                <div className="mt-2">
                  <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 ">
                    <input
                      type="number"
                      {...register("price", { require: "price is required" })}
                      id="price"
                      className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="discountPercentage"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Discount
                </label>
                <div className="mt-2">
                  <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 ">
                    <input
                      type="number"
                      name="discountPercentage"
                      {...register("discountPercentage", {
                        require: "discountPercentage is required",
                      })}
                      className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="stock"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  stock
                </label>
                <div className="mt-2">
                  <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 ">
                    <input
                      type="number"
                      {...register("stock", { require: "stock is required" })}
                      id="stock"
                      className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="category"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  categories
                </label>
                <div className="mt-2">
                  <select>
                    <option value="">--choose category--</option>
                    {categories &&
                      categories.map((category) => (
                        <option key={category.value} value={category.value}>
                          {category.label}
                        </option>
                      ))}
                  </select>
                </div>
              </div>

              <div className="sm:col-span-4">
                <label
                  htmlFor="thumbnail"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Thumbnail
                </label>
                <div className="mt-2">
                  <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 ">
                    <input
                      type="text"
                      {...register("thumbnail", {
                        require: "thumbnail is required",
                      })}
                      id="thumbnail"
                      className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>
              <div className="sm:col-span-4">
                <label
                  htmlFor="image1"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Image 1
                </label>
                <div className="mt-2">
                  <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 ">
                    <input
                      type="text"
                      {...register("image1", { require: "image1 is required" })}
                      id="image1"
                      className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>
              <div className="sm:col-span-4">
                <label
                  htmlFor="image2"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Image 2
                </label>
                <div className="mt-2">
                  <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 ">
                    <input
                      type="text"
                      {...register("image2", { require: "image2 is required" })}
                      id="image2"
                      className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>
              <div className="sm:col-span-4">
                <label
                  htmlFor="image3"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Image 3
                </label>
                <div className="mt-2">
                  <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 ">
                    <input
                      type="text"
                      {...register("image3", { require: "image3 is required" })}
                      id="image3"
                      className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-end gap-x-6">
          <button
            type="button"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Cancel
          </button>
          {selectedProduct && (
            <button
              onClick={handleDelete}
              className="rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Delete
            </button>
          )}
          <button
            type="submit"
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
}

export default ProductForm;
