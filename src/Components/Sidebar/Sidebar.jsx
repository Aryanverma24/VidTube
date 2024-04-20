import React from 'react'
import './Sidebar.css'
import home from '../../assets/images/home.png'
import game_icon from '../../assets/images/game_icon.png'
import automobiles from '../../assets/images/automobiles.png'
import sports from '../../assets/images/sports.png'
import entertainment from '../../assets/images/entertainment.png'
import tech from '../../assets/images/tech.png'
import music from '../../assets/images/music.png'
import blogs from '../../assets/images/blogs.png'
import news from '../../assets/images/news.png'
import jack from '../../assets/images/jack.png'
import simon from '../../assets/images/simon.png'
import tom from '../../assets/images/tom.png'
import megan from '../../assets/images/megan.png'
import cameron from '../../assets/images/cameron.png'

const Sidebar = ({sidebar,category,setCategory}) => {
  return (
    <div className={`sidebar ${sidebar?"":"small-sidebar"}`}>
      <div className='shortcut-links'>

        <div className={`side-link ${category===0?"active":""}`} onClick={()=>setCategory(0)}>
            <img src={home} alt=""></img><p>Home</p>
        </div>

        <div className={`side-link ${category===20?"active":""}`} onClick={()=>setCategory(20)}>
            <img src={game_icon} alt=""></img><p>Gaming</p>
        </div>

        <div className={`side-link ${category===2?"active":""}`} onClick={()=>setCategory(2)}>
            <img src={automobiles} alt=""></img><p>Automobiles</p>
        </div>

        <div className={`side-link ${category===17?"active":""}`} onClick={()=>setCategory(17)}>
            <img src={sports} alt=""></img><p>Sports</p>
        </div>

        <div className={`side-link ${category===24?"active":""}`} onClick={()=>setCategory(24)}>
            <img src={entertainment} alt=""></img><p>Entertainment</p>
        </div>

        <div className={`side-link ${category===28?"active":""}`} onClick={()=>setCategory(28)}>
            <img src={tech} alt=""></img><p>Technology</p>
        </div>
        <div className={`side-link ${category===10?"active":""}`} onClick={()=>setCategory(10)}>
            <img src={music} alt=""></img><p>Music</p>
        </div>

        <div className={`side-link ${category===22?"active":""}`} onClick={()=>setCategory(22)}>
            <img src={blogs} alt=""></img><p>Blogs</p>
        </div>
 
        <div className={`side-link ${category===25?"active":""}`} onClick={()=>setCategory(25)}>
            <img src={news} alt=""></img><p>News</p>
        </div>

        <hr />
      </div>

      <div className='subscribed-list'>
        <h3>Subscribed</h3>
        <div className='side-link'>
            <img src={jack} alt='' /><p>9 tailed spirit</p>
        </div>

        <div className='side-link'>
            <img src={simon} alt='' /><p>MrBeast</p>
        </div>

        <div className='side-link'>
            <img src={tom} alt='' /><p>T-Series</p>
        </div>

        <div className='side-link'>
            <img src={megan} alt='' /><p>Payal Gaming</p>
        </div>

        <div className='side-link'>
            <img src={cameron} alt='' /><p>5-min-Crafts</p>
        </div>
        
      </div>
    </div>
  )
}

export default Sidebar;
