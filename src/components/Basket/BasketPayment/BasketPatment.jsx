import styled from "styled-components";

const PaymentWrap = styled.div`
  width: 476px;
  height: 100vh;
  background: var(--green);
  position: fixed;
  top: 0;
  right: 0;
  padding: 10% 40px;
  text-align: left;
`;

const Title = styled.h2`
  font-family: var(--space);
  font-weight: 700;
  font-size: 45px;
  color: var(--white);
`;

const InpName = styled.p`
  font-family: var(--advent);
  font-weight: 600;
  font-size: 25px;
  color: var(--white);
`;

const Input = styled.input`
  width: ${(props) => (props.width ? props.width : "100%")};
  height: 45px;
  background: transparent;
  border: none;
  outline: none;
  border-bottom: 2px solid white;
  font-family: var(--space);
  font-weight: 300;
  font-size: 15px;
  color: var(--white);
`;

const InpLabel = styled.label`
  display: flex;
  flex-direction: column;
  gap: 2px;
  align-items: flex-start;
`;

const InpDiv = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const CheckBtn = styled.button`
  font-family: var(--advent);
  font-weight: 600;
  font-size: 25px;
  color: #000;
  border-radius: 15px;
  width: 146px;
  height: 66px;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
  background: var(--white);
  position: absolute;
  bottom: 20px;
  right: 20px;
`;

const BasketPatment = () => {
  return (
    <PaymentWrap>
      <div>
        <Title>Payment</Title>
        <InpDiv>
          <InpLabel>
            <InpName>Select card type</InpName>
            <Input placeholder="Card type" type="text" />
          </InpLabel>

          <InpLabel>
            <InpName>Card number</InpName>
            <Input placeholder="Card number" type="text" />
          </InpLabel>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "20px",
            }}
          >
            <InpLabel>
              <InpName>Expiry Date</InpName>
              <Input width={"250px"} placeholder="Expiry Date" type="text" />
            </InpLabel>
            <InpLabel>
              <InpName>CW</InpName>
              <Input width={"60px"} placeholder="CW" type="text" />
            </InpLabel>
          </div>
        </InpDiv>

        <CheckBtn>CHECKOUT</CheckBtn>
      </div>
    </PaymentWrap>
  );
};

export default BasketPatment;
