import Nav from "../components/nav"
import Footer from "../components/footer"
import book1 from '../assets/1151Ppi-8kISL._SY346_.jpg';
import book2 from '../assets/222510CXXt9CqL._SY346_.jpg';
import book3 from '../assets/33351vbhfNA0+L.jpg';
import book4 from '../assets/444513TQ4ihqqL.jpg';
import book5 from '../assets/555519jC3ZUisL.jpg';
import book6 from '../assets/666512xFZRDM3L.jpg';
import book7 from '../assets/77751V6zvaRjkL.jpg';
import book8 from '../assets/88851Da+RazehL.jpg';
import book9 from '../assets/99951XXxJ0uQzL.jpg';
import book10 from '../assets/10101051603y-+-XL.jpg';
import book11 from '../assets/11111151tNhAlrEzL.jpg';
import book12 from '../assets/1212125114g2RT6IL.jpg';
import book13 from '../assets/131313519YfCkwc8L.jpg';
import book14 from '../assets/141414516ZAsq057L.jpg';
import book15 from '../assets/151515B01ETJABQK_c9192ee4_cover.jpeg';
import book16 from '../assets/1616161338263897.01.S001.JUMBOXXX.jpg';

import React, { useState } from 'react';




export default function home() {

  return (
    <>
    <Nav/>
    <div className="h-screen flex items-center">
	<section className="backg_h bg-cover bg-black py-96 w-screen max-sm:w-screen bg-fixed">
		<div className="container mx-auto text-white">
			<div className="flex items-center">
				<div className="tracking-wide italic w-full text-center">
					<h1 className=" from-neutral-950 drop-shadow-2xl text-5xl font-bold mt-9 mb-10 ">Welcome in Harry Potter world</h1>
					<p className="text-neutral-400  from-neutral-950 text-xl font-medium m-0 drop-shadow-2xl">Harry Potter's world is magical both beautiful and powerful and binds a long history..</p>
					<p className="text-neutral-300  from-neutral-950 text-xl font-medium mb-12  drop-shadow-2xl">Harry Potter's world is magical both beautiful and powerful and binds a long history..</p>
				</div>
				</div>
			</div>
	</section>
</div>
        <div className="h-screen ">
        <div className="all">
        <div className="text-center mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 mt-20 text-white">
          <h2 className="italic text-5xl font-bold tracking-tight text-white">Harry Potter Books</h2>
            </div>


            <div className="mb-3 flex justify-center">
  <div className="relative mb-4 flex w-96 flex-wrap items-stretch">
    <input
      type="search"
      className="relative m-0 block w-[1px] min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
      placeholder="Search"
      aria-label="Search"
      aria-describedby="button-addon2" />

    {/* <!--Search icon--> */}
    <span
      className="input-group-text flex items-center whitespace-nowrap rounded px-3 py-1.5 text-center text-base font-normal text-neutral-700 dark:text-neutral-200"
      id="basic-addon2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="h-5 w-5">
        <path
          fill-rule="evenodd"
          d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
          clip-rule="evenodd" />
      </svg>
    </span>
  </div>
</div>

            <div className="">
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
    <h2 className="italic text-2xl font-bold tracking-tight text-white">The main Harry Potter books </h2>

    <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10  max-sm: lg:grid-cols-4 xl:gap-x-8">
      <div className="group relative">
        <div className="aspect-h-1 aspect-w-1 w-full max-sm:w-60  overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
        <a href="/book/01"><img src={book1} alt="Front of men&#039;s Basic Tee in black." className="h-full w-full object-cover object-center lg:h-full lg:w-full"/></a>
        </div>
        <div className="mt-4 flex justify-between">
          <div>
            <h3 className="text-sm text-white">
              <a href="/book/01">
                <span aria-hidden="true" className="absolute inset-0"></span>
                Harry Potter and the Sorcerer's Stone
              </a>
            </h3>
            <p className="mt-1 text-sm text-gray-500">1997</p>
          </div>
        </div>
      </div>

      {/* <!-- More products... --> */}
      
      <div className="group relative">
        <div className="aspect-h-1 aspect-w-1 w-full max-sm:w-60 overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
        <a href="/book/02"><img src={book2} alt="Front of men&#039;s Basic Tee in black." className="h-full w-full object-cover object-center lg:h-full lg:w-full"/></a>
        </div>
        <div className="mt-4 flex justify-between">
          <div>
            <h3 className="text-sm text-white">
              <a href="/book/02">
                <span aria-hidden="true" className="absolute inset-0"></span>
                Harry Potter and the Chamber of Secrets
              </a>
            </h3>
            <p className="mt-1 text-sm text-gray-500">1998</p>
          </div>
        </div>
      </div>
      {/* <!-- More products... --> */}

      <div className="group relative">
        <div className="aspect-h-1 aspect-w-1 w-full max-sm:w-60 overflow-hidden  rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
        <a href="/book/03"><img src={book3} alt="Front of men&#039;s Basic Tee in black." className="h-full w-full object-cover object-center lg:h-full lg:w-full"/></a>
        </div>
        <div className="mt-4 flex justify-between">
          <div>
            <h3 className="text-sm text-white">
              <a href="/book/03">
                <span aria-hidden="true" className="absolute inset-0"></span>
                Harry Potter and the Prisoner of Azkaban              </a>
            </h3>
            <p className="mt-1 text-sm text-gray-500">1999</p>
          </div>
        </div>
      </div>
      {/* <!-- More products... --> */}

      <div className="group relative">
        <div className="aspect-h-1 aspect-w-1 w-full max-sm:w-60 overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
        <a href="/book/04"><img src={book4} alt="Front of men&#039;s Basic Tee in black." className="h-full w-full object-cover object-center lg:h-full lg:w-full"/></a>
        </div>
        <div className="mt-4 flex justify-between">
          <div>
            <h3 className="text-sm text-white">
              <a href="/book/04">
                <span aria-hidden="true" className="absolute inset-0"></span>
                Harry Potter and the Goblet of Fire              </a>
            </h3>
            <p className="mt-1 text-sm text-gray-500">2000</p>
          </div>
        </div>
      </div>
      {/* <!-- More products... --> */}

      <div className="group relative">
        <div className="aspect-h-1 aspect-w-1 w-full max-sm:w-60 overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
        <a href="/book/05"><img src={book5} alt="Front of men&#039;s Basic Tee in black." className="h-full w-full object-cover object-center lg:h-full lg:w-full"/></a>
        </div>
        <div className="mt-4 flex justify-between">
          <div>
            <h3 className="text-sm text-white">
              <a href="/book/05">
                <span aria-hidden="true" className="absolute inset-0"></span>
                Harry Potter and the Order of the Phoenix              </a>
            </h3>
            <p className="mt-1 text-sm text-gray-500">2003</p>
          </div>
        </div>
      </div>
      {/* <!-- More products... --> */}


      <div className="group relative">
        <div className="aspect-h-1 aspect-w-1 w-full max-sm:w-60 overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
        <a href="/book/06"><img src={book6} alt="Front of men&#039;s Basic Tee in black." className="h-full w-full object-cover object-center lg:h-full lg:w-full"/></a>
        </div>
        <div className="mt-4 flex justify-between">
          <div>
            <h3 className="text-sm text-white">
              <a href="/book/06">
                <span aria-hidden="true" className="absolute inset-0"></span>
                Harry Potter and the Half-Blood Prince              </a>
            </h3>
            <p className="mt-1 text-sm text-gray-500">2005</p>
          </div>
        </div>
      </div>      
      {/* <!-- More products... --> */}


      <div className="group relative">
        <div className="aspect-h-1 aspect-w-1 w-full max-sm:w-60 overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
        <a href="/book/07"><img src={book7} alt="Front of men&#039;s Basic Tee in black." className="h-full w-full object-cover object-center lg:h-full lg:w-full"/></a>
        </div>
        <div className="mt-4 flex justify-between">
          <div>
            <h3 className="text-sm text-white">
              <a href="/book/07">
                <span aria-hidden="true" className="absolute inset-0"></span>
                Harry Potter and the Deathly Hallows              </a>
            </h3>
            <p className="mt-1 text-sm text-gray-500">2007</p>
          </div>
        </div>
      </div>
      {/* <!-- More products... --> */}

      <div className="group relative">
        <div className="aspect-h-1 aspect-w-1 w-full max-sm:w-60 overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
        <a href="/book/08"><img src={book8}alt="Front of men&#039;s Basic Tee in black." className="h-full w-full object-cover object-center lg:h-full lg:w-full"/></a>
        </div>
        <div className="mt-4 flex justify-between">
          <div>
            <h3 className="text-sm text-white">
              <a href="/book/08">
                <span aria-hidden="true" className="absolute inset-0"></span>
                Harry Potter and the Cursed Child              </a>
            </h3>
            <p className="mt-1 text-sm text-gray-500">2016</p>
          </div>
        </div>
      </div>

    </div>
  </div>
  </div>


  {/* <div className="all h-full"> */}
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
    <h2 className="italic text-2xl font-bold tracking-tight text-white">The “Hogwarts library” Texts Books</h2>

    <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
      <div className="group relative">
        <div className="aspect-h-1 aspect-w-1 w-full max-sm:w-60 overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
        <a href="/book/09"><img src={book9} alt="Front of men&#039;s Basic Tee in black." className="h-full w-full object-cover object-center lg:h-full lg:w-full"/></a>
        </div>
        <div className="mt-4 flex justify-between">
          <div>
            <h3 className="text-sm text-white">
              <a href="/book/09">
                <span aria-hidden="true" className="absolute inset-0"></span>
                Fantastic Beasts and Where to Find Them              </a>
            </h3>
            <p className="mt-1 text-sm text-gray-500">2016</p>
          </div>
        </div>
      </div>

      {/* <!-- More products... --> */}
      
      <div className="group relative">
        <div className="aspect-h-1 aspect-w-1 w-full max-sm:w-60 overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
        <a href="/book/10"><img src={book10} alt="Front of men&#039;s Basic Tee in black." className="h-full w-full object-cover object-center lg:h-full lg:w-full"/></a>
        </div>
        <div className="mt-4 flex justify-between">
          <div>
            <h3 className="text-sm text-white">
              <a href="/book/10">
                <span aria-hidden="true" className="absolute inset-0"></span>
                Quidditch Through the Ages              </a>
            </h3>
            <p className="mt-1 text-sm text-gray-500">2016</p>
          </div>
        </div>
      </div>
      {/* <!-- More products... --> */}

      <div className="group relative">
        <div className="aspect-h-1 aspect-w-1 w-full max-sm:w-60 overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
        <a href="/book/11"><img src={book11} alt="Front of men&#039;s Basic Tee in black." className="h-full w-full object-cover object-center lg:h-full lg:w-full"/></a>
        </div>
        <div className="mt-4 flex justify-between">
          <div>
            <h3 className="text-sm text-white">
              <a href="/book/11">
                <span aria-hidden="true" className="absolute inset-0"></span>
                The Tales of Beedle the Bard              </a>
            </h3>
            <p className="mt-1 text-sm text-gray-500">2008</p>
          </div>
        </div>
      </div>

    </div>
  </div>
  {/* </div> */}


  <div className="mt-5">
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
    <h2 className="italic text-2xl font-bold tracking-tight text-white">Pottermore Presents / Wizarding World extras Books</h2>

    <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
      <div className="group relative">
        <div className="aspect-h-1 aspect-w-1 w-full max-sm:w-60 overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
        <a href="/book/12"><img src={book12} alt="Front of men&#039;s Basic Tee in black." className="h-full w-full object-cover object-center lg:h-full lg:w-full"/></a>
        </div>
        <div className="mt-4 flex justify-between">
          <div>
            <h3 className="text-sm text-white">
              <a href="/book/12">
                <span aria-hidden="true" className="absolute inset-0"></span>
                Hogwarts: An Incomplete and Unreliable Guide              </a>
            </h3>
            <p className="mt-1 text-sm text-gray-500">2016</p>
          </div>
        </div>
      </div>

      {/* <!-- More products... --> */}
      
      <div className="group relative">
        <div className="aspect-h-1 aspect-w-1 w-full max-sm:w-60 overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
        <a href="/book/13"> <img src={book13} alt="Front of men&#039;s Basic Tee in black." className="h-full w-full object-cover object-center lg:h-full lg:w-full"/></a>
        </div>
        <div className="mt-4 flex justify-between">
          <div>
            <h3 className="text-sm text-white">
              <a href="/book/13">
                <span aria-hidden="true" className="absolute inset-0"></span>
                Short Stories from Hogwarts of Power, Politics and Pesky Poltergeists              </a>
            </h3>
            <p className="mt-1 text-sm text-gray-500">2016</p>
          </div>
        </div>
      </div>
      {/* <!-- More products... --> */}

      <div className="group relative">
        <div className="aspect-h-1 aspect-w-1 w-full max-sm:w-60 overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
        <a href="/book/14"><img src={book14} alt="Front of men&#039;s Basic Tee in black." className="h-full w-full object-cover object-center lg:h-full lg:w-full"/></a>
        </div>
        <div className="mt-4 flex justify-between">
          <div>
            <h3 className="text-sm text-white">
              <a href="/book/14">
                <span aria-hidden="true" className="absolute inset-0"></span>
                Short Stories from Hogwarts of Heroism, Hardship and Dangerous Hobbies              </a>
            </h3>
            <p className="mt-1 text-sm text-gray-500">2016</p>
          </div>
        </div>
      </div>
      {/* <!-- More products... --> */}

      <div className="group relative">
        <div className="aspect-h-1 aspect-w-1 w-full max-sm:w-60 overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
        <a href="/book/15"><img src={book15} alt="Front of men&#039;s Basic Tee in black." className="h-full w-full object-cover object-center lg:h-full lg:w-full"/></a>
        </div>
        <div className="mt-4 flex justify-between">
          <div>
            <h3 className="text-sm text-white">
              <a href="/book/15">
                <span aria-hidden="true" className="absolute inset-0"></span>
                The Fantastic Beasts screenplays
                              </a>
            </h3>
            <p className="mt-1 text-sm text-gray-500">2016</p>
          </div>
        </div>
      </div>
      {/* <!-- More products... --> */}

      <div className="group relative">
        <div className="aspect-h-1 aspect-w-1 w-full max-sm:w-60 overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
        <a href="/book/16"><img src={book16} alt="Front of men&#039;s Basic Tee in black." className="h-full w-full object-cover object-center lg:h-full lg:w-full"/></a>
        </div>
        <div className="mt-4 flex justify-between">
          <div>
            <h3 className="text-sm text-white">
              <a href="/book/16">
                <span aria-hidden="true" className="absolute inset-0"></span>
                Fantastic Beasts: The Crimes of Grindelwald ― The Original Screenplay</a>
            </h3>
            <p className="mt-1 text-sm text-gray-500">2018</p>
          </div>
        </div>
      </div>

 
    </div>
  </div>
  </div>
  </div>
  
  <Footer/>

</div>

</>
  )
}
