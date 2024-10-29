function expandImage(img, section) {
    var expandImg, imgText, container;
    if (section === 'hobbies') {
        expandImg = document.getElementById("expandedImgHobbies");
        imgText = document.getElementById("imgtextHobbies");
        container = document.getElementById("hobbiesContainer");
    } else if (section === 'campusLife') {
        expandImg = document.getElementById("expandedImgCampusLife");
        imgText = document.getElementById("imgtextCampusLife");
        container = document.getElementById("campusLifeContainer");
    }
    expandImg.src = img.src;
    imgText.innerHTML = img.alt;
    container.style.display = "flex";
}
