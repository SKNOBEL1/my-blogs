// import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Blogs from './components/Blogs/Blogs'
import { useState } from 'react'

function App() {
 const [bookmarkred, setBookmarked] = useState([]);
 const [readingCount,setReadingCount]=useState(0);


   const handleBookMark = (blog) =>{
      setBookmarked([...bookmarkred,blog])
      console.log(bookmarkred)
   }
 

   const handleMarkAsRead = (time) => {
    const newTime = readingCount + time;
    setReadingCount(newTime);
   }
   console.log(readingCount)

  return (
    <>
      <Navbar></Navbar>
      
      
      <div className='main-container flex text-center'>
        <div className='left-container w-[70%]'>
          
          <Blogs handleBookMark={handleBookMark} handleMarkAsRead={handleMarkAsRead}></Blogs>
          
        </div>
        <div className='right-container w-[30%]'>
          <h1>Reading time :{readingCount}</h1>
          <h1>bookmarked count: 0</h1>

          {
            bookmarkred.map((marked) => <p>{marked.title}</p>)
          }
        </div>

      </div>
      
    </>
  )
}

export default App
