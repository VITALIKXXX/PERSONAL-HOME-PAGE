import { styleIcon } from "./styled";
import { ReactComponent as GithubIcon } from "./icons/github.svg";
import { ReactComponent as FaceBookIcon } from "./icons/facebook.svg";
import { ReactComponent as LinkedInIcon } from "./icons/linkedin.svg";


export const socials = [
    {
        name: "GitHub",
        url: "http://github.com/VITALIKXXX",
        Icon: styleIcon(GithubIcon),
    },
    {
        name: "Facebook",
        url: "",
        Icon: styleIcon(FaceBookIcon),
    },
    {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/vitalii-undefined-779298302/",
        Icon: styleIcon(LinkedInIcon),
    },
   
]