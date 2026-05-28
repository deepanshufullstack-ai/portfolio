import styled from "styled-components";

// navbar
export const MenuItem = styled.a`
  font-size: 14px;
  font-weight: 500;
  transition: color 0.3s ease;

  span {
    color: #64ffda;
  }

  &:hover {
    color: #64ffda;
  }
`;

export const ResumeBtn = styled.button`
  color: #64ffda;
  font-size: 14px;
  font-weight: 500;
  padding: 10px 20px;
  border: 1px solid #64ffda;
  border-radius: 4px;
  cursor: pointer;
  background-color: transparent;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #64ffdb2f;
  }
`;

//hero
export const CheckoutMyWorkBtn = styled.button`
  background-color: #64ffda;
  color: #0a1929;
  font-size: 14px;
  font-weight: 600;
  padding: 14px 28px;
  border: none;
  border-radius: 30px;
  display: flex;
  align-items: center;
  gap: 8px;
  box-shadow: 0 10px 30px -10px #64ffda80;
  transition: transform 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-4px);
  }
`;

export const ContactMeBtn = styled.button`
  color: #64ffda;
  font-size: 14px;
  font-weight: 500;
  padding: 14px 28px;
  border: 1px solid #64ffda;
  border-radius: 30px;
  cursor: pointer;
  transition:
    transform 0.3s ease,
    background-color 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    background-color: #64ffdb2f;
  }
`;

//contact
export const ConnectBtn = styled.a`
  display: flex;
  align-items: center;
  gap: 10px;

  .icon-container {
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #64ffdb2f;
    border-radius: 4px;
    transition: background-color 0.3s ease;
  }

  .link-container {
    display: flex;
    flex-direction: column;
    gap: 8px;

    span {
      color: #8892b0;
      text-transform: uppercase;
      font-size: 12px;
      font-weight: 400;
      line-height: 1;
    }

    h1 {
      color: #ccd6f6;
      font-family: var(--font-bricolage-grotesque);
      font-size: 16px;
      font-weight: 400;
      line-height: 1;
      transition: color 0.3s ease;
    }
  }

  &:hover {
    .icon-container {
      background-color: #64ffdb54;
    }

    .link-container h1 {
      color: #64ffda;
    }
  }
`;

export const SubConnectBtn = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  width: 40px;
  border: 1px solid #23355499;
  border-radius: 4px;
  cursor: pointer;
  transition:
    transform 0.3s ease,
    border 0.3s ease;

  .icon {
    font-size: 18px;
    color: #8892b0;
    transition: color 0.3s ease;
  }

  &:hover {
    border: 1px solid #64ffda;
    transform: translateY(-4px);

    .icon {
      color: #64ffda;
    }
  }
`;

export const FormInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-bottom: 20px;
`;

export const FormLabel = styled.label`
  color: #ccd6f6;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 1px;
`;

export const FormInput = styled.input`
  border: 1px solid #23355499;
  border-radius: 4px;
  background-color: #0b1b31;
  padding: 12px 16px;
  outline: none;

  &:focus {
    border: 1px solid #64ffda;
  }

  &:hover {
    border: 1px solid #64ffda;
  }

  &::placeholder {
    color: #8892b0;
    font-size: 14px;
    font-family: var(--font-bricolage-grotesque);
  }
`;

export const FormTextArea = styled.textarea`
  border: 1px solid #23355499;
  border-radius: 4px;
  background-color: #0b1b31;
  padding: 12px 16px;
  resize: none;
  outline: none;

  &:focus {
    border: 1px solid #64ffda;
  }

  &:hover {
    border: 1px solid #64ffda;
  }

  &::placeholder {
    color: #8892b0;
    font-size: 14px;
    font-family: var(--font-bricolage-grotesque);
  }
`;

export const SendMessageBtn = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #64ffda;
  color: #0a1929;
  font-size: 14px;
  font-weight: 600;
  padding: 14px 28px;
  border: none;
  border-radius: 4px;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: transform 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-4px);
  }
`;


