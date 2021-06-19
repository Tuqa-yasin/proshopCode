import {
    FlexBox,
    FlexColumn,
    InnerSection,
    Typography,
  } from "../../../App.Styles";
  import SwipeableViews from "react-swipeable-views";
  import { useState } from "react";
  import { HeroBox, HeroTitle, SideBox } from "./HomeScreen.Styles";
  import Button from "../../../Components/Button/Button";
  
  const styles = {
    root: {
      position: "relative",
      width: "100%",
      height: 678,
    },
  };
  
  const HomeScreen = () => {
    const [sliderIndex, setSliderIndex] = useState(0);
  
    const handleChangeIndex = () => {};
  
    return (
      <FlexColumn>
        <FlexBox color={"#F2F2F2"}>
          <InnerSection>
            <SwipeableViews
              style={Object.assign({}, styles.root, styles.root)}
              index={sliderIndex}
              onChangeIndex={handleChangeIndex}
            >
              <HeroBox>
                <SideBox>
                  <Typography fontSize={32} color={"#242424"}>
                    Save up to $39.99
                  </Typography>
                  <HeroTitle>PlayStation 5</HeroTitle>
                  <Typography fontSize={32} color={"#242424"}>
                    Lightning-fast download speed with super-fast SSD storage
                  </Typography>
                  <Button
                    text="Shop now"
                    width={"220px"}
                    borderRadius={20}
                    style={{ marginTop: 42, height: 52 }}
                  />
                </SideBox>
                <SideBox></SideBox>
              </HeroBox>
            </SwipeableViews>
            <FlexRow style={{marginBottom:30}}>
             <Arrow isleft={true} onClick={()=>{
               if(sliderIndex===0)
                 setSliderIndex(2)
               else
                 setSliderIndex(sliderIndex-1)
             }}>
  
             </Arrow>
             <Dot isGray={sliderIndex!==0} onClick={()=>{
                 setSliderIndex(0)
                 }}/>
             <Dot isGray={sliderIndex!==1} onClick={()=>{
                 setSliderIndex(1)
                 }}/>
             <Dot isGray={sliderIndex!==2} onClick={()=>{
                 setSliderIndex(2)
                 }}/>
             <Arrow  onClick={()=>{
               if(sliderIndex===2)
                 setSliderIndex(0)
               else
                 setSliderIndex(sliderIndex+1)
             }}>
  
             </Arrow>
            </FlexRow>
          </InnerSection>
          {/* <Pagination dots={3} index={sliderIndex} onChangeIndex={this.handleChangeIndex} /> */}
        </FlexBox>
      </FlexColumn>
    );
  };
  
  export default HomeScreen;
  