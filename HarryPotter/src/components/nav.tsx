import logo from "../assets/logo.png"
export default function nav() {

  return (
    <>


<div className="relative shadow ">
    <div className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"></div>

    <div className="w-full backdrop-blur-sm">
        <div className="relative z-1 h-16 mx-auto px-5 max-w-7xl flex items-center justify-between text-white">
                <a href="/"><img src={logo} className="w-7" alt="" /></a>

            <ul className="flex items-center gap-5">
                <li><a className="hover:text-[#417280] transition-colors" href="/home">Home</a></li>
                <li><a className="hover:text-[#417280] transition-colors" href="/about">Cast</a></li>
                 <li><a className="hover:text-[#417280] transition-colors" href="/movie">Movies</a></li>
                <li><a className="hover:text-[#417280] transition-colors m-10 text-lg" href="/Login">Sign Out</a></li>
            </ul>
        </div>
    </div>
</div>


    </>
  )
}
