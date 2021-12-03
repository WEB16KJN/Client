import React, { useState } from 'react';
import Profile from './Profile';
import Schedule from './Schedule';
import ProfileScheduleBarLayout from './ProfileScheduleBar.layout';
import { IcArrowNext } from '../common/Icon';
import { IcArrowPrevious } from '../common/Icon';
import SliderLayout from './Slider.layout';
import styled from 'styled-components';

export default function ProfileScheduleBar() {
  const SliderLeftWrapper = styled.div`
    width: 100vw;
    height: 205px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    & > *:first-child {
      margin-left: 1px;
      visibility: hidden;
    }
    & > *:last-child {
      margin-right: 40px;
    }
  `;
  const SliderRightWrapper = styled.div`
    width: 100vw;
    height: 205px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    right: 0;
    & > *:first-child {
      margin-left: 21px;
    }
    & > *:last-child {
      margin-right: 40px;
      visibility: hidden;
    }
  `;
  const ProfileScheduleBarLeftWrapper = styled.div`
    padding: 0 20px;
    width: 1082px;
    display: flex;
    position: absolute;
    left: 0;
  `;
  const ProfileScheduleBarRightWrapper = styled.div`
    padding: 0 20px;
    width: 1082px;
    display: flex;
    position: absolute;
    right: 0;
  `;

  const [sliderWrapper, setSliderWrapper] = useState(SliderLeftWrapper);
  const [profileScheduleBarWrapper, setProfileScheduleBarWrapper] = useState(
    ProfileScheduleBarLeftWrapper,
  );

  const handleSliderButton = (e) => {
    if (e.clientX > 180) {
      setSliderWrapper(SliderRightWrapper);
      setProfileScheduleBarWrapper(ProfileScheduleBarRightWrapper);
    } else {
      setSliderWrapper(SliderLeftWrapper);
      setProfileScheduleBarWrapper(ProfileScheduleBarLeftWrapper);
    }
  };
  return (
    <ProfileScheduleBarLayout StyledMobileToTabletWrapper={profileScheduleBarWrapper}>
      <Profile />
      <Schedule />
      <SliderLayout StyledMobileToTabletWrapper={sliderWrapper}>
        <IcArrowPrevious onClick={(e) => handleSliderButton(e)} />
        <IcArrowNext onClick={(e) => handleSliderButton(e)} />
      </SliderLayout>
    </ProfileScheduleBarLayout>
  );
}
