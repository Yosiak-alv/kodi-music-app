export const InputLabel = ({ value }) => {
    return (
        <label className="text-sm font-extrabold">
            {value ? value : null}
        </label>
    );
};