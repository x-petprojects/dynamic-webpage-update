# Dynamic Webpage Update // Chrome Extension

This Chrome Extension monitors open YouTube tabs and periodically performs actions (such as "pinging") while the tab is active. It also tracks when YouTube tabs are opened, closed, or frozen, and manages a list of active YouTube tabs.

## Features

* Tracks YouTube Tabs: Keeps a list of all open tabs with the URL https://www.youtube.com/.
* Periodic Actions: For each new YouTube tab, the extension runs a periodic task (every 20 seconds) as long as the tab remains open and active.
* Tab State Handling: Detects when a tab is frozen and stops the periodic task for that tab.
* Tab Cleanup: Removes tabs from the tracking list when they are closed or navigated away from YouTube.

## How It Works

* Listens for tab updates and removals using the Chrome Tabs API.
* When a YouTube tab is detected, it starts a loop that logs activity every 20 seconds.
* If a tab is closed, navigated away, or frozen, it stops tracking that tab.

## Installation

1. Clone or download this repository.
2. Open Chrome and go to chrome://extensions/.
3. Enable "Developer mode".
4. Click "Load unpacked" and select the extension folder.

## Permissions

This extension requires the following permissions:

* tabs – To monitor and interact with browser tabs.

## Customization

You can modify the periodic action (currently a console.log) in background.js to perform any task you need.

---

Note:
This extension currently only tracks the main YouTube homepage (https://www.youtube.com/). To track other YouTube URLs, update the URL check in background.js.
