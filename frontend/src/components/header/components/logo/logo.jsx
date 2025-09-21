import { Link } from "react-router-dom";
import { Icon } from "../../../../components";
import { styled } from "styled-components";

const LargeText = styled.div`
  font-size: 2.5rem;
  font-weight: 600;
  line-height: 2rem;
  margin-top: 18px;
`;

const SmallText = styled.div`
  font-size: 1.25rem;
  font-weight: bold;
`;

const LogoContainer = ({ className }) => (
  <Link className={className} to="/">
    <Icon id="fa-code" size="4.5rem" margin="0 10px 0 0" />
    <div>
      <LargeText>Блог</LargeText>
      <SmallText>веб-разработчика</SmallText>
    </div>
  </Link>
);

export const Logo = styled(LogoContainer)`
  display: flex;
  margin-top: -14px;
`;
