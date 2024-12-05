export default function WorkItem({book}) {
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
                    <label className="button-read-more">Читать...</label>
                </div>
    </div>
  );
}
