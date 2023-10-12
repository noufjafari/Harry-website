import logo from "../assets/harry-ba8d7-potter-32bb6-logo-fa67a-png-d5dd4-transparent-c9516-amp-38942-svg-d43d9-vector-b4317-freebie---supply.png"
import {useState} from "react"
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function signup() {
    const [email,setEmail]= useState('');
    const [name,setName]= useState('');    
    const [pass,setPass]= useState('');
    const navg = useNavigate();


    const handelLogic=()=>{

        if (email.trim()=='' || pass.trim()=='' || name.trim()==''){
            Swal.fire(
                '',
                'please you need to fill-out all feilds',
                'error'
              )
            
        } else{
        localStorage.setItem('email',email);
        localStorage.setItem('name',name);
        localStorage.setItem('pass',pass);
        Swal.fire(
            '',
            'Signup successful!',
            'success'
          )
        }
        navg("/Login" ) 


    }
  return (
    <>
    
    <div className="">
    <section className="min-h-screen flex items-stretch text-white ">

        <div className="lg:w-1/2 w-full flex items-center justify-center text-center md:px-16 px-0 z-0 div2" >
            <div className="absolute lg:hidden z-10 inset-0 bg-gray-500 bg-no-repeat bg-cover items-center" >
            </div>
            <div className="w-full py-6 z-20">
                <div className=" flex justify-center max-sm:h-32 ">
                    <img className=" w-40 max-sm:h-28 max-sm:w-28 " src={logo}/>
                </div>

                <form action="" className="max-sm:w-2/3 w-full px-4 lg:px-0 mx-auto">
                    <div className="pb-2 pt-4">
                        <input type="text" name="name"  value={name} onChange={(e)=> setName(e.target.value)} placeholder="Name" className="block w-full p-4 text-lg max-sm:p-2 max-sm:text-sm rounded bg-black"/>
                    </div>
                    <div className="pb-2 pt-4">
                        <input type="email" name="email" value={email} onChange={(e)=> setEmail(e.target.value)} placeholder="Email" className="block w-full p-4 text-lg max-sm:p-2 max-sm:text-sm rounded bg-black"/>
                    </div>
                    <div className="pb-2 pt-4">
                        <input className="block w-full p-4 max-sm:p-2 text-lg rounded bg-black max-sm:text-sm" value={pass} onChange={(e)=> setPass(e.target.value)} type="password" name="password" placeholder="Password"/>
                    </div>
                    <div className="text-right max-sm:text-xs max-sm:text-center max-sm:m-5 text-gray-400 hover:underline hover:text-gray-100">
                    already have an account?<a href="/Login"> Log in</a>
                    </div>
                    <div className="px-4 pb-2 pt-4">
                        <button onClick={handelLogic} className="uppercase max-sm:text-xs max-sm:w-28 max-sm:p-2 max-sm:ml-8 block w-full max-sm:text-xs max-sm:w-40 max-sm:ml-20 p-4 text-lg rounded-full bg-zinc-600 hover:bg-zinc-800 focus:outline-none">Sign in</button>
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
