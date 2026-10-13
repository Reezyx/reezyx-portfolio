import { useState } from "react";

function MediaImage({ className = "", ...props }) {
  const [loaded, setLoaded] = useState(false);
  return (
    <img
      {...props}
      className={`${className} media-image ${loaded ? "media-image--loaded" : "media-image--pending"}`}
      onLoad={() => setLoaded(true)}
      onError={() => setLoaded(true)}
    />
  );
}

export default MediaImage;
