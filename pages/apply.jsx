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
    <object
      data="UofTHacks11.pdf"
      type="application/pdf"
      width={width}
      height={height}
    />
  );
}

export default ViewRecruitmentPackage;
