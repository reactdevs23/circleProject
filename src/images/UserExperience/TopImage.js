import React from "react";
//#F3A851
const TopImage = ({ color }) => {
  return (
    <div className="img">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        viewBox="0 0 385 358"
        fill="none"
      >
        <path
          d="M192.797 0.510406C86.6927 0.510406 0.677063 86.5365 0.677063 192.646C0.677063 194.042 0.749979 195.411 0.786438 196.807C29.7291 179.323 63.6562 169.255 99.9375 169.255C134.943 169.255 167.74 178.672 196 195.016C252.286 227.589 290.479 287.865 291.964 357.224C347.531 323.667 384.724 262.771 384.911 193.177C384.911 192.99 384.922 192.818 384.922 192.646C384.922 86.5365 298.906 0.510406 192.797 0.510406Z"
          fill={color}
        />
      </svg>
    </div>
  );
};

export default TopImage;