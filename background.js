console.log('Background script running!!');

chrome.browserAction.onClicked.addListener(buttonClicked);
let extensionRun1 = 0;

function changeMode(tab) {
    let swtch = {
        turn: "on"
    };
    if (extensionRun1 % 2 === 1) {
        console.log(extensionRun1);
        swtch.turn = "off";
    } else {
        swtch.turn = "on";
    }
    chrome.tabs.sendMessage(tab.id, swtch);
    if(swtch.turn === "on")
    {
        chrome.browserAction.setIcon({ path:'icons/icons8-eye-16.png'});
    }else
    {
        chrome.browserAction.setIcon({path:'icons/16.png'});
    }
    extensionRun1 += 1;
}

function buttonClicked(tab){
    console.log('icon clicked');
    changeMode(tab);
}

chrome.commands.onCommand.addListener(function (command,tab) {
    if (command === 'toggle') {
        console.log(command,' command entered');
        //changeMode(tab);
        let swtch = {
            turn: "on"
        };
        if (extensionRun1 % 2 === 1) {
            console.log(extensionRun1);
            swtch.turn = "off";
        } else {
            swtch.turn = "on";
        }
        /* chrome.tabs.sendMessage(swtch); */
        extensionRun1 += 1;
    }
});