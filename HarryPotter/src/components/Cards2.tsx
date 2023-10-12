interface Card2 {
    src:string;
    title: string;
    author:string;
    summary:string;
  }
  function Cards2(props:Card2) {
    return (
        < >
        <div className="flex flex-row justify-center max-sm:flex-col max-sm:mt-5 mt-20 mb-10 ">
        <img className="w-96 max-sm:w-40 max-sm:ml-20 rounded-lg transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover: duration-300" src={props.src} />
      <div className="flex flex-col justify-center items-center">        
      <p className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover: duration-300 text-4xl max-sm:text-base max-sm:mt-16 max-sm:w-60 font-bold m-5 mx-10 w-96 ">{props.title}</p>
      <p className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover: duration-300 py-6 font-thin text-s max-sm:text-sm w-96 mx-5 mb-2 ">{props.author}</p>
      <p className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover: duration-300 py-6 font-thin text-s max-sm:text-sm max-sm:w-64 w-96 mx-5 mb-2 ">{props.summary}</p>
      </div>
      </div>
      </>
    )
  }
  export default Cards2