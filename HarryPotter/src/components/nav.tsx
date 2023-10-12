import logo from "../assets/logo.png"
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

export default function nav() {
    const nav = useNavigate();

const logout= () =>{
    Swal.fire({
        title: "Are you sure you want to LogOut?",
        showCancelButton: true,
        confirmButtonColor: "#e34237",
        cancelButtonColor: "#417280",
        confirmButtonText: " Yes",
        cancelButtonText: "No",
      }).then((result) => {
        if (result.isConfirmed) {
            nav ("/")
        }});

}
  return (
    <>


<div className="relative shadow ">
    <div className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"></div>

    <div className="w-full backdrop-blur-sm">
        <div className="relative z-1 h-16 mx-auto px-5 max-w-7xl flex items-center justify-between text-white">
                <a href="/"><img src={logo} className="w-7 max-sm:w-5" alt="" /></a>

            <ul className="flex items-center gap-5 max-sm:gap-2">
                <li><a className="hover:text-[#417280] transition-colors max-sm:text-xs" href="/home">Home</a></li>
                <li><a className="hover:text-[#417280] transition-colors max-sm:text-xs" href="/about">Cast</a></li>
                 <li><a className="hover:text-[#417280] transition-colors max-sm:text-xs" href="/movie">Movies</a></li>
                <li><button onClick={logout} className="hover:text-red-600 transition-colors max-sm:m-5 max-sm:text-sm m-10 text-lg" >Sign Out</button></li>
            </ul>
        </div>
    </div>
</div>


    </>
  )
}
