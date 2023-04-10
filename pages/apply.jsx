import React from 'react';
import { BrowserView, MobileView } from 'react-device-detect';

function ViewRecruitmentPackage() {
  return (
    <div>
      <MobileView>
      <object data='UofTHacks11.pdf'>
        <a href="UofTHacks11.pdf">Download UofTHacks Recruitment Package!</a>
      </object>
      </MobileView>
      <BrowserView>
      <div style={{ height: "100vh" }}>
      <embed src="UofTHacks11.pdf" width="100%" height="100%" type="application/pdf" />
      </div>
      </BrowserView>
      </div>
  );
}

export default ViewRecruitmentPackage;
