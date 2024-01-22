import { useEffect } from 'react';
import {
  BackDrop,
  Button,
  Div,
  Img,
  ModalWrap,
  Parag,
  TitleWrap,
  ParagWrap,
  Title,
  Rental,
  Accessories,
  ConditionWrap,
  Paragraph,
  Span,
  OrderButton,
  A,
  Paragr,
  ParagWrapTwo,
  ImgCross,
  GeneralWraper,
  Stick,
} from './Modal.styled';
import cross from '../img/cross.svg';

export const Modal = ({ car, close }) => {
  useEffect(() => {
    const handleEsc = event => {
      if (event.code === 'Escape') {
        close();
      }
    };
    document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, [close]);

  const handleBackDrop = event => {
    if (event.target === event.currentTarget) {
      close();
    }
  };

  return (
    <BackDrop onClick={handleBackDrop}>
      <ModalWrap>
        <Button>
          <ImgCross src={cross} alt="" onClick={() => close()} />
        </Button>
        <GeneralWraper>
          <Img src={car.img} alt="img auto" />

          <TitleWrap>
            <Div>
              <Title>{car.make},</Title>
              <Title>{car.year}</Title>
            </Div>
          </TitleWrap>
          <ParagWrap>
            <Parag>{car.address.slice(20)} <Stick>|</Stick></Parag>
            <Parag>Id: {car.id} <Stick>|</Stick></Parag>
            <Parag>Year: {car.year} <Stick>|</Stick></Parag>
            <Parag>Type: {car.type} <Stick>|</Stick></Parag>
            <Parag>FuelConsumption: {car.fuelConsumption} <Stick>|</Stick> </Parag>
            <Parag>EngineSize: {car.engineSize} <Stick>|</Stick></Parag>
          </ParagWrap>

          <Paragr>{car.description}</Paragr>
          <Accessories>Accessories and functionalities:</Accessories>

          <ParagWrapTwo>
            {car.accessories.map(accessory => {
              return <Parag key={car.id}>{accessory} <Stick>|</Stick></Parag>;
            })}
            {car.functionalities.map(functionality => {
              return <Parag>{functionality} <Stick>|</Stick></Parag>;
            })}
          </ParagWrapTwo>

          <Rental>Rental Conditions:</Rental>

          <ConditionWrap>
            <Paragraph>
              Minimum age : <Span>25</Span>
            </Paragraph>
            <Paragraph>Valid driver’s license</Paragraph>
            <Paragraph>Security deposite required</Paragraph>
            <Paragraph>
              Mileage: <Span>5,858</Span>
            </Paragraph>
            <Paragraph>
              Price: <Span>{car.rentalPrice}</Span>
            </Paragraph>
          </ConditionWrap>
          <OrderButton type="buttom">
            <A href="tel:+380730000000">Rental Car</A>
          </OrderButton>
        </GeneralWraper>
      </ModalWrap>
    </BackDrop>
  );
};
