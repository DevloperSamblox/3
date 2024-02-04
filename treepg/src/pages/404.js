import '../pagecss/modules.404.css'
import React, { useEffect } from 'react';

function ThisIsA404() {
    useEffect(() => {
        const handleGlobalClick = () => {
          // Redireciona para o site desejado
          window.location.href = './';
        };
    
        window.addEventListener('click', handleGlobalClick);
    
        return () => {
          window.removeEventListener('click', handleGlobalClick);
        };
      }, []);

    return(
        <div className='todo'>
            <div>
            <p>Parece que você se perdeu...</p>   
            <p>para retornar ao começo clique em qualquer lugar do site</p>
            </div>
            <div>
        </div>
        </div>
    )
}

export default ThisIsA404;