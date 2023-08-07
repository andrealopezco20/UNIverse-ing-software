import React from 'react'
import PostSide from '../../components/PostSide/PostSide'
import ProfileSide from '../../components/profileSide/ProfileSide'
import RightSide from '../../components/RightSide/RightSide'
import './Home.css'
//llamamos a las funciones para formar toda la pantalla de inicio
const Home = () => {
  return (
    <div className="Home">
        <ProfileSide/> 
        <PostSide/>
        <RightSide/>
    </div>
  )
}

export default Home
