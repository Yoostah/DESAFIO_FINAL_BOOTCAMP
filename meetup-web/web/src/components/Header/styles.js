import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  background: rgba(0, 0, 0, 0.3);
`;
export const Content = styled.div`
  width: 100%;
  height: 92px;
  max-width: 940px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    align-items: center;

    img {
      width: 31px;
      height: 32px;
    }
  }

  aside {
    display: flex;
    align-items: center;
  }
`;
export const User = styled.div`
  display: flex;
  align-items: center;

  div {
    font-size: 14px;
    margin-right: 30px;
    text-align: right;
    color: #fff;

    strong {
      display: block;
      font-weight: bold;
    }

    a {
      display: block;
      color: #fff;
      margin-top: 2px;
    }
  }

  button {
    height: 42px;
    width: 71px;
    border: 0;
    background: #f94d6a;
    color: #fff;
    font-weight: bold;
    font-size: 16px;
    border-radius: 4px;
    transition: background 0.2s;

    &:hover {
      background: ${darken(0.08, '#f94d6a')};
    }
  }
`;
