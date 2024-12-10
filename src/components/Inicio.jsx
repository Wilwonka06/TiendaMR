import React from 'react'
import { useNavigate } from 'react-router-dom'
import Destacados from './Destacados'

const Inicio = () => {
  const navigate = useNavigate();

  const handleCategoryClick = (category) => {
    navigate('/'); // Navega a la página principal
    
    // Usa un evento personalizado para comunicar la selección de categoría
    const event = new CustomEvent('categorySelect', { 
      detail: { category } 
    });
    window.dispatchEvent(event);
  };

  return (
    <div className="container-fluid px-4">
      <h1 className='text-center mt-4 mb-3'>¡BIENVENIDO!</h1>
      
      <div className='row'>
        <div className='contenedor row mx-auto justify-content-center gap-3'>
          <div 
            className='contenedor1 border col-12 col-md-5 mt-3'
            onClick={() => handleCategoryClick('women\'s clothing')}
            style={{ cursor: 'pointer' }}
          >
            <h2 className='text-center titulo'>
              <span className='mujer'>Mujer</span>
            </h2>
          </div>
          
          <div 
            className='contenedor1 border col-12 col-md-5 mt-3'
            onClick={() => handleCategoryClick('men\'s clothing')}
            style={{ cursor: 'pointer' }}
          >
            <h2 className='text-center titulo'>
              <span className='mujer'>Hombre</span>
            </h2>
          </div>
        </div>
      </div>

      <div className='mt-4'>
        <Destacados />
      </div>
    </div>
  )
}

export default Inicio