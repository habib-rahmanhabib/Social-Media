import React from 'react';
import useMyFriends from '../../../../../Hooks/useMyFriends';

const FriendLayout = () => {
    const [friends] = useMyFriends();
    console.log(friends)
    return (
        <div className='animate-zoom-in'>
            <p className="text-xl pb-2 border-[#3c6e71] font-bold mb-3 border-b ">
                Total Friends <span className='bg-[#344e41] text-white rounded-full p-1 px-3'>{friends?.length}</span>

            </p>
            <div className='grid md:grid-cols-2 gap-5 items-center'>
                {
                    friends?.map(friend => <div key={friend?._id}>

                        <div className='flex items-center gap-3 mt-5 border border-[#cce5e7] p-3 rounded-md'>
                            <div className='w-20'>
                                <img className='rounded-full h-20 w-20' src={friend?.photoURL} alt="" />
                            </div>
                            <div>
                                <p className='font-semibold'>{friend?.displayName}</p>
                                <p className='text-sm text-slate-500'>{friend?.role}</p>
                            </div>
                        </div>


                    </div>

                    )
                }
            </div>
        </div>
    );
};

export default FriendLayout;