function toAC(){
    let elm = document.getElementsByTagName('img')
    const completeByManual = 'https://wsdmoodle.waseda.jp/theme/image.php/boost/core/1592591198/i/completion-manual-y'
    const completeByAuto = 'https://wsdmoodle.waseda.jp/theme/image.php/boost/core/1592591198/i/completion-auto-y'
    for (let i = 0; i < elm.length; i++){
        if(elm[i].hasAttribute('src')){
            if(elm[i].getAttribute('src') == completeByManual || elm[i].getAttribute('src') == completeByAuto){
                elm[i].setAttribute('src','https://i.imgur.com/iwVr5TQ.png')
            }
        }
    }
}
const observer = new MutationObserver(toAC);
observer.observe(document.head, {
    attributes: true,
    childList:  true
});
toAC()