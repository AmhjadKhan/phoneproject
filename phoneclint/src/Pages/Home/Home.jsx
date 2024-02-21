import React from 'react'
import Banner from '../../components/helper/banner/Banner'
// import Datafac from './phonedata/Datafac'
import Oppopho from './Oppo/Oppopho'
import Samsung from './Samsung/Samsung'
import Watch from './Watch/Watch'
import Phone from './phone/Phone'

const Home = () => {
  return (
    <div>
      
      <Banner />
      <Phone />
      <Oppopho />
      <Samsung />
      <Watch />
    </div>
  )
}

export default Home
