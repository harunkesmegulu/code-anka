import Member from "./Members"
import Container  from "react-bootstrap/Container";
import {data} from "../helper/data"

const Card = () => {
  console.log(data);
  return (
    <Container className="Contain"style={{background:"black"}}>
      <h1>Partners</h1>
      {data.map((member)=>{
        return(  <Member={...member}/>

        )
      })}
      

      
    </Container>
  )
}

export default Card;
