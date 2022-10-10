import {BsStars } from 'react-icons/bs'
import TweetBox from './TweetBox'
import Blogs from './Blogs'

const style = {
  wrapper: `flex-[2] border-r border-l border-[#38444d]`,
  header: `sticky top-0 bg-[#15202b] z-10 p-4 flex justify-between items-center rounded-b-lg p-2`,
  headerTitle: `text-xl font-bold items-center`,
}


function Feed(){
    return(
        <div className='bg-slate-800 pb-4'>
            <div className={style.wrapper}>
                <div className={style.header}>
                    <div className={style.headerTitle}>Home</div>
                    <BsStars />
                </div>
                <TweetBox />
            </div>

            <div>
                <Blogs/>
                <Blogs/>
                <Blogs/>
                <Blogs/>
                <Blogs/>
                <Blogs/>
                <Blogs/>
                <Blogs/>
                <Blogs/>
                <Blogs/>
            </div>
       
        </div>
    )
}

export default Feed