import Nav from "../components/nav"
import Footer from "../components/footer"
import Card from '../components/Cards';
import img1 from '../assets/mov11.jpg';
import img2 from '../assets/mov2.jpg';
import img3 from '../assets/mov3.png';
import img4 from '../assets/mov44.jpg';
import img5 from '../assets/mov55.jpg';
import img6 from '../assets/mov66.jpg';
import img7 from '../assets/mov77.jpg';
import img8 from '../assets/mov8.jpg';

export default function movie() {
  return (
    <>
            <div className="all text-white">

        <Nav/>
        <div className="h-screen flex items-center">
	<section className="backg_h2 bg-cover bg-black py-80 w-screen bg-fixed">
		<div className="container mx-auto text-white">
			<div className="flex items-center">
				<div className="tracking-wide italic w-full text-center">
					<h1 className=" from-neutral-950 drop-shadow-2xl text-5xl font-bold mt-9 mb-10 "> Harry Potter Movies</h1>
					<p className="text-neutral-400  from-neutral-950 text-xl font-medium m-0 drop-shadow-2xl">Harry Potter's world is magical both beautiful and powerful and binds a long history..</p>
					<p className="text-neutral-300  from-neutral-950 text-xl font-medium mb-12  drop-shadow-2xl">Harry Potter's world is magical both beautiful and powerful and binds a long history..</p>
				</div>
				</div>
			</div>
	</section>
</div>
        <div className=" mb-2">
        <div className="  py-3 gap-9 mt-20 flex flex-row justify-evenly text-center"><Card src={img1} title='Harry Potter and the Philosopher’s Stone (2001)' contant=' An orphaned boy enrolls in a school of wizardry, where he learns the truth about himself, his family and the terrible evil that haunts the magical world. On his eleventh birthday, Harry Potter (Daniel Radcliffe) discovers that he is no ordinary boy.' /></div>
            </div>
            
            <hr className="my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100" />
            
            <div className="  mb-2 ">
        <div className="  py-3 gap-9 mt-20 flex flex-row-reverse justify-evenly text-center"><Card  src={img2} title='Harry Potter and the Chamber of Secrets (2002)'  contant='The plot follows Harrys second year at Hogwarts School of Witchcraft and Wizardry, during which a series of messages on the walls of the schools corridors warn that the "Chamber of Secrets" has been opened and that the "heir of Slytherin" would kill all pupils who do not come from all-magical families.'  /></div>
            </div>
            <hr className="my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100" />

            <div className="  mb-5 ">
       <div className="   py-3 gap-9 mt-20 flex flex-row justify-evenly text-center"><Card src={img3} title='Harry Potter and the Prisoner of Azkaban (2004)' contant='The film follows Harrys third year at Hogwarts and his quest to uncover the truth about his past, including the connection recently-escaped Azkaban prisoner Sirius Black has to Harry and his deceased parents. ' /></div>
            </div>
            <hr className="my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100" />

            
        <div className=" mb-2">
        <div className="  py-3 gap-9 mt-20 flex flex-row-reverse justify-evenly  text-center"><Card src={img4} title='Harry Potter and the Goblet of Fire (2005)' contant='Harry Potter spends the end of the summer with the Weasleys and is invited to go to the Quidditch Cup. The event is going to host over a hundred thousand wizards and everyone is attending. But things go south when the Death Eaters attack the camp.' /></div>
            </div>
            <hr className="my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100" />

            <div className="  mb-2 ">
        <div className="  py-3 gap-9 mt-20 flex flex-row justify-evenly  text-center"><Card  src={img5} title='Harry Potter and the Order of the Phoenix (2007)'  contant='Harry Potter (Daniel Radcliffe) is brought back to school where he faces a possible expulsion after using magic in the real world. Dumbledore (Jim McManus) comes to his defense and soon the two of them are warning people of the return of Lord Voldemort.'  /></div>
            </div>
            <hr className="my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100" />

            <div className="  mb-5 ">
       <div className="   py-3 gap-9 mt-20 flex flex-row-reverse justify-evenly  text-center"><Card src={img6} title='Harry Potter and the Half-Blood Prince (2009)' contant='As Death Eaters wreak havoc in both Muggle and Wizard worlds, Hogwarts is no longer a safe haven for students. Though Harry (Daniel Radcliffe) suspects there are new dangers lurking within the castle walls, Dumbledore is more intent than ever on preparing the young wizard for the final battle with Voldemort. ' /></div>
            </div>
            <hr className="my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100" />


            <div className=" mb-2">
        <div className="  py-3 gap-9 mt-20 flex flex-row justify-evenly  text-center"><Card src={img7} title='Harry Potter and the Deathly Hallows: Part 1 (2010)' contant='Harry (Daniel Radcliffe), Ron (Rupert Grint) and Hermione (Emma Watson) begin their mission to find the Horcruxes, the keys to Voldemorts (Ralph Fiennes) immortality, but nowhere is safe now that Voldemort has gained control over Hogwarts and the Wizarding World.' /></div>
            </div>
            <hr className="my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100" />

            <div className="  mb-20 ">
        <div className="  py-3 gap-9 mt-20 flex flex-row-reverse justify-evenly  text-center"><Card  src={img8} title='Harry Potter and the Deathly Hallows: Part 2 (2011)'  contant='The battle is drawn at Hogwarts as many people fight to protect Harry. Harry then realizes that people are dying constantly for his mistakes and then eventually fights Voldemort for the last time. Along the way, crucial secrets are unravelled, and the mysterious, but legendary, Deathly Hallows reappear.'  /></div>
            </div>

        
        <Footer/>
        </div>
    </>
  )
}
