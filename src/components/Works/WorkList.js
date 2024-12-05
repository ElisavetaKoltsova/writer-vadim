import { books } from "../../Data/Data";
import WorkItem from "./WorkItem";

export default function WorkList() {
  return (
    <section className="works" id="my-work">
        <div>
            <h3>Мои работы</h3>
        </div>
        <div className="books">
          {books.map((book) => <WorkItem book={book} />)}
        </div>
    </section>
  );
}
