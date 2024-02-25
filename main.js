/* Telegram Push Notification JS */
    window.onload = function () {
        setTimeout(showPopupIfNotHidden, 60000);
};

    function showPopupIfNotHidden() {
    if (!isPopupHidden()) {
        showPopup();
    setupPopupButtons();
    }
}

    function isPopupHidden() {
    return document.cookie.includes("hidePopup=true");
}

    function showPopup() {
    var popup = document.getElementById("popup-container");
    popup.style.display = "block";
}

    function setupPopupButtons() {
    var yesButton = document.getElementById("yes");
    yesButton.onclick = onYesButtonClick;

    var noButton = document.getElementById("no");
    noButton.onclick = onNoButtonClick;
}

    function onYesButtonClick() {
        openTelegramChannel();
    hidePopupForOneDay();
    hidePopup();
}

    function openTelegramChannel() {
        window.open('https://telegram.me/username', '_blank'); //Enter your telegram channel url in place of https://telegram.me/username
}

    function onNoButtonClick() {
        hidePopupForOneDay();
    hidePopup();
}

    function hidePopupForOneDay() {
    var date = new Date();
    date.setDate(date.getDate() + 1);
    document.cookie = "hidePopup=true; expires=" + date.toUTCString() + "; path=/";
}

    function hidePopup() {
  var popup = document.getElementById('popup-container');
    popup.classList.add('closePopup');
    setTimeout(function() {
        popup.style.display = 'none';
  }, 400);
}