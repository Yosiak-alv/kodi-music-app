import { useNavigate } from "react-router-dom";

export const NavBar = () => {  
    const navigate = useNavigate()
    
    return (
      <div>
        <div className='w-full flex justify-end items-center font-semibold'>
          <div className="flex items-center gap-4">
            <button onClick={() => navigate('/login')} 
            className='bg-green-500 py-1 px-3 text-[15px] rounded-2xl hidden md:block cursor-pointer'>Log In</button>
          </div>
        </div>
  
        <div className="flex items-center gap-2 mt-4">
          <p className='bg-white text-black px-4 py-1 rounded-2xl cursor-pointer'>All</p>
          <p className="bg-black px-4 py-1 rounded-2xl cursor-pointer">Music</p>
          <p className="bg-black px-4 py-1 rounded-2xl cursor-pointer">Podcast</p>
        </div>
      </div>
    )
}