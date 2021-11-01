import {
  Facebook,
  Instagram,
  LinkedIn,
  MailOutline,
  Phone,
  Room,
  Twitter,
} from "@mui/icons-material";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1``;

const Desc = styled.p`
  margin: 20px 0px;
`;

const SocialContainer = styled.div`
  display: flex;
`;
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  cursor: pointer;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
  width: 50%;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>Lama.</Logo>
        <Desc>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ultrices
          ac justo bibendum elementum. Aliquam erat volutpat. Pellentesque
          maximus euismod dictum. Etiam dictum elit sed nibh vulputate efficitur
          ac a sem. Duis eget eros at ante cursus fringilla a id eros. Praesent
          pharetra, augue et laoreet fermentum, erat ante facilisis.
        </Desc>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <Twitter />
          </SocialIcon>
          <SocialIcon color="2F86A6">
            <LinkedIn />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Men's Fashion</ListItem>
          <ListItem>Women's Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>WishList</ListItem>
          <ListItem>Terms&Conditions</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room style={{ marginRight: "10px" }} /> Shop no 10, Laxmi Road, Pune,
          411030
        </ContactItem>
        <ContactItem>
          <Phone style={{ marginRight: "10px" }} /> +91 99887 99887
        </ContactItem>
        <ContactItem>
          <MailOutline style={{ marginRight: "10px" }} />
          contact@lama.dev
        </ContactItem>
        <Payment src="https://i0.wp.com/ecoheater.ie/wp-content/uploads/2018/10/cards-.jpg?w=570&ssl=1" />
      </Right>
    </Container>
  );
};

export default Footer;
