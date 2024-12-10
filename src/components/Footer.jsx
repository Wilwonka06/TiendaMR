import React from 'react'

const Footer = () => {
  return (
    <div>
      <div className='footer'>
        <div className='container-fluid'>
          <footer className='d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top'>
            <div className='col-12 d-flex flex-column flex-md-row align-items-center'>
              <div className='d-flex align-items-center mb-3 mb-md-0'>
                <a href="/" className='me-2 text-body-secondary text-decoration-none'>
                  <svg className='bi' width="30" height="24"><use xlinkHref='#bootstrap' /></svg>
                </a>
                <img src="src/assets/img/instagram.png" alt="Instagram" className='redes mx-2' />
                <img src="src\assets\img\facebook.png" alt="Facebook" className='redes mx-2' />
                <img src="src\assets\img\whatsapp.png" alt="WhatsApp" className='redes mx-2' />
              </div>

              <div className='d-flex flex-wrap justify-content-center gap-2 mt-3 mt-md-0 ms-md-auto'>
                <p>Mala racha <strong>Copyright</strong> © 2014 MR_Shop. All rights reserved.</p>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  )
}

export default Footer