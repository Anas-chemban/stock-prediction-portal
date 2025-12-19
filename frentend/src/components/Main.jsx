import React from 'react'
import Button from './Button'

const Main = () => {
  return (
    <>
    <div className="container">
      <div className='p-5 text-center bg-light-dark rounded'>
        <h1 className='text-light'>stock Prediction Portal</h1>
        <p className='text-light lead'>Lorem ipsum dolor sit amet consecte
          tur adipisicing elit. Accusantium repellendus illo nobis a vel eos
           modi eligendi vitae error at molestias ullam deserunt nulla porro
            dolorum dolore quasi, explicabo tempora!
          Lorem ipsum dolor sit amet consecte
          tur adipisicing elit. Accusantium repellendus illo nobis a vel eos
           modi eligendi vitae error at molestias ullam deserunt nulla porro
            dolorum dolore quasi, explicabo tempora! <br />
            <Button class='btn-outline-info' text='Login' />
        </p>
      </div>
    </div>
    </>
  )
}

export default Main