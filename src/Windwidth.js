import React , {useState , useEffect} from "react";

function Windwidth() {

    const [width , setWidth] = useState(window.innerWidth);

    useEffect(() => {

        function handleResize() {
            console.log("setting Up");
            setWidth(window.innerWidth);
        }

        window.addEventListener("resize",handleResize);

        return function() {
            console.log("cleaning.....")
            window.removeEventListener("resize",handleResize);
        }

      },[]);

    return(
        <div>
            <h2>{`Window width : ${width}`}</h2>
        </div>
    );
}


export default Windwidth;