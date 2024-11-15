function main() {
    if (window.screen.width <= 1080) {
        document.getElementById("qrCode").src = "https://media.discordapp.net/attachments/692931808916144181/1306444638605017088/qrCode2_v2.png?ex=6736b0e2&is=67355f62&hm=49b2dc49832a7fc305d387c5c31a2b1081f85a17675c0f298e7e5d8161864a34&=&quality=lossless";
        document.getElementById("qrMessage").innerHTML = "Now go back to desktop...";
    }
    if (window.location.href.indexOf("start") != -1) {
        document.getElementById("qrMessageContainer").remove()
    }
}

window.onload = function() {
    main();
};