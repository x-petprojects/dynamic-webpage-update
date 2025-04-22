let youtubeTabs = [];

chrome.tabs.onUpdated.addListener(async (tabId, changeInfo, tab) => {
  new Promise(resolve => setTimeout(resolve, 5000));
  if (tab.url === 'https://www.youtube.com/') {
    if (!youtubeTabs.includes(tabId)) {
      youtubeTabs.push(tabId);

      while (youtubeTabs.length > 0) {
        console.log(`Pinging for tab: ${tabId}`);
        console.log('youtubeTabs length:', youtubeTabs.length);
        
        if (changeInfo.frozen) {
          console.log(`Tab ${tabId} is frozen, skipping ping.`);
          break;
        }
        await new Promise(resolve => setTimeout(resolve, 20000)); // Ping every 20 seconds
      }
    }
  } else {
      if (youtubeTabs.includes(tabId)) {
        youtubeTabs = youtubeTabs.filter(id => id !== tabId);
        console.log(`Tab removed: ${tabId}, Remove Info:`, changeInfo);
      };
  }
});

chrome.tabs.onRemoved.addListener((tabId, removeInfo) => {
  if (youtubeTabs.includes(tabId)) {
    youtubeTabs = youtubeTabs.filter(id => id !== tabId);
    console.log(`Tab removed: ${tabId}, Remove Info:`, removeInfo);
  }
});
