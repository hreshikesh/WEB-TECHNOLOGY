import { useEffect, useState } from "react";
import "../App.css";

function NetworkStatus() {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const online = () => setIsOnline(true);
    const offline = () => setIsOnline(false);

    window.addEventListener("online", online);
    window.addEventListener("offline", offline);

  }, []);

  return (
    <div className="card">
      <h3 className={isOnline ? "success" : "error"}>
        Status: {isOnline ? "Online" : "Offline"}
      </h3>
    </div>
  );
}

export default NetworkStatus;
