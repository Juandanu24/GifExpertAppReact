import React from 'react'

export const GifGridItems = ( {title,url} ) => {

    // console.log(title,url)
  return (
    <div className='card animate__bounceOut'>

        <img src={url} alt={title}/>
        {/* <p>{title}</p> */}
        
    </div>
  )
}
