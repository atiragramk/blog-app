import { StyledContainer, StyledText, StyledWrapper } from "./styled";
import { Image } from "antd";

import photo from "../../assets/img/photo.jpg";
import React from "react";

export default function Home() {
  return (
    <StyledContainer>
      <Image src={photo} alt="photo" width={700} />
      <StyledWrapper>
        <StyledText>
          Hi there. I'm Marharyta and this is my blog about books and reading!
        </StyledText>
        <StyledText>
          I'm really enjoy about reading books especially novels by Stephen
          King! Also I like watching superhero movies and play quizes and board
          games.
        </StyledText>
        <StyledText>So...Here we go!</StyledText>
      </StyledWrapper>
    </StyledContainer>
  );
}
