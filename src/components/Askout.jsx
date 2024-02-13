import React, { useState, useRef } from 'react'
import ResutTemplate from './ResutTemplate'
import { toPng } from 'html-to-image'

// Assets
import AskoutImg from '../assets/images/askout.png'
import Rose from '../assets/images/rose.jpg'
import Heartbreak from '../assets/images/heartbreak.jpg'

const Askout = () => {
  const [template, setTemplate] = useState(false)
  const [result, setResult] = useState({
    img: null,
    response: '',
  })
  const templateRef = useRef(null)
  const handleAccept = () => {
    setTemplate(true)
    setResult({
      img: Rose,
      response: `Yes, I'd be delighted to be your valentine!`,
    })
  }

  const handleReject = () => {
    setTemplate(true)
    setResult({
      img: Heartbreak,
      response: `Thanks for asking, but I'm going to have to say no.`,
    })
  }

  const handleShareTemplate = () => {
    toPng(templateRef.current, { cacheBust: false })
      .then((dataUrl) => {
        const link = document.createElement('a')
        link.download = 'valentine-result.png'
        link.href = dataUrl
        link.click()
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <div className='grid place-items-center'>
      <div className='flex items-center flex-col'>
        <div>
          <img
            src={AskoutImg}
            alt=''
          />
        </div>
        <div>
          <h2 className='text-lg lg:text-2xl text-rose-500 text-center font-bold'>
            Will you be my valentine?
          </h2>

          <div className='flex gap-12 justify-center mt-10'>
            <button
              onClick={handleAccept}
              className='bg-rose-500 text-[#fff] w-[100px] h-[30px] rounded'
            >
              YES!!!
            </button>
            <button
              onClick={handleReject}
              className='w-[100px] h-[30px] border-[1px] border-rose-500 rounded text-rose-500'
            >
              NO!
            </button>
          </div>
        </div>
      </div>

      {template && (
        <div ref={templateRef}>
          <ResutTemplate result={result} />
        </div>
      )}
      {template && (
        <button
          onClick={handleShareTemplate}
          className='flex items-center justify-center gap-[12px] border border-rose-500 text-rose-500 w-[200px] h-[35px] rounded-full'
        >
          <i className='fa fa-share-alt' />
          <span>Share your response</span>
        </button>
      )}
    </div>
  )
}

export default Askout
