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

const Sidebar = ({sidebar}) => {
  return (
    <div className={`sidebar ${sidebar?"":"small-sidebar"}`}>
      <div className='shortcut-links'>

        <div className='side-link'>
            <img src={home} alt=""></img><p>Home</p>
        </div>

        <div className='side-link'>
            <img src={game_icon} alt=""></img><p>Gaming</p>
        </div>

        <div className='side-link'>
            <img src={automobiles} alt=""></img><p>Automobiles</p>
        </div>

        <div className='side-link'>
            <img src={sports} alt=""></img><p>Sports</p>
        </div>

        <div className='side-link'>
            <img src={entertainment} alt=""></img><p>Entertainment</p>
        </div>

        <div className='side-link'>
            <img src={tech} alt=""></img><p>Technology</p>
        </div>

        <div className='side-link'>
            <img src={music} alt=""></img><p>Music</p>
        </div>

        <div className='side-link'>
            <img src={blogs} alt=""></img><p>Blogs</p>
        </div>
 
        <div className='side-link'>
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
