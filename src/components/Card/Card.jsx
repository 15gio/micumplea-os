import React from 'react'
import './Card.css'
import Swal from 'sweetalert2'



const Card = ({title, description, secondDescription, thirdDescription, fourthDescription, buttonText, link, sw="false" } ) => {


  const onClickHandle = ()=>{
    sw == "false" ? window.open(link,"_blank") : //Abre nueva pestaña con la url pasa por la prop "link"
    sw == "true" ? Swal.fire({   //Abre ventana modal que contiene dentro la url de la prop "link"
      html: `<iframe src=${link} width="100%" height="520" frameborder="0" marginheight="0" marginwidth="0">Cargando…</iframe>`,
      showCloseButton: true,
      focusConfirm: false,
      showConfirmButton: false,
    }
    ) : 
    sw == "render" ? Swal.fire({
      html: `
              <div class="trasf-container">
                <h2>Transferencia bancaria</h2>
                <div class="section">
                  <h3>ALIAS</h3>
                  <p>pio.toledo</p>
                </div>
                <div class="section">
                  <h3>Fecha límite para confirmación</h3>
                  <p>Jueves 20 de Junio</p>
                </div>
                <div class="section">
                  <h3>Enviar comprobante</h3>
                  <p>342-4733499 <br>ó <br>342-4448712</p>
                </div>

              </div>`,
      focusConfirm: false,
      showConfirmButton: false,
      showCloseButton: true,
      background: '#1D1D1B',
    }) : ""
    
  }

  return (
    <div className='card-container'>
        <h3>{title}</h3>
        <p>{description}</p>
        <p>{secondDescription}</p>
        <p>{thirdDescription}</p>
        <p>{fourthDescription}</p>
        {buttonText == '' ? "" : <button onClick={onClickHandle}>{buttonText}</button>}  
    </div>
  )
}

export default Card