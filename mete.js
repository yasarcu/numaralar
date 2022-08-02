// var besceTiklaAc = 3;
window.onload = function () {
    let genislik = document.getElementById('omnom').offsetWidth;
    let uzunluk = document.getElementById('omnom').offsetHeight;
    document.getElementById('kos').style.width = genislik + 'px';
    document.getElementById('kos').style.height = uzunluk + 'px';
}

function play(deger, _deger) {
    let isim = document.getElementById("metefe").textContent;
    if (isim == "Mete") {
        deger = deger + "Mete";
    }
    var audio = document.getElementById(deger);
    // ikinci defer buttona tiklaninca tekrar eski rengine donsun hatasina bak
    var sayiBack = _deger.style.backgroundColor;
    if (sayiBack != "rgb(227, 26, 23)") {
        _deger.style.backgroundColor = "#e31a17";
    }
    else {
        _deger.style.backgroundColor = "#000";
    }
    // besceTiklaAc = 3;
    // document.getElementById('kos').textContent = "Kosoferta ";
    // @ts-ignore
    audio.play();
}
function isimler() {
    let isim = document.getElementById("metefe").textContent;
    if(isim == "Efe") {
        document.getElementById('metefe').textContent = "Mete";

    } else {
    document.getElementById('metefe').textContent = "Efe";
}
}
 
// if(document.getElementById("metefe").textContent = "Mete")

    // else {
    //     document.getElementById("metefe").textContent = "Efe";
// if (condition) {
    
// } else {
    
// }
