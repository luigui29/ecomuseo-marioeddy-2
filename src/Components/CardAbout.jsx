import React from 'react'

//Assets
import example_img from '../assets/avolarpapagayo-img1.jpg' 

const CardAbout = () => {
  return (
    <div className='container collection-item-container w-75 mb-5'>
        <div className='container'>
        <div className='row py-3 d-flex'>
            <div className="col-8 pe-0">
            <img src={example_img} alt="obra" className='w-100 h-100'/>
            </div>
            <div className="col-4 d-flex flex-column" style={{height: "500px", backgroundColor: "white"}}>
            <div className="row"> Titulo</div>
            <div className="row p-2" style={{height: "100%", overflowY: "scroll"}}> 
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived
            </div>
            </div>
        </div>
        <div className='col-12 d-flex flex-column'>
            <div className='row' style={{backgroundColor: "white"}}>TITERES</div>
            <div className="row" style={{backgroundColor: "grey"}}>
            <div className='col-3'>Titere 1</div>
            <div className='col-3'>Titere 2</div>
            <div className='col-3'>Titere 3</div>
            </div>
        </div>
        <div className='col-12 d-flex flex-column'>
            <div className="row" style={{backgroundColor: "white"}}>OBRAS</div>
            <div className="row" style={{backgroundColor: "grey"}}>
            <div className='col-3'>Obra 1</div>
            <div className='col-3'>Obra 2</div>
            <div className='col-3'>Obra 3</div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default CardAbout