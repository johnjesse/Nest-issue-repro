import { useEffect } from "react";

export const EventSubscriber = () => {
  useEffect(() => {
    const eventSource = new EventSource("http://localhost:3000/sse");
    console.log("Statuses");
    console.log("CONNECTING", eventSource.CONNECTING);
    console.log("OPEN", eventSource.OPEN);
    console.log("CLOSED", eventSource.CLOSED);

    eventSource.onmessage = (event) => console.log(event.data);

    const interval = window.setInterval(
      () => console.log("Status", eventSource.readyState),
      3000
    );

    return () => {
      eventSource.close();
      window.clearInterval(interval);
    };
  }, []);

  return null;
};
