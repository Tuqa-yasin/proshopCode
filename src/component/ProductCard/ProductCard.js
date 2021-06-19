import {CardContainer, CardImage} from "./ProductCard.Styles";
import { FlexRow, Typography} from "../../App.Styles";
import Rating from '@material-ui/lab/Rating';
import Button from "../Button/Button";
import BookmarkBorderIcon from '@material-ui/lab/BookmarkBorder';

function ProductCard(props){
    return(
        <CardContainer>
            <CardImage src={props.image} alt={props.name}/>
            <Typography fontSize={24}>
                {props.name}
            </Typography>
            <Rating name="simple-controlled" value={props.rate}/>
            <FlexRow>
               {props.discount && <Typography color={"#FC4059"} fontSize={30}>
                   {props.discount}
               </Typography>
                } 
                <Typography fontSize={30} fontWeight={700}>
                   {props.price}
               </Typography>   
            </FlexRow>
             <Button>{props.Btnname}</Button>
        </CardContainer>
    )
};
export default ProductCard;