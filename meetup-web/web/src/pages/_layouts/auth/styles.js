import styled from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: transparent linear-gradient(180deg, #22202c 0%, #402845 100%) 0%
    0% no-repeat padding-box;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 315px;
  text-align: center;

  form {
    display: flex;
    flex-direction: column;
    margin-top: 40px;

    input {
      height: 50px;
      margin: 10px 0;
      border: 0;
      border-radius: 4px;
      background: rgba(0, 0, 0, 0.2);
      padding: 15px 20px;
      font-size: 18px;
      line-height: 20px;
      color: #fff;

      &::placeholder {
        color: rgba(255, 255, 255, 0.5);
      }
    }

    button {
      height: 50px;
      width: 315px;
      border: 0;
      background: #f94d6a;
      color: #fff;
      font-size: 18px;
      margin: 5px 0 15px;
      font-weight: bold;
      border-radius: 4px;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.08, '#f94d6a')};
      }
    }
  }
  a {
    color: #fff;
    font-size: 16px;
    line-height: 21px;
    transition: color 0.2s;
    font-weight: bold;
    opacity: 0.6;

    &:hover {
      opacity: 1;
    }
  }
  span {
    font-size: 12px;
    color: rgba(255, 255, 255, 0.6);
    align-self: flex-start;
    margin: 0 0 5px 5px;
    font-weight: bold;
  }
`;
