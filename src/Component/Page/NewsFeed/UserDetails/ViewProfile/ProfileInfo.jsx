// ProfileInfo.js
import React from "react";
import ActiveLink from "../../../../components/ActiveLink";
import {
  BsEnvelopeAtFill,
  BsFillXCircleFill,
  BsGeoAltFill,
  BsGiftFill,
} from "react-icons/bs";
import useUser from "../../../../Hooks/useUser";
import { FaLink, FaUserCircle } from "react-icons/fa";

const ProfileInfo = () => {
  const [userDetails] = useUser();
  const { displayName, email } = userDetails;

  return (
    <div className="mb-4 ">
      <h2 className="text-2xl font-bold capitalize">{displayName}</h2>
      <div className="">
        <p className="capitalize text-xs">Full Stack Web Developer</p>
        <p className="capitalize text-xs">Barisal, Bangladesh</p>
      </div>
      <div className="mt-3">
        <ActiveLink to={""}>
          {" "}
          <button
            className="btn px-4 py-1 rounded-full bg-[#344e41] duration-500 text-white font-semibold :hover hover:bg-[#84a98c] "
            onClick={() => window.my_modal_5.showModal()}
          >
            Contact Info
          </button>
        </ActiveLink>
      </div>

      {/* Open the modal using ID.showModal() method */}

      <dialog
        id="my_modal_5"
        className="modal animate-zoom-in modal-bottom w-1/3 sm:modal-middle rounded-2xl shadow-[0px_0px_500px_600px_#000000a8] "
      >
        <div className="modal-box p-5 ">
          <div className="flex justify-between  mb-2">
            <h3 className="font-bold text-lg capitalize">{displayName}</h3>
            <div className="modal-action">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn bg-[#344e41] hover:bg-red-500 rounded-full text-3xl border border-[#344e41] hover:border-red-500 text-white">
                  <BsFillXCircleFill />
                </button>
              </form>
            </div>
          </div>

          <hr />
          <div className="py-4 flex gap-5">
            <span className="text-2xl text-[#344e41]">
              <FaUserCircle />
            </span>
            <div className="">
              <h3 className="font-bold text-lg text-[#344e41]">Profile</h3>
              <a href="https://insight-space-f2643.web.app/view-Profile">
                Insight Space
              </a>
            </div>
          </div>
          <div className="py-4 flex gap-5">
            <span className="text-2xl text-[#344e41]">
              <BsEnvelopeAtFill />
            </span>
            <div className="">
              <h3 className="font-bold text-lg text-[#344e41]">Email</h3>
              <p className="">{email}</p>
            </div>
          </div>
          <div className="py-4 flex gap-5">
            <span className="text-2xl text-[#344e41]">
              <FaLink />
            </span>
            <div className="">
              <h3 className="font-bold text-lg text-[#344e41]">Portfolio</h3>
              <p className="">email.example@gmail.com</p>
            </div>
          </div>
          <div className="py-4 flex gap-5">
            <span className="text-2xl text-[#344e41]">
              <BsGiftFill />
            </span>
            <div className="">
              <h3 className="font-bold text-lg text-[#344e41]">Birthday</h3>
              <p className="">September 8, 1990</p>
            </div>
          </div>
          <div className="py-4 flex gap-5">
            <span className="text-2xl text-[#344e41]">
              <BsGeoAltFill />
            </span>
            <div className="">
              <h3 className="font-bold text-lg text-[#344e41]">Address</h3>
              <p className="">Barisal, Bangladesh</p>
            </div>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default ProfileInfo;
