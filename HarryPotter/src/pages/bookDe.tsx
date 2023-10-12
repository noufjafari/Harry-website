import { useParams } from "react-router-dom";
import Nav from "../components/nav";
import Footer from "../components/footer";
import Card2 from '../components/Cards2';

import book9 from '../assets/99951XXxJ0uQzL.jpg';
import book10 from '../assets/10101051603y-+-XL.jpg';
import book11 from '../assets/11111151tNhAlrEzL.jpg';
import book12 from '../assets/1212125114g2RT6IL.jpg';
import book13 from '../assets/131313519YfCkwc8L.jpg';
import book14 from '../assets/141414516ZAsq057L.jpg';
import book15 from '../assets/151515B01ETJABQK_c9192ee4_cover.jpeg';
import book16 from '../assets/1616161338263897.01.S001.JUMBOXXX.jpg';


function bookDe() {
    const params = useParams()
        let bookData = null;


    if (params.id == '09'){
        bookData =  <Card2 src={book9} title='Fantastic Beasts and Where to Find Them ' author='J. K. Rowling.' summary=' An orphaned boy enrolls in a school of wizardry, where he learns the truth about himself, his family and the terrible evil that haunts the magical world. On his eleventh birthday, Harry Potter (Daniel Radcliffe) discovers that he is no ordinary boy.' />

    }

    if (params.id == '10'){
        bookData =  <Card2 src={book10} title='Quidditch Through the Ages' author='J. K. Rowling.' summary=' An orphaned boy enrolls in a school of wizardry, where he learns the truth about himself, his family and the terrible evil that haunts the magical world. On his eleventh birthday, Harry Potter (Daniel Radcliffe) discovers that he is no ordinary boy.' />

    }

    if (params.id == '11'){
        bookData =  <Card2 src={book11} title='The Tales of Beedle the Bard' author='J. K. Rowling.' summary=' An orphaned boy enrolls in a school of wizardry, where he learns the truth about himself, his family and the terrible evil that haunts the magical world. On his eleventh birthday, Harry Potter (Daniel Radcliffe) discovers that he is no ordinary boy.' />

    }

    if (params.id == '12'){
        bookData =  <Card2 src={book12} title='Hogwarts: An Incomplete and Unreliable Guide' author='J. K. Rowling.' summary=' An orphaned boy enrolls in a school of wizardry, where he learns the truth about himself, his family and the terrible evil that haunts the magical world. On his eleventh birthday, Harry Potter (Daniel Radcliffe) discovers that he is no ordinary boy.' />

    }

    if (params.id == '13'){
        bookData =  <Card2 src={book13} title='Short Stories from Hogwarts of Power, Politics and Pesky Poltergeists' author='J. K. Rowling.' summary=' An orphaned boy enrolls in a school of wizardry, where he learns the truth about himself, his family and the terrible evil that haunts the magical world. On his eleventh birthday, Harry Potter (Daniel Radcliffe) discovers that he is no ordinary boy.' />

    }

    if (params.id == '14'){
        bookData =  <Card2 src={book14} title='Short Stories from Hogwarts of Heroism, Hardship and Dangerous Hobbies' author='J. K. Rowling.' summary=' An orphaned boy enrolls in a school of wizardry, where he learns the truth about himself, his family and the terrible evil that haunts the magical world. On his eleventh birthday, Harry Potter (Daniel Radcliffe) discovers that he is no ordinary boy.' />
    }

    if (params.id == '15'){
        bookData =  <Card2 src={book15} title='The Fantastic Beasts screenplays' author='J. K. Rowling.' summary=' An orphaned boy enrolls in a school of wizardry, where he learns the truth about himself, his family and the terrible evil that haunts the magical world. On his eleventh birthday, Harry Potter (Daniel Radcliffe) discovers that he is no ordinary boy.' />
        }
    

    if (params.id == '16'){
        bookData =  <Card2 src={book16} title='Fantastic Beasts: The Crimes of Grindelwald ― The Original Screenplay' author='J. K. Rowling.' summary=' An orphaned boy enrolls in a school of wizardry, where he learns the truth about himself, his family and the terrible evil that haunts the magical world. On his eleventh birthday, Harry Potter (Daniel Radcliffe) discovers that he is no ordinary boy.' />

        
    }

    return (
      <>
      <div className="all text-white">
  <Nav/>

        {
        bookData != null ? 
        <>
        <div className=" flex justify-center ">
        <div className=" py-3 gap-5 text-center m-20 ">
        <p className="text-2xl m-5 mx-10  w-80">{bookData}</p></div>
        </div>
        </> 
        : ''
        
        }
</div>
     <Footer/>

      </>
    )
  }
  
  export default bookDe
  
  