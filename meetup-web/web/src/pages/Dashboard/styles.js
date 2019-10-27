import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  width: 100%;
  max-width: 940px;
  padding-bottom: 30px;
  margin: 30px auto 0;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    strong {
      font-size: 45px;
      color: #fff;
      font-weight: bold;
    }

    button {
      height: 42px;
      width: 162px;
      border: 0;
      background: #f94d6a;
      color: #fff;
      font-size: 16px;
      line-height: 21px;
      font-weight: bold;
      margin: 20px 0;
      border-radius: 4px;
      transition: background 0.2s;
      align-self: flex-end;

      &:hover {
        background: ${darken(0.08, '#f94d6a')};
      }

      div {
        display: flex;
        align-items: center;
        justify-content: center;

        svg {
          margin-right: 15px;
        }
      }
    }
  }

  ul {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 15px;
    margin-top: 30px;

    > span {
      font-size: 28px;
      color: #fff;
      font-weight: bold;
    }
  }
`;

export const Meetup = styled.li`
  background: rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  border-radius: 4px;

  strong {
    font-size: 28px;
    color: #fff;
    font-weight: bold;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;

    span {
      font-size: 24px;
      color: #c1c1c1;
    }

    svg {
      margin-left: 15px;
    }
  }
`;
