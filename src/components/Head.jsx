import { useEffect } from "react";
import { useLocation } from "react-router-dom"
export const Head = ({title}) => {
    const location = useLocation();

    useEffect(() => {
        document.title = title;
    }, [location]);

    return null;
}