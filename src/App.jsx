import React from 'react'
import InBar from "../Components/InBar"
import {text1} from "../Components/Text"
import Clouds from '../Components/Clouds'
import Trigger from '../Components/Trigger'
import Image from '../Components/Image'
import Lamp from "../Components/lamp"


const App = () => {
  return (
    <div className='App'>
                <video className="fixed object-cover h-screen w-screen rounded-lg" loop autoPlay muted>
        <source src="../src/assets/vid.mp4" type="video/mp4"/>
      </video>

      <Lamp/>
      <Image/>
      <Trigger/>
      
      <InBar text={text1}/>
      <Clouds/>

    </div>

  )
}

export default App

