# ChromeExtension
Extension to change any webpage to dark mode

How to install
-fork this repository.
-open chrome://extensions in chrome
-enable developer mode 
-click on Load Unpacked
-select the forked repository "ChromeExtension" folder
-chrome extension is installed!!
-if you just want to install this extension you can drag drop the ChromeExtension.crx file
 on chrome://extensions page

Objectives
-First to change the color of the background
-use ctrl+alt+d to toggle between modes
-add a panel to switch between different colors
-show live change in color of background
-auto detection of time for and therefore applying different background color

New
-Can probably be done using tab chrome.tabs.executeScript, 
 injects JavaScript code into the page for details-
 https://developer.chrome.com/extensions/tabs#method-executeScript
-chrome.tabs.query(   ), gets tabs that have specified properties, or all tabs if no property specififed
-find about webview