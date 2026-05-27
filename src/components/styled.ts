import styled from "styled-components";

// navbar
export const MenuItem = styled.a`
  font-size: 14px;
  font-weight: 200;
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
  font-weight: 200;
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
  font-weight: 500;
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
  font-weight: 200;
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
// export const ConnectBtn = styled.a`
//   display: flex;
//   align-items: center;
//   gap: 10px;

//   .icon-container {
//     width: 50px;
//     height: 50px;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     background-color: #64ffdb2f;
//     border-radius: 4px;
//     transition: background-color 0.3s ease;

//     &:hover {
//       background-color: #64ffdb54;
//     }
//   }

//   .link-container {
//     display: flex;
//     flex-direction: column;
//     gap: 8px;

//     h1 {
//       color: #ccd6f6;
//       font-family: var(--font-bricolage-grotesque);
//       font-size: 17px;
//       font-weight: 400;
//       line-height: 1;
//       transition: color 0.3s ease;

//       &:hover {
//         color: #64ffda;
//       }
//     }
//   }
// `;

export const ConnectBtn = styled.a`
  display: flex;
  align-items: center;
  gap: 10px;

  .icon-container {
    width: 50px;
    height: 50px;
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
      font-size: 16px;
      font-weight: 400;
      line-height: 1;
    }

    h1 {
      color: #ccd6f6;
      font-family: var(--font-bricolage-grotesque);
      font-size: 17px;
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
