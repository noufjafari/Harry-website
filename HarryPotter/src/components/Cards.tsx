interface Card {
    src:string;
    title: string;
    contant:string;
    btu: string;
    link: string;
  }
  function Cards(props:Card) {
    return (
        < >
      <div>
        <img className="w-96 max-sm:w-32 max-sm:ml-[7.5rem] rounded-lg transition ease-in-out delay-150 outline-double outline-3 outline-offset-2 outline-neutral-500 hover:-translate-y-1 hover:scale-110 hover: duration-300" src={props.src} />
      </div>
      <div className="flex flex-col justify-center items-center">        
      <p className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover: duration-300 text-3xl font-bold m-5 mx-10 w-96 max-sm:text-base max-sm:w-44 ">{props.title}</p>
      <p className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover: duration-300 py-6 font-thin text-s w-96 mx-5 mb-2 max-sm:text-xs max-sm:w-48 ">{props.contant}</p>
      <p className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover: duration-300 py-6 font-thin text-s w-96 mb-2 justify-center flex max-sm:w-44"><a href={props.link}><button className="border-2 border-white hover:text-black max-sm:text-[0.60rem] max-sm:w-20 max-sm:text-xs max-sm:mb-10 w-60 p-3 rounded-full shadow-lg transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-slate-300 duration-300">{props.btu}</button></a></p>
      </div>
      </>
    )
  }
  export default Cards