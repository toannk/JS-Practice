const searchAdvanceTarget = document.getElementById('show_search_advance'),
      searchAdvanceDiv    = document.getElementById('search_advance');

searchAdvanceTarget.addEventListener("click", function(event) {
    event.preventDefault();
    let searchAdvanceDivDisplayStatus = searchAdvanceDiv.style.display;
    searchAdvanceDiv.style.display = (searchAdvanceDivDisplayStatus === '' || searchAdvanceDivDisplayStatus === 'none') ? 'table-row' : 'none';
    if (searchAdvanceTarget.innerText === "Tìm kiếm nâng cao") {
        searchAdvanceTarget.innerText = "Bỏ tìm kiếm nâng cao";
    } else {
        searchAdvanceTarget.innerText = "Tìm kiếm nâng cao";
    }
    return false;
})