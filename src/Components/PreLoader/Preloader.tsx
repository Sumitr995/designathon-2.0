import React from 'react'
import TopRightBoxes from './components/TopRightBoxes'

const Preloader = () => {
  return (
    <div className=" inset-0 z-99 bg-background relative">
    {/* Top Right Boxes */}
      <TopRightBoxes />
    </div>
  )
}

export default Preloader
