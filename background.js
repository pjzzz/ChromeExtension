console.log('Background script running!!');

chrome.browserAction.onClicked.addListener(buttonClicked);
let extensionRun1 = 0;

function buttonClicked(tab){
    console.log(tab);
    let swtch = {
        turn: "on"
    };
    if(extensionRun1%2 === 1){
        console.log(extensionRun1);
        swtch.turn = "off";
    }
    chrome.tabs.sendMessage(tab.id, swtch);
    extensionRun1+=1;
}