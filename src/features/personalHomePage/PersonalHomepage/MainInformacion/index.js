import vitalliTomenkoProfile from "./profile.jpeg";
import { Avatar, StyledButtonLink, ButtonIcon, Name, Summary, ThisIs, Wrapper, Icon } from "./styled";
import faceIcon from "./faceIcon.png";
import laptopIcon from "./laptopIcon.png";
import { email } from "../email";

export const MainInformation = () => (
    <Wrapper>
        <Avatar src={vitalliTomenkoProfile} alt="Vitalii Tomenko" />
        <div>
            <ThisIs>This is</ThisIs>
            <Name>Vitalii Tomenko</Name>
            <Summary>
                <Icon src={faceIcon} alt="" />
                <Icon src={laptopIcon} alt="" />
                I am a passionate JavaScript developer with experience in creating projects using JavaScript and React. I enjoy solving problems, learning new technologies, and building applications that make an impact. Constantly improving my skills and working towards becoming a professional developer.
            </Summary>
            <StyledButtonLink href={`mailto:${email}`} title={email}>
                <ButtonIcon />
                Hire me
            </StyledButtonLink>
        </div>
    </Wrapper>
);