import React from "react";

function ViewRecruitmentPackage() {
    const [width, setWidth] = React.useState(0);
    const [height, setHeight] = React.useState(0);
  
    React.useEffect(() => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
      const handleResize = () => {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
      };
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);
  return (
    <embed
      src="UofTHacks11.pdf"
      width={width}
      height={height}
      type="application/pdf"
    />
  );
}

export default ViewRecruitmentPackage;
