import styles from "../app.module.css";
import { IonIcon } from "@ionic/react";
import { logoGithub, logoTwitter, logoDiscord, logoInstagram } from  "ionicons/icons";

const ProfileIconBar = () => {

  return (
    <div style={{ display:"flex", fontSize:"18px" }}>
        <a
          href="#"
          rel="noopener noreferrer"
          style={{ padding:"0px 6px" }}
        >
          <IonIcon icon={logoDiscord} />
        </a>
        <a
          href="#"
          rel="noopener noreferrer"
          style={{ padding:"0px 6px" }}
        >
          <IonIcon icon={logoTwitter} />
        </a>
        <a
          href="#"
          rel="noopener noreferrer"
          style={{ padding:"0px 6px" }}
        >
          <IonIcon icon={logoInstagram} />
        </a>
        <a
          href="https://github.com/1usProject"
          target="_blank"
          rel="noopener noreferrer"
          style={{ padding:"0px 6px" }}
        >
          <IonIcon icon={logoGithub} />
        </a>
    </div>
  );
};

export default ProfileIconBar;