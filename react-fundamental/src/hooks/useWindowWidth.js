import { useState, useEffect } from "react";

function useWindowWidth(){
    const [width, setWidth] = useState(window.innerWidth)

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth)

        window.addEventListener("resize", handleResize)

        // cleanup saat component di-unmount
        return () => window.removeEventListener("resize", handleResize)
    }, [])

    return width
}

export default useWindowWidth