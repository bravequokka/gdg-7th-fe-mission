import { useState } from 'react';

function Content() {
  const [keyword, setKeyword] = useState("");

  return (
    <main className="content">
      <div className="search-bar">
        <input
          type="text"
          placeholder="상품 검색..."
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
        <button onClick={() => console.log(keyword)}>검색</button>
      </div>

      <div className="empty-result">
        <img className="empty-logo" src="/gdg-favicon.svg" alt="gdg 로고" />
        <p>검색 결과가 없습니다.</p>
      </div>
    </main>
  );
}

export default Content;