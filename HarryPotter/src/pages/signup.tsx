import logo from "../assets/harry-ba8d7-potter-32bb6-logo-fa67a-png-d5dd4-transparent-c9516-amp-38942-svg-d43d9-vector-b4317-freebie---supply.png"
// import react, {useState} from "react";

export default function signup() {
    // const name = useRef()
    // const email = useRef()
    // const password = useRef()

    // const getdat=()=>{
    //     console.log(name,email,password);
        
    // }
  return (
    <>
    
    <div className="">
    <section className="min-h-screen flex items-stretch text-white ">

        <div className="lg:w-1/2 w-full flex items-center justify-center text-center md:px-16 px-0 z-0 div2" >
            <div className="absolute lg:hidden z-10 inset-0 bg-gray-500 bg-no-repeat bg-cover items-center" >
            </div>
            <div className="w-full py-6 z-20">
                <div className=" flex justify-center ">
                    <img className=" w-40 " src={logo}/>
                </div>

                <form action="" className="sm:w-2/3 w-full px-4 lg:px-0 mx-auto">
                    <div className="pb-2 pt-4">
                        <input type="text" name="name"  placeholder="Name" className="block w-full p-4 text-lg rounded-sm bg-black"/>
                    </div>
                    <div className="pb-2 pt-4">
                        <input type="email" name="email"  placeholder="Email" className="block w-full p-4 text-lg rounded-sm bg-black"/>
                    </div>
                    <div className="pb-2 pt-4">
                        <input className="block w-full p-4 text-lg rounded-sm bg-black" type="password" name="password" placeholder="Password"/>
                    </div>
                    <div className="text-right text-gray-400 hover:underline hover:text-gray-100">
                        <a href="/Login">already have an account? Log in</a>
                    </div>
                    <div className="px-4 pb-2 pt-4">
                        <a href="/Login"><button  className="uppercase block w-full p-4 text-lg rounded-full bg-zinc-600 hover:bg-zinc-800 focus:outline-none">Sign in</button></a>
                    </div>

                </form>
            </div>
        </div>

        <div className="div3 lg:flex w-1/2 hidden bg-gray-500 bg-no-repeat bg-cover relative items-center" >
            <div className="absolute bg-black opacity-60 inset-0 z-0"></div>
            <div className="w-full px-24 z-10">
                <p className="text-xl font-light italic my-4">We do not need magic to transform our world, We carry all of the power we need inside ourselves already.</p>
                <p className=" italic text-s font-bold text-left tracking-wide">- J.K. Rowling - </p>

            </div>
        </div>
    </section>
</div>    
    </>
  )
}
