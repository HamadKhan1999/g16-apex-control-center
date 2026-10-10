(function() {
  "use strict";
  let intervalId = null;
  let frameInterval = 1e3 / 30;
  self.onmessage = (event) => {
    const { type, payload } = event.data;
    switch (type) {
      case "start":
        if (payload?.frameInterval) {
          frameInterval = payload.frameInterval;
        }
        startTimer();
        break;
      case "stop":
        stopTimer();
        break;
      case "updateInterval":
        if (payload?.frameInterval) {
          frameInterval = payload.frameInterval;
          if (intervalId !== null) {
            stopTimer();
            startTimer();
          }
        }
        break;
    }
  };
  function startTimer() {
    if (intervalId !== null) return;
    intervalId = setInterval(() => {
      self.postMessage({ type: "tick" });
    }, frameInterval);
    self.postMessage({ type: "started" });
  }
  function stopTimer() {
    if (intervalId !== null) {
      clearInterval(intervalId);
      intervalId = null;
    }
    self.postMessage({ type: "stopped" });
  }
})();
