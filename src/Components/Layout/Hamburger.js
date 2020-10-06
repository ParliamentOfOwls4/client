import React from 'react'

const Hamburger = ({ open, setOpen }) => {
    return (
      <div className='hamburger' open={open} onClick={() => setOpen(!open)}>
        <div className='hamburger-lines'/>
        <div className='hamburger-lines'/>
        <div className='hamburger-lines'/>
      </div>
    )
  }

  export default Hamburger