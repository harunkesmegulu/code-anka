import Container from "react-bootstrap/Container";
import Image from 'react-bootstrap/Image';
import codeAnkaLogo from "../assets/anka.jpg";

const Header = () => {
  return (
    <Container>
      <Image fluid src={codeAnkaLogo} width="250px"> </Image>
    </Container>
  )
};

export default Header;
