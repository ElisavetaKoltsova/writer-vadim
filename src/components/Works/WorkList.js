import WorkItem from "./WorkItem";

export default function WorkList() {
  return (
    <section className="works" id="my-work">
        <div>
            <h3>Мои работы</h3>
        </div>
        <div className="books">
            <WorkItem />
        </div>
    </section>
  );
}
