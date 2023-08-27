interface Card {
    src:string;
    title: string;
    contant:string;
  }
  function Cards(props:Card) {
    return (
        < >
      <div>
        <img className="w-96 rounded-lg transition ease-in-out delay-150 outline-double outline-3 outline-offset-2 outline-neutral-500 hover:-translate-y-1 hover:scale-110 hover: duration-300" src={props.src} />
      </div>
      <div className="flex flex-col justify-center items-center">        
      <p className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover: duration-300 text-3xl font-bold m-5 mx-10 w-96 ">{props.title}</p>
      <p className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover: duration-300 py-6 font-thin text-s w-96 mx-5 mb-2 ">{props.contant}</p>
      </div>
      </>
    )
  }
  export default Cards