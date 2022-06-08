import React, { Fragment, useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';
// import { Logo } from './components/LogoDarkMode';
// import { DarkMode } from './helpers/DarkMode';


export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['']);

    // const [clicked, setClicked] = useState(false);

    // const toggle = () => {
    //     setClicked(!clicked);
    // }

    return (
    <>    
        {/* {document.body.classList.toggle(clicked ? 'dark-mode': null)}   */}
        <div className={'title_cont'}>
                  
            <h2>GifExpertApp</h2>
            {/* <Logo/> */}
            {/* <DarkMode/> */}
        </div>
            <AddCategory setCategories={setCategories}/>
            <hr></hr>

            <ol className='contenedor_personajes'>
                {
                    categories.map( category => (
                        
                        <GifGrid 
                            key={category}
                            category={category}
                        />
                    ))
                }
            </ol>
    </>
  )
}


