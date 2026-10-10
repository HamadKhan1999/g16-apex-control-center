(function() {
  "use strict";
  let intervalId = null;
  let interval = 33;
  function stopTimer() {
    if (intervalId === null) return;
    clearInterval(intervalId);
    intervalId = null;
  }
  function startTimer() {
    stopTimer();
    intervalId = setInterval(() => {
      self.postMessage({ type: "tick" });
    }, interval);
  }
  self.onmessage = (event) => {
    const { type, interval: nextInterval } = event.data;
    switch (type) {
      case "set-interval":
        if (typeof nextInterval === "number" && nextInterval > 0) {
          interval = nextInterval;
          if (intervalId !== null) startTimer();
        }
        break;
      case "start":
        startTimer();
        break;
      case "stop":
        stopTimer();
        break;
    }
  };
})();
