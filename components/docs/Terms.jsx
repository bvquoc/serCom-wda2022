import React from 'react';

const Terms = ({ display, setDisplay }) => {
  return (
    <>
      {display && (
        <div className="wide-screen">
          <i className="bi bi-x-lg" onClick={() => setDisplay(false)}></i>
          <div className="center" style={{ minHeight: '100vh' }}>
            <div className="Terms">
              <h1>Điều khoản</h1>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis ab facere asperiores neque voluptatem
              itaque libero? Eaque mollitia ex alias fugit illo aut, blanditiis, exercitationem non aliquam voluptate
              quos quae?
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Terms;
