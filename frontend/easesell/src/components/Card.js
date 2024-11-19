import React from 'react'

function Card() {
  return (
    <div>
      <div className="card" style={{width: '18rem',
        marginTop:'5rem'
      }}>
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdE29Ddw7Rc9SIv4MffPMknnYwCDIEKXRruQ&s" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">price $100</p>
    <a href="/" className="btn btn-primary">Buy</a>
  </div>
</div>
    </div>
  )
}

export default Card
