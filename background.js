console.log('Background script running!!');

chrome.browserAction.onClicked.addListener(buttonClicked);

function buttonClicked(tab){
    console.log(tab);
    let extensionRun1 = {
        id: '100'
    };
    chrome.tabs.sendMessage(tab.id, extensionRun1);
}