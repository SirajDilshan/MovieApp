import { Link } from "react-router-dom";
import { Button } from "../components";
import  PageNotFoundImage  from "../assets/images/pagenotfound.png";
import { useEffect } from "react";

export const PageNotFound = () => {

useEffect(() => {
  document.title = `Page Not Found / Cinamate`;
});

  return(

<main>
<section className="flex flex-col justify-center px-2" >
  <div className="flex flex-col items-center my-2">
    <p className="text-5xl text-gray-700 font-bold my-10 dark:text-white" >404, Ooops!</p>
    <div className="max-w-sm">
    <img className="rounded" src={PageNotFoundImage} alt="404 page not found" />
    </div>
    
  </div>
  <div className="flex justify-center my-4">
    <Link to="/">
    <Button>Back To Home</Button>
    </Link>
  </div>
</section>

</main>

  ); 
};
