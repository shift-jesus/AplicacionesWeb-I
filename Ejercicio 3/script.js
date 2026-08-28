function showPage(evt, pageId) {
    var pages = document.getElementsByClassName('page');
    for (var i = 0; i < pages.length; i++) {
        pages[i].classList.remove('active');
    }
    var btns = document.getElementsByClassName('nav-btn');
    for (var j = 0; j < btns.length; j++) {
        btns[j].classList.remove('active');
    }
    document.getElementById(pageId).classList.add('active');
    evt.currentTarget.classList.add('active');
}
