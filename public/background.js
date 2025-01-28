chrome.runtime.onInstalled.addListener(() => {
  console.log("Extension installed");
});

// Listen for push events
self.addEventListener("push", (event) => {
  const data = event.data ? event.data.json() : {};
  console.log("Push message received:", data);

  self.registration.showNotification(data.title || "Default Title", {
    body: data.body || "Default message body",
    icon: data.icon || "icon.png",
  });
});

self.addEventListener("pushsubscriptionchange", (event) => {
  console.log("Push subscription changed", event);
});
