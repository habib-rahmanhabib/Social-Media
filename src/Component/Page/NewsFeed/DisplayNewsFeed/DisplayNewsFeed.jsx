/* eslint-disable react/prop-types */ //

import { useState } from 'react';
import { AiFillHeart } from 'react-icons/ai';
import { FaComment, FaEllipsisH, FaHistory, FaLock, FaUserFriends } from 'react-icons/fa';



import { SlClose, SlGlobe } from 'react-icons/sl';
import useAuth from '../../../../Hooks/useAuth';






const DisplayNewsFeed = ({ query }) => {
    const {user} = useAuth();
    const [isOpen, setIsOpen] = useState(null);
    const [hide, setHide] = useState(false);
    const [isOpenModal, setIsOpenModal] = useState(false);
    const [editPost, setEditPost] = useState({});


    const setIsOpenPostActions = (id) => {
        if (isOpen) {
            setIsOpen(null)
        }
        else {
            setIsOpen(id)
        }
    };

    const EditPostModalOpen = (post) => {
        setIsOpenModal(!isOpenModal)
        setEditPost(post);
    };

    // copy url function
    const handleCopyClick = (id) => {
        const currentURL = window.location.href;
        const tempInput = document.createElement('input');
        document.body.appendChild(tempInput);
        tempInput.value = `${currentURL}/${id}`;
        tempInput.select();
        document.execCommand('copy');
        alert("Link copy done")
    };

    //   end  copy url

    return (
        <div className="min-h-screen">
            {
               <div
                        className={`mb-3  rounded-lg border border-[#3c6e71]`}>

                        <div className="p-4">

                            <div className="flex justify-between">

                                <div className="flex gap-2 space-x-2 mb-4">
                                    <div className="relative">
                                        <img src="https://www.outsystems.com/Forge_CW/_image.aspx/Q8LvY--6WakOw9afDCuuGdL9c3WA3ttAt5pfSBURmME=/user-photo-upload-example-2023-01-04%2000-00-00-2023-04-20%2021-31-01" alt="user photo" className="w-12 h-12 rounded-full" />
                                        <div className='absolute -bottom-1 -right-2'>
                                            
                                        </div>
                                    </div>
                                    <div>
                                        <p className="text-lg font-semibold pt-1">Habib</p>
                                        <div className="flex space-x-2">
                                            <h6 className="flex items-center text-xs"><FaHistory className="me-2"></FaHistory> 1 hr ago</h6>
                                           
                                        </div>
                                    </div>
                                </div>

                                {/* posts action  */}


                            </div>

                            {/* see more btn  */}

                         

                        </div>

                        <div>
                            <p>assumenda, non quae repellat cumque impedit commodi quis ut, optio excepturi officiis repellendus illo adipisci. Totam fuga iste, hic repellat autem dolorem tenetur.</p>
                            {
                               <img src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80" className="w-full max-h-[600px]" alt="blog image" />
                            }
                        </div>

                        {/* <NewsFooter ></NewsFooter> */}

                    </div>
            }

            {/* modal for update post  */}

            {isOpenModal && (

                <div className="fixed inset-0 z-50 overflow-auto flex items-center justify-center">

                    <div className="modal-overlay fixed inset-0 bg-black opacity-50"></div>

                    <div className="modal-container bg-white w-11/12 md:max-w-2xl mx-auto rounded shadow-lg z-50 overflow-y-auto">

                        {/* Add your modal content here */}
                        <div className="p-4">

                            <div className="flex justify-between">

                                <div className="flex space-x-2 mb-4">

                                    <img src="" alt="user photo" className="w-12 h-12 rounded-full" />

                                    <div>
                                        <p className="text-lg font-semibold pt-1">habib</p>
                                        <h6 className="flex items-center text-xs"><FaHistory className="me-2"></FaHistory>1 hr ago</h6>
                                    </div>

                                </div>

                                <div>
                                    <button onClick={() => setIsOpenModal(!isOpenModal)}><SlClose className="text-3xl"></SlClose></button>
                                </div>

                            </div>

                           
                          

                            <div className="w-full flex space-x-8 p-6">

                                <button className="flex items-center"><AiFillHeart className="" ></AiFillHeart> 2</button>

                                <button className="flex items-center"><FaComment className="text-2xl me-2"></FaComment> 5</button>

                            </div>

                            <div>
                                <button onClick={() => handleUpdatePost(ref, editPost._id, setIsOpenModal, isOpenModal)} className="w-full secondary-button">Update</button>
                            </div>

                        </div>

                    </div>

                </div>
            )}
            {/* modal for update post end */}

        </div>
    );
};

export default DisplayNewsFeed;