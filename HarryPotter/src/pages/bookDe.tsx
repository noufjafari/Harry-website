import { useParams } from "react-router-dom";
import Nav from "../components/nav";
import Footer from "../components/footer";
import Card2 from '../components/Cards2';

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


function bookDe() {
    const params = useParams()
        let bookData = null;

    if (params.id == '01'){
        
        bookData =  <Card2 src={book1} title='Harry Potter and the Sorcerers Stone' author='J. K. Rowling.' summary=' An orphaned boy enrolls in a school of wizardry, where he learns the truth about himself, his family and the terrible evil that haunts the magical world. On his eleventh birthday, Harry Potter (Daniel Radcliffe) discovers that he is no ordinary boy.' />

    }

    if (params.id == '02'){
        bookData =  <Card2 src={book2} title='Harry Potter and the Chamber of Secrets' author='J. K. Rowling.' summary=' An orphaned boy enrolls in a school of wizardry, where he learns the truth about himself, his family and the terrible evil that haunts the magical world. On his eleventh birthday, Harry Potter (Daniel Radcliffe) discovers that he is no ordinary boy.' />
    }

    if (params.id == '03'){
        bookData =  <Card2 src={book3} title='Harry Potter and the Prisoner of Azkaban' author='J. K. Rowling.' summary=' An orphaned boy enrolls in a school of wizardry, where he learns the truth about himself, his family and the terrible evil that haunts the magical world. On his eleventh birthday, Harry Potter (Daniel Radcliffe) discovers that he is no ordinary boy.' />

    }

    if (params.id == '04'){
        bookData =  <Card2 src={book4} title='Harry Potter and the Goblet of Fire' author='J. K. Rowling.' summary=' An orphaned boy enrolls in a school of wizardry, where he learns the truth about himself, his family and the terrible evil that haunts the magical world. On his eleventh birthday, Harry Potter (Daniel Radcliffe) discovers that he is no ordinary boy.' />

        
    }
    if (params.id == '05'){
        bookData =  <Card2 src={book5} title='Harry Potter and the Order of the Phoenix' author='J. K. Rowling.' summary=' An orphaned boy enrolls in a school of wizardry, where he learns the truth about himself, his family and the terrible evil that haunts the magical world. On his eleventh birthday, Harry Potter (Daniel Radcliffe) discovers that he is no ordinary boy.' />

    }

    if (params.id == '06'){
        bookData =  <Card2 src={book6} title='Harry Potter and the Half-Blood Prince' author='J. K. Rowling.' summary=' An orphaned boy enrolls in a school of wizardry, where he learns the truth about himself, his family and the terrible evil that haunts the magical world. On his eleventh birthday, Harry Potter (Daniel Radcliffe) discovers that he is no ordinary boy.' />

    }
    if (params.id == '07'){
        bookData =  <Card2 src={book7} title='Harry Potter and the Deathly Hallows' author='J. K. Rowling.' summary=' An orphaned boy enrolls in a school of wizardry, where he learns the truth about himself, his family and the terrible evil that haunts the magical world. On his eleventh birthday, Harry Potter (Daniel Radcliffe) discovers that he is no ordinary boy.' />

    }

    if (params.id == '08'){
        bookData =  <Card2 src={book8} title='Harry Potter and the Cursed Child' author='J. K. Rowling.' summary=' An orphaned boy enrolls in a school of wizardry, where he learns the truth about himself, his family and the terrible evil that haunts the magical world. On his eleventh birthday, Harry Potter (Daniel Radcliffe) discovers that he is no ordinary boy.' />

    }

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
        <div className=" flex justify-center">
        <div className=" py-3 gap-5 text-center mt-10 mb-20">
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
  
  