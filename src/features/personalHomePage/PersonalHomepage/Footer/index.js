import { email } from "../email";
import { SocialIcons } from "./SocialIcons";
import { Address, EmailLink, EmailWrapper, LetsTalk, Paragraph, Wrapper } from "./styled";

export const Footer = () => (
    <Wrapper>
        <LetsTalk>Let's talk!</LetsTalk>
        <Address>
            <EmailWrapper>
                <EmailLink href={`mailto:${email}`}>{email}</EmailLink>
            </EmailWrapper>
            <Paragraph>
                I'm always excited to collaborate on new projects and bring fresh ideas to life. If you have a website, application, or dashboard that you'd like featured in my portfolio or reviewed, feel free to reach out. Let's create something great together!
            </Paragraph>
            <SocialIcons />
        </Address>
    </Wrapper>
);