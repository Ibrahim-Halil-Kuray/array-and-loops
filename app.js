let supheli = Math.floor(Math.random() * 10 + 1); // 1 den 10 kadar sayi tahkin etmesini istedik .
tahminHakki = 4;                                  //kac defa tahmin etme hakki olmasini istiyorsak onu belirttik.
//console.log(supheli);

for (sayac = 0; sayac < tahminHakki; sayac++) {   //Döngü icinde sayacimizi, sartimizi ve sayacin artis miktarini belirledik.

    let sayiMetni = prompt("Supheli nerde?");     // tahmin girilecek alani olusturduk.
    let number = parseInt(sayiMetni);             // girilen tahmin sayisinin sayi olarak algilanmasini sagladik.

    if (supheli == number) {                      //dogru tahmin durumunda yapilacak islemi tanimladik
        console.log("Tebrikler supheliyi buldunuz puaniniz", 100 - 20 * (sayac));
        break;
    } else if (supheli < number) {                //kullaiciya yardimci olacak komutlari girdik
        console.log("Daha kucuk bir vagon numarasi tahmin et");
    } else if (supheli > number) {
        console.log("Daha buyuk bir vagon numarasi tahmin et");


    }
    if (sayac == (tahminHakki - 1)) {             //tahminin dogru yapilamamasi durumunda yapilacak islemi tanimladik.
        console.log("Malesef supheli kacti");
    }
}