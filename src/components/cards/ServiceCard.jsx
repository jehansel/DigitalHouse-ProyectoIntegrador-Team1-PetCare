import "react";
import { StarsComponent } from "../shared/StarsComponent";
import {
  CardContainer,
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
  id,
  name,
  serviceType,
  image,
  rating,
  excerpt,
  onImageClick,
}) => {
  // console.log(image?.imagenUrl);
  return (
    <CardContainer>
      <ImageContainer onClick={() => onImageClick()}>
        <Image alt={name} src={image?.imagenUrl}/>
      </ImageContainer>
      <InfoContainer>
        <h3 className="serviceType">{serviceType?.name}</h3>
        <NameContainer>
          <p>{name} {id}</p>
          <StarsComponent rating={rating} key={name} />
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
