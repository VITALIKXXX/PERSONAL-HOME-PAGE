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
                My path .....
            </Summary>
            <StyledButtonLink href={`mailto:${email}`} title={email}>
                <ButtonIcon />
                Hire me
            </StyledButtonLink>
        </div>
    </Wrapper>
);