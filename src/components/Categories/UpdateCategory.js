import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { PlusCircleIcon, PencilAltIcon } from "@heroicons/react/solid";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchCategoryAction,
  updateCategoriesAction,
  deleteCategoriesAction,
} from "../../redux/slices/category/categorySlice";

//Form schema
const formSchema = Yup.object({
  title: Yup.string().required("Title is required"),
});

const UpdateCategory = () => {
  const { id } = useParams();
  console.log(id);
  const dispatch = useDispatch();
  //fetch single category
  useEffect(() => {
    dispatch(fetchCategoryAction(id));
  }, []);

  //get data from store
  const state = useSelector((state) => state?.category);

  const { loading, appErr, serverErr, category, isEdited, isDeleted } = state;

  //formik
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      title: category?.title,
    },
    onSubmit: (values) => {
      //build up the date for update

      //dispath the action
      dispatch(updateCategoriesAction({ title: values.title, id }));
    },
    validationSchema: formSchema,
  });

  //redirect
  if (isEdited || isDeleted) return <Navigate to="/category-list" />;
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#25274D] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <PencilAltIcon className="mx-auto h-12 w-auto" />
          <h2 className="mt-6 text-center text-3xl font-extrabold text-[#AAABB8]">
            Update Category
          </h2>
          <p className="mt-2 text-center text-sm text-[#AAABB8]">
            <p className="font-medium text-[#29648A] hover:text-[#2E9CCA]">
              These are the categories user will select when creating a post
            </p>
            {/* Display err */}
            <div>
              {appErr || serverErr ? (
                <h2 className="text-red-500 text-center text-lg">
                  {serverErr} {appErr}
                </h2>
              ) : null}
            </div>
          </p>
        </div>
        {/* Form */}
        <form onSubmit={formik.handleSubmit} className="mt-8 space-y-6">
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="email-address" className="sr-only">
                Name
              </label>
              {/* Title */}
              <input
                value={formik.values.title}
                onChange={formik.handleChange("title")}
                onBlur={formik.handleBlur("title")}
                type="text"
                autoComplete="text"
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-center focus:z-10 sm:text-sm"
                placeholder="New Category"
              />
              <div className="text-red-400 mb-2">
                {formik.touched.title && formik.errors.title}
              </div>
            </div>
          </div>

          <div>
            <div>
              {/* Submit */}
              {loading ? (
                <button
                  disabled
                  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-gray-600 "
                >
                  <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                    <PlusCircleIcon
                      className="h-5 w-5 text-yellow-500 group-hover:text-indigo-400"
                      aria-hidden="true"
                    />
                  </span>
                  Loading please wait...
                </button>
              ) : (
                <>
                  <button
                    type="submit"
                    className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#464866] hover:bg-[#29648A] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                      <PlusCircleIcon
                        className="h-5 w-5 text-[#2E9CCA] group-hover:text-indigo-400"
                        aria-hidden="true"
                      />
                    </span>
                    Update Category
                  </button>
                  <button
                    onClick={() => dispatch(deleteCategoriesAction(id))}
                    type="submit"
                    className="group mt-2 relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#29648A] hover:bg-[#2E9CCA] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Delete Category
                  </button>
                </>
              )}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateCategory;
