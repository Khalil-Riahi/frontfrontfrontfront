// import React from "react";

// export default function Container(props) {
//   return (
//     <div
//       className={`container p-8 mx-auto xl:px-0 ${
//         props.className ? props.className : ""
//       }`}>
//       {props.children}
//     </div>
//   );
// }

// components/container.js
import React from "react";

export default function Container({ children, className = "" }) {
  return (
    <div className={`w-full max-w-screen-xl mx-auto px-4 xl:px-8 ${className}`}>
      {children}
    </div>
  );
}