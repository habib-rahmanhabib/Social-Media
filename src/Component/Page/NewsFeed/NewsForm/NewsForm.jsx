/* eslint-disable react/prop-types */ //
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { SlClose } from 'react-icons/sl';
import useAuth from "../../../../Hooks/useAuth";




const NewsForm = () => {
  const {user} = useAuth();
  console.log(user);
    // const { user, btnLoading } = useAuth();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isOpen, setIsOpen] = useState("questions")
   
    const { register, handleSubmit } = useForm();
    const ref = useRef();
    // post form submit function 
    const onSubmit = data => {
        // const status = ref.current.value;
        // const date = new Date();
        // const react = [];
        // const comment = [];
        // const { category, text } = data;
        // const newPost = { status, date, category, text, userEmail: user.email, react, comment, userPhoto: userDetails?.photoURL, userName: userDetails?.displayName }
        // axiosSecure.post('/posts', newPost)
        //     .then(data => {
        //         if (data) {
        //             Swal.fire(
        //                 'Success!',
        //                 'Your Questions Uploaded.',
        //                 'success'
        //             )
        //             refetch()
        //             setIsModalOpen(!isModalOpen)
        //         }
        //     })
        //     .catch(err => console.log(err.message))
    }


    const handleBlogSubmit = (e) => {
       
    }

    return (
        <div  className=" py-3 lg:mt-2 mt-0 border border-[#3c6e71] rounded-lg lg:my-3 ">
            {/* main form  */}

            <div className="mt-2 py-4 rounded-lg animate-zoom-in">
                <div className="flex space-x-2 mx-4">
                    <img src={user?.photoURL} alt="user photo" className="w-12 h-12 rounded-full my-2" />
                    <input type="text" name="" id="" onClick={() => setIsModalOpen(true)} className="text-black w-full border border-spacing-3 rounded-xl px-2" placeholder="What's on your mind?" />
                </div>
            </div>

            {/* modal body  */}

            {isModalOpen && (
                <div className={` fixed top-1/3 mt-20 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-6 rounded-lg shadow-lg border-2 border-[#3c6e71] sm:w-full lg:w-2/5 bg-white`}>
                    <button onClick={() => setIsModalOpen(false)} className="px-3 py-1 rounded absolute right-3 top-2">
                        <SlClose className="text-2xl hover:text-[#ad2831]" />
                    </button>
                    {/* modal two sections start  */}

                    <div className="flex my-5 gap-5 animate-zoom-in">

                        <button onClick={() => setIsOpen("questions")} className="text-white font-[Poppins] bg-[#3c6e71] hover:bg-[#335c67] w-full duration-700 px-16 py-2 rounded-lg"> Creat Post </button>

                        <button onClick={() => setIsOpen("blogs")} className="text-white font-[Poppins] bg-[#3c6e71] hover:bg-[#335c67] w-full duration-700 px-16 py-2 rounded-lg">Create a Blog</button>

                    </div>

                    {/* modal two sections end  */}

                    {/* display  post contend*/}

                    <div className="animate-zoom-in">
                        <div className="flex space-x-2">
                            <img src={user?.photoURL} alt="user photo" className="w-12 h-12 rounded-full my-2" />
                            <div>
                                <p className="text-lg font-[Poppins] font-bold pt-2">{user?.displayName}</p>
                                <select ref={ref} className="text-black font-[Poppins] w-full border rounded-md">
                                    <option>Friends</option>
                                    <option>Public</option>
                                    <option>Only me</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    {/* questions form start */}
                    {isOpen == "questions" ? <form onSubmit={handleSubmit(onSubmit)} className="mt-8 animate-zoom-in">
                        <div className="my-2 w-1/2 font-[Poppins]">
                            <p className="text-md font-semibold mb-2">Select Category: </p>
                            <select required {...register("category")} className="text-black w-full border rounded-md">
                                <option>News & Updates</option>
                                <option>Creative Arts</option>
                                <option>Lifestyle & Hobbies</option>
                                <option>Wellness & Self-Care</option>
                                <option>Technology & Innovation</option>
                                <option>Entertainment Buzz</option>
                                <option>Science & Exploration</option>
                                <option>Travel & Adventure</option>
                                <option>Food & Cuisine</option>
                                <option>Personal Stories</option>
                                <option>Fashion & Style</option>
                                <option>Sports & Fitness</option>
                                <option>Parenting & Family</option>
                                <option>Education & Learning</option>
                            </select>
                        </div>
                        <textarea rows="4" {...register("text")} type="text" id="" className="text-black w-full border border-spacing-2 rounded-xl px-2 py-2" placeholder="What's on your mind?" required></textarea><br />
                        <div className="mt-8">
                            {/* fix submit button */}
                            <button className="bg-green-800 text-white rounded-md py-2 px-5"> Post</button>
                        </div>
                    </form> :
                        // blog  form start
                        <form className="mt-8" onSubmit={handleBlogSubmit}>
                            <textarea rows="4" type="text" id="" className="w-full border border-spacing-2 rounded-xl px-2 py-2" name="blogText" placeholder="What's on your mind?" required></textarea><br />
                            <div className="mt-4">
                                <input type="file"
                                    id="fileInput"
                                    name="fileInput"
                                    className="text-sm text-grey-500 file:mr-5 file:py-3 file:px-10 file:rounded-lg file:border-0 file:text-md file:font-semibold file:text-black file:bg-gradient-to-r file:from-[#3c6e71] file:to-[#335c67] hover:file:cursor-pointer hover:file:opacity-90 duration-500 py-5 w-full" />
                            </div>
                            <div className="mt-8">
                                {/* fix submit button */}
                              <button className="bg-green-800 text-white rounded-md py-2 px-5"> Post Blog</button>
                            </div>
                        </form>}
                    {/* blog from end */}
                </div>
            )}
        </div>
    );
};

export default NewsForm;