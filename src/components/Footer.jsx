import { footerLinks, footerContactInfo, social } from "../constants";
import { hilinkLogo } from "../assets/images";

const Footer = () => {
  return (
    <footer className="flexCenter mb-10">
      <div
        className="padding-container max-container flex w-full flex-col gap-14"
        data-aos="fade-up"
      >
        <div className="flex flex-col items-start justify-center gap-[10%] md:flex-row">
          <a href="/" className="mb-10">
            <img src={hilinkLogo} alt="Hilink logo" width={74} height={29} />
          </a>

          <div className="flex flex-wrap gap-10 sm:justify-between md:flex-1">
            {footerLinks.map((columns) => (
              <FooterColumn key={columns.title} title={columns.title}>
                <ul className="regular-14 flex flex-col gap-4 text-gray-30">
                  {columns.links.map((link) => (
                    <li href="/" key={link}>
                      {link}
                    </li>
                  ))}
                </ul>
              </FooterColumn>
            ))}

            <div className="flex flex-col gap-5">
              <FooterColumn title={footerContactInfo.title}>
                <ul>
                  {footerContactInfo.links.map((link) => (
                    <li
                      href="/"
                      key={link.label}
                      className="flex gap-4 md:flex-col lg:flex-row"
                    >
                      <p className="whitespace-nowrap">{link.label}:</p>
                      <p className="medium-14 whitespace-nowrap text-blue-70">
                        {link.value}
                      </p>
                    </li>
                  ))}
                </ul>
              </FooterColumn>
            </div>

            <div className="flex flex-col gap-5">
              <FooterColumn title={social.title}>
                <ul className="regular-14 flex gap-4 text-gray-30">
                  {social.links.map((link) => (
                    <li href="/" key={link}>
                      <img
                        src={link}
                        alt="Social Media Icon"
                        width={24}
                        height={24}
                      />
                    </li>
                  ))}
                </ul>
              </FooterColumn>
            </div>
          </div>
        </div>

        <div className="border bg-gray-20" />
        <p className="regular-14 w-full text-center text-gray-30">
          Copyright &copy; 2024 by Hilink, Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

const FooterColumn = ({ title, children }) => {
  return (
    <div className="flex flex-col gap-5">
      <h3 className="bold-18 whitespace-nowrap">{title}</h3>
      {children}
    </div>
  );
};

export default Footer;
