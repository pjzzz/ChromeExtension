console.log('Chrome Extension Working!!');

/* the above script will run irrespective whether the button is clicked or not
as not under the function receving the message */

chrome.runtime.onMessage.addListener(extensionRun);

function extensionRun(message, sender, sendResponse){
    console.log(message.id);
    if( message.id === '100' ){
        let body = document.getElementsByTagName('body');
        for(by of body){
            by.style['background'] = '#000000 !important';
            by.style['color'] = ' #ffffff !important';
        }
        let paras = document.getElementsByTagName('p');
        for(p of paras){
            p.style['background-color'] = ' #000000 '; 
            p.style['color'] = '#ffffff';
        }
    }
}