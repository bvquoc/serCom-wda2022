import React from 'react'
import CreatePostLayout from '../layout/CreatePostLayout';
import UserPosts from '../post/UserPosts';
import PersonalInformation from './personal/PersonalInformation';

export const PNSPage = () => {
  return (
    <>
      <div className='PNSPage'>
        <div className='grid-4-6'>
          <PersonalInformation />
          <div>
          <CreatePostLayout />
          <UserPosts />
          </div>
        </div>
      </div>
    </>
  )
}


export default PNSPage;
