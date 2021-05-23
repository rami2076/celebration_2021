function seek(value) {
    let birthday = document.getElementById('birthday');
    let congratulation = document.getElementById('congratulation');
    if (hasBirthday(value)) {
        view(congratulation)
        noneView(birthday)
    } else {
        view(birthday)
        noneView(congratulation)
    }
    dark()
    takaraView()
}

function hasBirthday(value) {
    return value === 'birthday'
}

function hide() {
    light()
    galleryView()
    slickInit()
}


function view(target) {
    target.classList.remove('hide')
}

function noneView(target) {
    target.classList.add('hide')
}

function takaraView() {
    let takara = document.getElementById('takara');
    let explorer = document.getElementById('explorer');
    let gallery = document.getElementById('gallery-box');
    view(takara)
    view(explorer)
    noneView(gallery)
}


function galleryView() {
    let explorer = document.getElementById('explorer');
    let gallery = document.getElementById('gallery-box');
    noneView(explorer)
    view(gallery)

}


//
// document.body.addEventListener("click", function (e) {
//     party.settings.debug = true;
//     e.preventDefault();
//     party.confetti(e);
// });
// document.body.addEventListener("contextmenu", function (e) {
//     party.settings.debug = true;
//     e.preventDefault();
//     party.sparkles(e);
// });

function changeTheme() {
    let element = document.body;
    element.classList.toggle("dark-mode");
}

function dark() {
    let element = document.body;
    element.classList.add("dark-mode");
}


function light() {
    let element = document.body;
    element.classList.remove("dark-mode");
}



