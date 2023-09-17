

import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className='h-screen'>
 

            
         
      <section className='items-center md:pt-32 bg-[#FFFDFF] pt-40'>
        <div className='container flex flex-col items-center justify-center px-5 mx-auto'>
          <div className=''>
            <img className=' w-12/12 mx-auto md:h-48 h-24' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3TbIp35zBBjE4df2m38TC_0tzaMuLuYhqRw&usqp=CAU" alt="" />
          </div>
          <div className='max-w-md text-center'>
            <h2 className="my-5 text-4xl">Page Not found</h2>
          </div>

          <div className="mt-4 flex justify-center">
            <Link to="/">
              <button className="bg-green-800 py-2 px-6 text-white rounded-md">
               Back to home
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ErrorPage;