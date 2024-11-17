function enable_desktop_mode(replaceAll = false) {
    if (replaceAll) {
        document.getElementById('qrMessageContainer').classList.remove('is-hidden-touch');
        document.getElementById('mobileDisplayContainer').classList.remove('is-hidden-desktop');
        document.getElementById('mobileDisplayContainer').classList.add('is-hidden');
    }
    document.getElementById("qrCode").src = "https://media.discordapp.net/attachments/692931808916144181/1306444638605017088/qrCode2_v2.png?ex=673b4e22&is=6739fca2&hm=97aa162b7153a196d5a0a03e84b85f54e2dd09fedefe74bada733e7452d18c9d&quality=lossless";
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