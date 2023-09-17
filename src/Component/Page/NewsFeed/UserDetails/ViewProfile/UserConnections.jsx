import React, { useContext } from "react";
import UserConnectionCard from "./UserConnectionCard";
import useMyFriends from "../../../../Hooks/useMyFriends";
import { Link } from "react-router-dom";

const UserConnections = () => {
  const [friends] = useMyFriends();

  return (
    <>
      <div className=" bg-white p-3 rounded-lg shadow-lg shadow-slate-300">
        <h2 className="text-xl font-bold">Connected People</h2>
        <p className="text-sm pb-2 border-[#3c6e71] border-b text-gray-400">You can message them</p>
        {friends?.length > 0 ? (
          <>
            {friends?.slice(0, 5).map((friend) => (
              <UserConnectionCard
                key={friend._id}
                friend={friend}
              ></UserConnectionCard>
            ))}
            <div className="text-center pt-5">
              <Link
                to={"/connections"}
                className="btn border border-[#344e41] hover:bg-[#344e41] hover:text-white duration-500 rounded px-3 py-1 font-semibold"
              >
                All Connection
              </Link>
            </div>
          </>
        ) : (
          <p className="font-[Cinzel] text-center">No friends found.</p>
        )}
      </div>
    </>
  );
};

export default UserConnections;
