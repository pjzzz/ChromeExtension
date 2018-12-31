console.log('Chrome Extension Working!!');

/* the above script will run irrespective whether the button is clicked or not
as not under the function receving the message */

chrome.runtime.onMessage.addListener(extensionRun);
let body = document.getElementsByTagName('body');
let paras = document.getElementsByTagName('p');
let tb = body, tp = paras;

function extensionRun(message, sender, sendResponse){
    /* if(body[0].style['background'] != 'rbg(0, 0, 0)')
    {
        console.log('why??');
        message.turn = 'on';
    }else{
        console.log(message.turn);
        message.turn = 'off';
    } */
    if( message.turn === "on" ){
        console.log('Dark!!');
        for(by of body){
            by.style['background'] = '#000000';
            by.style['color'] = ' #ffffff';
        }
        for(p of paras){
            p.style['background-color'] = ' #000000 '; 
            p.style['color'] = '#ffffff';
        }
    }else if(message.turn === "off")
    {
        console.log('Light!!');
        var i;
        for(i = 0; i < paras.length; i++){
            paras[i].style = tp[i].style;
        }
        for(i = 0; i < body.length; i++){
            body[i].style = tb[i].style;
        }
    }
    console.log(by.style['background']);
}