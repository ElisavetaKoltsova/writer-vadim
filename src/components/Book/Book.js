export default function Book({onClose, book}) {
  return (
    <div id="myModal" className="modal" onClick={onClose}>
      <div className="modal-content">
        <span className="modal-span">{book.name}</span>
        <div>
        <img
          className="book-img"
          src={book.imageUrl} alt=""
        />
        </div>
        <span className="modal-span">Описание</span>
        <div className="description">
          {book.description}
        </div>
        <a className="button-read-more" href={book.bookUrl}>Читать...</a>
      </div>
    </div>
  );
}
