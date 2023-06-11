import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { ToastContainer, toast } from "react-toastify";

const img_hosting_token=import.meta.env.VITE_IMAGE_UPLOAD_TOKEN;

const AddItemClasses = () => {
  const [axiosSecure] =useAxiosSecure();
  const { register, handleSubmit, formState: { errors } ,reset } = useForm();

  const img_hosting_url =`https://api.imgbb.com/1/upload?key=${img_hosting_token}`
  const onSubmit = (data) => {
    const formData =new FormData();
    formData.append('image',data.image[0])
    fetch(img_hosting_url, {
      method: 'POST',
      body: formData
    })
   .then( res => res.json())
   .then(imgResponse => {
      if(imgResponse.success){
        const imgURL=imgResponse.data.display_url;
        const {name,price,availableSeats,danceCategory,instructor,instructorEmail} =data;
        const danceItem = {
          name,
          price: parseFloat(price),
          availableSeats:parseFloat(availableSeats),
          danceCategory,
          instructor,
          instructorEmail,
          image: imgURL
        };
        console.log(danceItem);
        axiosSecure.post('/classes',danceItem)
        .then(data => {
          console.log('after posting new dance item',data.data);
          if(data.data.insertedId){
            toast.success("Dance item added successfully!");
            reset();
          }
        })
        .catch(() =>{
          toast.error("An error occurred while adding the dance item.");
        })
      }
   })
    // console.log(data);
  };
  // console.log(img_hosting_token);
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
              {...register("name", { required: true })}
            />
            {errors.className && <span className="text-red-500">Class name is required</span>}
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Dance Category</span>
            </label>
            <select className="select select-bordered" defaultValue="Pick One" {...register("danceCategory", { required: true })}>
              <option disabled >Pick one</option>
              <option value="Ballet">Ballet</option>
              <option value="Hip Hop">Hip Hop</option>
              <option value="Salsa">Salsa</option>
              <option value="Contemporary">Contemporary</option>
              <option value="Tap Dance">Tap Dance</option>
              <option value="Breakdance">Breakdance</option>
              <option value="Flamenco">Flamenco</option>
              <option value="TBelly Dance">TBelly Dance</option>
            </select>
            {errors.name && <span className="text-red-500">Dance category is required</span>}
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
              {...register("instructor", { required: true })}
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
            {...register("image", { required: true })}

          />
          <label className="label"></label>
        </div>
        <input className="my-btn mt-10 w-1/3" type="submit" value="Add Item" />
      </form>
      <ToastContainer />
    </div>
  );
};

export default AddItemClasses;
