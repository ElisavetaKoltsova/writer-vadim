export default function MainSection() {
  return (
    <main>
        <div className="home">
            <div className="h-item">
                <img src="/img/wr.png" alt="" />
            </div>
            <div className="h-item">
                <h1>Кольцов Вадим</h1>
                <h2>Писатель</h2>
            </div>   
        </div>
        <div className="icos">
            <a href="https://vk.com/id526933176" target="_blank" 
            className="i-item" rel="noreferrer"><img src="/img/vk.svg" alt="" /></a>
            <a href="https://dzen.ru/id/5ebcff9119230d790db2794a" target="_blank" 
            className="i-item" rel="noreferrer"><img src="/img/Yandex_Zen.svg" alt="" /></a>
            <a href="https://www.instagram.com/vadim_koltsov_plter/" target="_blank" 
            className="i-item" rel="noreferrer"><img src="/img/insta.svg" alt="" /></a>
        </div>
    </main>
  );
}
