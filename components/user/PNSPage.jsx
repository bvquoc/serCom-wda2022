import React from 'react'
import UserPosts from '../post/UserPosts';
import PersonalInformation from './personal/PersonalInformation';

export const PNSPage = () => {
  return (
    <>
      <div className='PNSPage'>
        <h1>Hồ sơ</h1>
        <div className='grid-4-6'>
          <PersonalInformation />
          <UserPosts />
        </div>
      </div>
    </>
  )
}


export default PNSPage;
