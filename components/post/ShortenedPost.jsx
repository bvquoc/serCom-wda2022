
import React from 'react'

const ShortenedPost = () => {
  return (
    <>
        <div className="ShortenedPost">
            <div className="flex-space-between">
                <div className='flex-space-between flex-columns'>
                    <div>Title</div>
                    <cite>Time</cite>
                </div>
                <div className='flex-default'>
                    <div><i className="bi bi-pencil-square"></i></div>
                    <div><i className="bi bi-trash3"></i></div>
                </div>
            </div>
        </div>
    </>
  )
}

export default ShortenedPost
