// Para utilizar o componente crie o import na página que deseja e 
// coloque o nome da pessoa entre <Footer>Nome</Footer>
// passe a informação dentro da tag Footer - LINK
// <Footer link={}>d0rio</Footer>

import "./footer.module.css";
import SocialLinks from "../socialLinks/socialLinks";
import "https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"

const Footer = ({ children, link }) => {
  return (
    <footer>
      <p>
        Feito com <ion-icon name="heart" /> por {""}{" "}
        <a href={link} target="_blank">
          {children}
        </a>
        </p>
        <SocialLinks icon={"logo-github"} href={"https://github.com/di0rio"}/>
        <SocialLinks icon={"logo-instagram"} href={"https://www.instagram.com/di0riocaua/"}/>
        <SocialLinks icon={"logo-twitter"} href={"https://twitter.com/DiorioCaua"}/>
    </footer>
  );
};

export default Footer;
