import { useState } from "react";
import { SlClose } from "react-icons/sl";
import { Link } from "react-router-dom";
import SingleChat from "../../../../ChatApplication/SingleChat/SingleChat";
import usePosts from "../../../../Hooks/usePosts";
import NewsForm from "../../NewsForm/NewsForm";
import AboutMe from "./AboutMe";

import CoverPhoto from "./CoverPhoto";
import EditUserInfo from "./EditUserInfo";
import Education from "./Education";
import FriendLayout from "./MyFriends/FriendLayout";
import MyAllFriends from "./MyFriends/MyFriendAllFriends";
import MyPhotos from "./MyPhotos/MyPhotos";
import MyPosts from "./MyPosts/MyPosts";
import MyTopBlog from "./MyTopBlog/MyTopBlog";
import ProfileInfo from "./ProfileInfo";
import ProfilePicture from "./ProfilePicture";
import UserConnections from "./UserConnections";


const LinkedInProfile = () => {
  const [displayPost, setDisplayPost] = useState(false)
  const [post, setPost] = useState(false)
  const [photo, setPhoto] = useState(false)
  const [options, setOptions] = useState('')
  const [friends, setFriends] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false);
 

  const handleOptionChangeMock = (event) => {
    const select = event.target.value;
    setOptions(select); // Update the selected subject when it changes
  };



  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handlePost = () => {
    setPost(true)
    setPhoto(false)
    setFriends(false)
    setDisplayPost(true)
  }
  const handlePhoto = () => {
    setPost(false)
    setPhoto(true)
    setFriends(false)
    setDisplayPost(true)
  }
  const handleFriends = () => {
    setFriends(true)
    setPost(false)
    setPhoto(false)
    setDisplayPost(true)
  }

  return (
    <>
      <div className="flex justify-between animate-zoom-in gap-5">
        <div className=" md:w-8/12 h-[1550px] overflow-y-auto ">
          <div className="">
            <CoverPhoto />
          </div>
          <div className="">
            <div className="relative border-b-2">
              <div className="flex justify-between items-center gap-5 mb-6 py-3  px-2 rounded-b-2xl">
                <div className="flex gap-5 ">
                  <ProfilePicture />
                  <ProfileInfo />
                </div>

              </div>
              <div className="absolute top-5 right-5"><EditUserInfo></EditUserInfo></div>
            </div>

            <div className="text-justify mb-6  rounded-2xl">
              <AboutMe />
            </div>

            <div className=" ">
              <div className=" flex gap-5 mb-10 border-t-2 shadow-2xl shadow-gray-500">
                <button onClick={() => handlePost()} className="text-xl px-5 py-2">Posts</button>
                <button onClick={() => handlePhoto()} className="text-xl px-5 py-2">Photos</button>
                <button onClick={() => handleFriends()} className="text-xl px-5 py-2">Friends</button>
                <button onClick={openModal} className="text-xl px-5 py-2">Message</button>


                <select className='text-black text-xl outline-none' value={options} onChange={handleOptionChangeMock}>
                  <option className="text-2xl " value="">More..</option>
                  <option value="bookmark">Bookmarks</option>
                  <option value="payments">My Payments</option>
                  <option value=""></option>

                </select>
              </div>
            </div>
          </div>


          <div className="bg-slate-100 ">
            {
              !displayPost && (
                <div>
                  <NewsForm></NewsForm>
                  <MyPosts></MyPosts>
                </div>
              )
            }
            {
              post && (
                <div>
                  <NewsForm></NewsForm>
                  <MyPosts></MyPosts>
                </div>
              )
            }

            {
              photo && (
                <MyPhotos></MyPhotos>
              )
            }
            {
              friends && (
                <FriendLayout></FriendLayout>
              )
            }
          </div>
        </div>
        <div className="w-4/12 hidden md:block border-2   bg-slate-100 rounded-2xl p-4 mb-6 ">
          <div className="">
            <div>
              <UserConnections />
              <div className="bg-white mt-5 p-3 rounded-lg shadow-lg shadow-slate-300">
                <MyPhotos></MyPhotos>
                <button onClick={() => handlePhoto()} className="p-1 my-1 text-xl" >See More...</button>
              </div>
              <div className="bg-white mt-5 p-3 rounded-lg shadow-lg shadow-slate-300">
                <MyAllFriends></MyAllFriends>
                <button onClick={() => handleFriends()} className="p-1 my-1 text-xl" >See More...</button>
              </div>
              <div className="bg-white mt-5 p-3 rounded-lg shadow-lg shadow-slate-300">
              <MyTopBlog></MyTopBlog>
                <button onClick={() => handleFriends()} className="p-1 my-1 text-xl" >See More...</button>
              </div>
            </div>

          </div>

        </div>


        {/* modal start */}
        {isModalOpen && (
          <div className="fixed animate-zoom-in inset-0  flex  mx-auto items-center justify-center z-50">
            <div className="fixed inset-0  bg-black opacity-50"></div>
            <div className="bg-white relative w-11/12 mx-auto p-4 shadow-lg rounded-lg z-50 zoom-in-out-modal">
              <button onClick={closeModal}>

                <SlClose className="text-4xl text-[#3c6e71] absolute top-0 right-0 rounded-full hover:text-white hover:bg-[#3c6e71]" />
              </button>

              {/* Modal content with zoom-in/out animation */}
              <div className="  overflow-y-auto text-black animate-zoom-in">

               <SingleChat></SingleChat>

              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default LinkedInProfile;
