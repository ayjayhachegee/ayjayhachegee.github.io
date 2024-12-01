function enable_desktop_mode(replaceAll = false) {
    if (replaceAll) {
        document.getElementById('qrMessageContainer').classList.remove('is-hidden-touch');
        document.getElementById('mobileDisplayContainer').classList.remove('is-hidden-desktop');
        document.getElementById('mobileDisplayContainer').classList.add('is-hidden');
    }
    document.getElementById("qrCode").src = "../../../resources/media/images/qrCode2_v2.png";
    document.getElementById("qrMessage").innerHTML = "Now go back to desktop...";
}

function main() {
    if (window.location.href.indexOf("start") != -1) {
        document.getElementById("qrMessageContainer").remove()
        document.getElementById("mobileDisplayContainer").remove()
    }
}

window.onload = function() {
    main();
};