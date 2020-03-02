import React from "react";
import { Image, Item } from "semantic-ui-react";

const BookList = ({ books }) => {
  if (books.length === 0) return <div>Loading...</div>;

  return (
    <>
      <Item.Group>
        {books.map(book => (
          <Item key={book.id + book.etag}>
            <Item.Image
              size='small'
              src={
                book.volumeInfo.imageLinks
                  ? book.volumeInfo.imageLinks?.thumbnail
                  : "https://react.semantic-ui.com/images/wireframe/image.png"
              }
            />
            <Item.Content>
              <Item.Header as='a'>{book.volumeInfo.title}</Item.Header>
              <Item.Meta>
                <span className='price'>
                  {book.saleInfo.saleability === "FOR_SALE"
                    ? `$ ${book.saleInfo.retailPrice.amount}`
                    : "Not For Sale"}
                </span>
                <br />
                <span style={{ marginTop: "10px" }} className='stay'>
                  {book.volumeInfo.authors?.toString()}
                </span>
              </Item.Meta>
              <Item.Description>
                <p>{book.volumeInfo.description?.slice(0, 550)}...</p>
              </Item.Description>
            </Item.Content>
          </Item>
        ))}
      </Item.Group>
    </>
  );
};

export default BookList;
