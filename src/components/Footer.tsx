import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import { Stack } from "@mui/material";

const Footer = () => {
  return (
    <footer className="pt-4">
      <Stack className="bg-custom-primary p-4">
        <ul className="mx-auto flex flex-col space-y-2 sm:mx-0 sm:flex-row sm:justify-evenly sm:space-y-0 [&_li]:cursor-pointer [&_li]:font-montserrat">
          <li>
            <TwitterIcon /> Phone Specs Hub Twitter
          </li>
          <li>
            <FacebookIcon /> Phone Specs Hub Facebook
          </li>
          <li>
            <a
              href="https://github.com/Leo-Cata"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHubIcon /> My Github
            </a>
          </li>
        </ul>
      </Stack>
    </footer>
  );
};

export default Footer;
