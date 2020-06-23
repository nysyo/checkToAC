function toAC(){
    let e = document.getElementsByTagName('img')
    const completeByManual = 'https://wsdmoodle.waseda.jp/theme/image.php/boost/core/1592591198/i/completion-manual-y'
    const completeByAuto = 'https://wsdmoodle.waseda.jp/theme/image.php/boost/core/1592591198/i/completion-auto-y'
    for (let i = 0; i < e.length; i++){
        if(e[i].hasAttribute('src') && (e[i].getAttribute('src') == completeByManual || e[i].getAttribute('src') == completeByAuto)){
            e[i].setAttribute('src','https://i.imgur.com/iwVr5TQ.png')
        }
    }
}
var observer = new MutationObserver(toAC);
observer.observe(document.head, {
    attributes: true,
    childList:  true
});
toAC();