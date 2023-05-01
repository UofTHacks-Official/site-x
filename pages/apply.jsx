// import React from "react";

// function ViewRecruitmentPackage() {
//   const [width, setWidth] = React.useState(0);
//   const [height, setHeight] = React.useState(0);

//   React.useEffect(() => {
//     setWidth(window.innerWidth);
//     setHeight(window.innerHeight);
//     const handleResize = () => {
//       setWidth(window.innerWidth);
//       setHeight(window.innerHeight);
//     };
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   return (
//     <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", overflow: "scroll"}}>
//       <object
//         data="UofTHacks11.pdf"
//         type="application/pdf"
//         width={width}
//         height={height}
//         style={{ maxWidth: "100%", maxHeight: "100%", overflow: "scroll" }}
//       >
//         <p>
//           Your browser does not support PDF viewing. Please download the PDF to
//           view it:{" "}
//           <a href="UofTHacks11.pdf" download>
//             Download PDF
//           </a>
//         </p>
//       </object>
//     </div>
//   );
// }

// export default ViewRecruitmentPackage;
