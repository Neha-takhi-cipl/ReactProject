/**
*
* Book
*
*/

import React from 'react';
// import styled from 'styled-components';
import './Styles/styles.css';
import images from '../../../images';

class Book extends React.Component { // eslint-disable-line react/prefer-stateless-function

  render() {
    return (
      <div className="bookComp">
        <span>Book</span>
        <img src={images.Book} className="bookImg" alt="book" />
      </div>
    );
  }
}

Book.propTypes = {

};

export default Book;
