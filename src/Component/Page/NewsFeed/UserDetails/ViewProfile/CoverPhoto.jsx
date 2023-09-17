import React from "react";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import useUser from "../../../../Hooks/useUser";

const CoverPhoto = () => {
  const [userDetails, refetch] = useUser();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [axiosSecure] = useAxiosSecure();


  const onSubmit = (data) => {
    const formData = new FormData();

    formData.append('image', data.coverPhoto[0]);
    const image_hosting_token = import.meta.env.VITE_Image_Upload_Token;
    const image_hosting_url = `https://api.imgbb.com/1/upload?key=${image_hosting_token}`;
    fetch(image_hosting_url, {
      method: "POST",
      body: formData
    })
      .then(res => res.json())
      .then(imageResponse => {
        if (imageResponse.success) {
          // image url 
          const coverPhotoURL = imageResponse?.data?.display_url;
          const data = { coverPhotoURL, email: userDetails?.email }
          console.log(data);
          axiosSecure.patch("/user/coverPhoto", data)
            .then(data => {
              console.log(data)
              refetch();
            })
            .catch(err => console.log(err.message))

        }
      })
  }


  return (
    <div className="relative">
      <img className="w-full h-52 md:h-96 " src="https://scontent.fdac96-1.fna.fbcdn.net/v/t39.30808-6/373322800_1711076662664322_3774419176113031779_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=52f669&_nc_eui2=AeEWZneQSlUaEXnWiQRujq_5jDljgiWESW-MOWOCJYRJbyVJIwL2zTpLydzgdYCkgBJY0CkNpoXYhSvkBAL30R8W&_nc_ohc=_q99DOX9hiAAX957QzM&_nc_zt=23&_nc_ht=scontent.fdac96-1.fna&oh=00_AfCpjwVTOUzwQ-hP-U_v7qfWRkk7_4vzV65zylaT1hrMkQ&oe=650A32C3" alt="" />
      {userDetails?.coverPhotoURL &&
        <img
          src={userDetails?.coverPhotoURL}
          alt="Cover"
          className="w-full md:h-48 object-cover rounded-t-2xl"
        />}
      {!userDetails?.coverPhotoURL && <input className="absolute  top-1 text-2xl" type="file" {...register("coverPhoto")} onChange={handleSubmit(onSubmit)}></input>}
    </div>
  );
};

export default CoverPhoto;
