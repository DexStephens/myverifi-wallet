const APPLICATION_SERVER_KEY =
  "BBW8lP5bRVV4HfaXYBugMga_dXYzVYvKI0Dn4EYkbWkWgTGh-gxypPo8WMbXtZGvI3S_LutfNLTz1NZ75mCdQj4";

async function subscribeUserVisibleOnlyFalse(email) {
  const applicationServerKey = urlB64ToUint8Array(APPLICATION_SERVER_KEY);
  try {
    console.log(self.registration);
    await self.registration.ready;
    let subscriptionData = await self.registration.pushManager.subscribe({
      userVisibleOnly: false,
      applicationServerKey: applicationServerKey,
    });
    console.log("[Service Worker] Extension is subscribed to push server.");
    postSubscriptionDataToServer(subscriptionData, email);
  } catch (error) {
    console.error("[Service Worker] Failed to subscribe, error: ", error);
  }
}

async function postSubscriptionDataToServer(subscription, email) {
  const response = await fetch("http://localhost:3000/subscriptions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ subscription, email }),
  });

  const data = await response.json();

  console.log(
    "[Service Worker] Subscription data to be pasted in the test push" +
      "notification server: " +
      JSON.stringify(response)
  );
}

function urlB64ToUint8Array(base64String) {
  const padding = "=".repeat((4 - (base64String.length % 4)) % 4);
  const base64 = (base64String + padding).replace(/-/g, "+").replace(/_/g, "/");

  const rawData = atob(base64);
  const outputArray = new Uint8Array(rawData.length);

  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
}

self.addEventListener("push", function (event) {
  console.log("[Service Worker] Push Received.");
  console.log(
    `[Service Worker] Push had this data/text: "${JSON.parse(
      event.data.text()
    )}"`
  );
});

chrome.storage.onChanged.addListener(async (changes, namespace) => {
  console.log(namespace);
  const {
    wallet: { oldValue, newValue },
  } = changes;
  if (!oldValue && newValue) {
    subscribeUserVisibleOnlyFalse(newValue.email);
  }
});
