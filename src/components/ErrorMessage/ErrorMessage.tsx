import { StyledImage, StyledLink } from "./styled";
import error from "../../assets/img/error.gif";

export const ErrorMessage = () => {
  return (
    <div>
      <StyledImage src={error} alt="error" />
      <StyledLink to="/">Back to Main</StyledLink>
    </div>
  );
};
