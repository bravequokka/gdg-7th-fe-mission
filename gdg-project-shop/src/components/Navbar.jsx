function Navbar()
{
    return(
        <nav className="navbar">
            <img src="/gdg-favicon.svg" alt ="gdg 로고"/>

            <div className="navbar-filters">
                <button className="filter-button" onClick={() => console.log("카테고리 필터링 클릭")}>
                    카테고리 필터링
                </button>
                <button className="filter-button" onClick={() => console.log("가격 범위 필터링 클릭")}>
                    가격 범위 필터링
                </button>
                <button className="filter-button" onClick={() => console.log("상품 정렬 클릭")}>
                    상품 정렬
                </button>
            </div>
            
            
            <button className="admin-button" onClick={() => console.log("관리자 버튼 클릭")}>관리자</button>
            
        </nav>
    );
}

export default Navbar;