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
  import ProductCard from "../../Components/ProductCard/ProductCard";
  import ProductImage from "../../assets/featureCategory2.jpg"

  const FeaturedProducts = () => {
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
            <Typography fontSize={32} color={"#242424"}>FeaturedProducts</Typography>
              <FlexRow>
                  <ProductCard image={ProductImage} name={"tuqa"} discount={20} price={1000$} Btnname={"AddCart"}/>
                  <ProductCard image={ProductImage} name={"tuqa"} discount={20} price={1000$}  Btnname={"AddCart"} />
                  <ProductCard image={ProductImage} name={"tuqa"} discount={20} price={1000$}  Btnname={"AddCart"} />
              </FlexRow>
              <FlexRow>
                  <ProductCard image={ProductImage} name={"tuqa"} discount={20} price={1000$}  Btnname={"AddCart"}/>
                  <ProductCard image={ProductImage} name={"tuqa"} discount={20} price={1000$}  Btnname={"AddCart"} />
                  <ProductCard image={ProductImage} name={"tuqa"} discount={20} price={1000$}  Btnname={"AddCart"}/>
              </FlexRow>
              <FlexRow>
                  <ProductCard image={ProductImage} name={"tuqa"} discount={20} price={1000$}  Btnname={"AddCart"}/>
                  <ProductCard image={ProductImage} name={"tuqa"} discount={20} price={1000$}  Btnname={"AddCart"}/>
                  <ProductCard image={ProductImage} name={"tuqa"} discount={20} price={1000$}  Btnname={"AddCart"}/>
              </FlexRow>
            </SwipeableViews>
            <FlexRow style={{marginTop:40 , marginBottom:40}}>
             
             <Dot isGray={sliderIndex!==0} onClick={()=>{
                 setSliderIndex(0)
                 }}/>
             <Dot isGray={sliderIndex!==1} onClick={()=>{
                 setSliderIndex(1)
                 }}/>
             <Dot isGray={sliderIndex!==2} onClick={()=>{
                 setSliderIndex(2)
                 }}/>
             
            </FlexRow>
          </InnerSection>
          {/* <Pagination dots={3} index={sliderIndex} onChangeIndex={this.handleChangeIndex} /> */}
        </FlexBox>
      </FlexColumn>
    );
  };
  
  export default FeaturedProducts;