export default function WorkItem({book, onModalOpen}) {
  return (
    <div className="book">
      <div>
          <img
            className="book-img"
            src={book.imageUrl} alt=""
          />
      </div>
      <div className="book-name">
          <span>{book.name}</span>
          <label className="button-read-more" onClick={() => onModalOpen(book)}>Подробнее</label>
      </div>
    </div>
  );
}
