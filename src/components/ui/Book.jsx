import React from "react";
import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function Book({ book }) {
  return (
    <div className="book">
      <Link to="">
        <figure className="book__img--wrapper">
          <img src={book.url} className="book__img" />
        </figure>
      </Link>
      <div className="book__title">
        <Link to="/" className="book__title--link">
          {book.title}
        </Link>
      </div>
      <div className="book__ratings">
        {new Array(Math.floor(book.rating)).fill(0).map((_, index) => (
          <FontAwesomeIcon icon={faStar} key={index} />
        ))}
        {!Number.isInteger(book.rating) && (
          <FontAwesomeIcon icon={faStarHalfAlt} />
        )}
      </div>
      <div className="book__price">
        {book.salePrice ? (
          <>
            <span className="book__price--normal">
              ${book.originalPrice.toFixed(2)}
            </span>
            ${book.salePrice.toFixed(2)}
          </>
        ) : (
          <>${book.originalPrice}</>
        )}
      </div>
    </div>
  );
}

export default Book;
