import "react";
import { StarsComponent } from "../shared/StarsComponent";
import {
  CardContainer,zz
  ImageContainer,
  Image,
  InfoContainer,
  NameContainer,
  ExcerptContainer,
  ButtonContainer,
  CTAContainer,
} from "./styled-components/ServiceCard.styles";

// eslint-disable-next-line react/prop-types
export const ServiceCard = ({
  name,
  serviceType,
  image,
  rating,
  excerpt,
  onImageClick,
}) => {
  console.log(image?.imagenUrl);
  return (
    <CardContainer>
      <ImageContainer onClick={() => onImageClick()}>
        <Image
          src={image?.imagenUrl || "https://via.placeholder.com/150"}
          alt={name}
        />
      </ImageContainer>
      <InfoContainer>
        <h3 className="serviceType">{serviceType?.name}</h3>
        <NameContainer>
          <p>{name}</p>
          <StarsComponent rating={rating} />
        </NameContainer>
        <ExcerptContainer>
          <p>{excerpt}</p>
        </ExcerptContainer>
        <CTAContainer>
          <ButtonContainer onClick={() => onImageClick()}>
            Ver más
          </ButtonContainer>
        </CTAContainer>
      </InfoContainer>
    </CardContainer>
  );
};
