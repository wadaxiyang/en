var _prevOnload = window.onload;

window.onload = function() {
    var switchLang = document.getElementsByClassName("menu-item menu-item-switch-to-chinese")[0];
    switchLang.onclick = function() {
        var href = window.location.href;
        var includesKeywords = href.includes("/en/about/") || href.includes("/en/tags/")|| href.includes("/en/categories/") || href.includes("/en/archives/");
        if(includesKeywords) {
            window.location.href = href.replace('/en/', '/');
        }
        else {
            window.location.href = "https://wadaxiyang.github.io";
        }
        if(typeof(_prevOnload) === 'function') {
            _prevOnload();
        }
        return false;
    }
}
