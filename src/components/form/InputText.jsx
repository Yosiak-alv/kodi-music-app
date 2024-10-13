export const InputText = ({ id, type, placeholder, value, onChange, onBlur }) => {
    return (
        <input
            type={type}
            id={id}
            placeholder={placeholder}
            className="p-3 rounded-[5px] border-[1px] outline-none focus:outline-offset-0 focus:outline-2 focus:outline-white bg-zinc-900 border-zinc-400 hover:border-white placeholder:text-sm placeholder:font-bold transition-all"
            value={value}
            onChange={onChange}
            onBlur={onBlur}
        />
    );
};