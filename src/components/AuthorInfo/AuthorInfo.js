import { StyledContainer, StyledText } from "./styled";

import photo from "../../assets/img/photo.jpg";

export const AuthorInfo = () => {
  return (
    <StyledContainer>
      <img src={photo} alt="photo" />
      <StyledText>
        <p>
          Hi there. I'm Marharyta and this is my blog about books and reading!
        </p>
        <p>
          I'm really enjoy about reading books especially novels by Stephen
          King! Also I like watching superhero movies and play quizes and board
          games.
        </p>
        <p>So...Here we go!</p>
      </StyledText>
    </StyledContainer>
  );
};
