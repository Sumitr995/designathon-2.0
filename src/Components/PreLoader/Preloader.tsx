import React from 'react'

const Preloader = () => {
  return (
    <div className="fixed inset-0 z-99 flex items-center justify-center bg-background">
      <p className="text-white text-xl tracking-widest">
        LOADING...
      </p>
    </div>
  )
}

export default Preloader
