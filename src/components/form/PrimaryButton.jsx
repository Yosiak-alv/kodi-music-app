export const PrimaryButton = ({ children ,type }) => {
    return (
        <button 
            type={type} 
            className="focus:outline-[3px] focus:outline-white whitespace-nowrap rounded-3xl py-3 bg-[#1ed760] text-black justify-center font-bold hover:scale-105">
            {children}
        </button>
    );
};