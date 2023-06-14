import React from 'react'
import SnowFlake from '../asset/snow.gif'
import Rainbow1 from '../asset/rainbow1.gif'
import { useDispatch, useSelector } from 'react-redux'
import useMousePosition from './UseMousePosition'

const Snow = () => {
    const mousePosition = useMousePosition()
    const { value } = useSelector((state) => state.sicko)
    // console.log(window.scrollY)

  return (
      <div >
        {/* snow on cursor */}
        {/* <img style={{ position:'absolute', left:mousePosition.x, top:window.scrollY+mousePosition.y+20 }}
        className={value? 'w-[200px] rounded-tl-3xl rounded-tr-full':'hidden'} src={SnowFlake} />

          <img style={{ position: 'absolute', left: mousePosition.x-200, top: window.scrollY + mousePosition.y + 20 }}
              className={value ? 'w-[200px] rounded-tr-3xl rounded-tl-full' : 'hidden'} src={SnowFlake} /> */}
        {/* rainbow on cursor*/}
          {/* <img style={{ position: 'absolute', left: mousePosition.x, top: window.scrollY + mousePosition.y-75 }}
              className={value ? 'w-[200px] rotate-90' : 'hidden'} src={Rainbow1} /> */}
        

      </div>

  )
}

export default Snow
