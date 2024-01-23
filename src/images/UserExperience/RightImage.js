import React from "react";
//#EDC999
const RightImage = ({ color }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      viewBox="0 0 385 361"
      fill="none"
    >
      <path
        d="M285.911 0.177094C285.724 69.7708 248.531 130.667 192.964 164.224C164.01 181.698 130.078 191.771 93.7969 191.771C60.1146 191.771 28.4792 183.083 0.947917 167.844C0.947917 168.031 0.9375 168.203 0.9375 168.375C0.9375 239.479 39.5885 301.51 97 334.734C125.271 351.099 158.052 360.5 193.062 360.5C299.167 360.5 385.182 274.484 385.182 168.375C385.182 95.9531 345.099 32.9115 285.911 0.177094Z"
        fill={color}
      />
    </svg>
  );
};

export default RightImage;
