import React from 'react'
import { inject, observer } from 'mobx-react'

const BookDetails = inject('store')(
  observer(({ book, store }) => (
    <section className="Page-book">
      <h2>{book.name}</h2>
      <p>
        <i>By: {book.author}</i>
      </p>
      <p>Price: ${book.price}€</p>
      <button
        onClick={() => {
          store.cart.addBook(book)
        }}
      >
        Add to cart
      </button>
    </section>
  ))
)

export default BookDetails