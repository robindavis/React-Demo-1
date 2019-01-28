import React from 'react';

import './MainPage.css';

const MainPage = () => {
  return (
    <div id='mainPageContainer'>
    <div id='headerContainer'>
    <div id='headerIconContainer'>
    Header Icon
    </div>
    <div id='headerText'>
    Header Text
    </div>
    <div id='userLoginControlContainer'>
    <div id='userNameContainer'>
    Name
    </div>
    <div id='userLogoffContainer'>
    Log Off
    </div>
    </div>
    </div>
    <div id='navigationBarContainer'>
    <div id='homeLink'>
    Home
    </div>
    <div id='dealsLink'>
    Deals
    </div>
    <div id='bikesLink'>
    Bikes
    </div>
    <div id='carsLink'>
    Cars
    </div>
    <div id='trackOrderLink'>
    Track
    </div>
    <div id='profileLink'>
    Profile
    </div>
    </div>
    <div id='contentContainer'>
    <div id='adsLeftContainer'>
    Ads on Left
    </div>
    <div id='productsContentContainer'>
    <div id='dealOfTheDayContainer'>
    Promotional Content
    </div>
    <div id='bikesContainer'>
    Bikes Category
    </div>
    <div id='carsContainer'>
    Cars Category
    </div>
    </div>
    <div id='adsRightContainer'>
    Ads on Right
    </div>
    </div>
    <div id='footerContainer'>
    <div id='copyrightContainer'>
    Copyright
    </div>
    <div id='disclaimerContainer'>
    Disclaimer
    </div>
    <div id='footerLinksContainer'>
    <div id='contactUsLink'>
    Contact
    </div>
    <div id='guidelinesLink'>
    Guidlines
    </div>
    <div id='policiesLink'>
    Policies
    </div>
    </div>
    </div>
    </div>
  );
};

export default MainPage;