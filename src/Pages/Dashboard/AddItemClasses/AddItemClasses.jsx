import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";

const AddItemClasses = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    
    console.log(data);
  };

  return (
    <div>
      <Helmet>
        <title>Add Item Classes</title>
      </Helmet>
      <h2 className="text-3xl text-center">Add a New Classes</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex gap-5">
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text font-semibold">Class name*</span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
              {...register("className", { required: true })}
            />
            {errors.className && <span className="text-red-500">Class name is required</span>}
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Dance Category</span>
            </label>
            <select className="select select-bordered" {...register("danceCategory", { required: true })}>
              <option disabled value="">Pick one</option>
              <option value="Ballet">Ballet</option>
              <option value="Hip Hop">Hip Hop</option>
              <option value="Salsa">Salsa</option>
              <option value="Contemporary">Contemporary</option>
              <option value="Tap Dance">Tap Dance</option>
              <option value="Breakdance">Breakdance</option>
              <option value="Flamenco">Flamenco</option>
              <option value="TBelly Dance">TBelly Dance</option>
            </select>
            {errors.danceCategory && <span className="text-red-500">Dance category is required</span>}
          </div>
        </div>
        <div className="flex gap-5">
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text font-semibold">Instructor email*</span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
              {...register("instructorEmail", { required: true })}
            />
            {errors.instructorEmail && <span className="text-red-500">Instructor email is required</span>}
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text font-semibold">Price*</span>
            </label>
            <input
              type="number"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
              {...register("price", { required: true })}
            />
            {errors.price && <span className="text-red-500">Price is required</span>}
          </div>
        </div>
        <div className="flex gap-5">
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text font-semibold">Instructor name*</span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
              {...register("instructorName", { required: true })}
            />
            {errors.instructorName && <span className="text-red-500">Instructor name is required</span>}
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text font-semibold">Available seats*</span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
              {...register("availableSeats", { required: true })}
            />
            {errors.availableSeats && <span className="text-red-500">Available seats is required</span>}
          </div>
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Image*</span>
          </label>
          <input
            type="file"
            className="file-input file-input-bordered w-full max-w-xs"
          />
          <label className="label"></label>
        </div>
        <input className="my-btn mt-10 w-1/3" type="submit" value="Add Item" />
      </form>
    </div>
  );
};

export default AddItemClasses;
