import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  width: 100%;
  max-width: 940px;
  margin: 0 auto;
`;

export const Meetup = styled.div`
  height: 100%;
  padding: 30px 0;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    strong {
      font-size: 32px;
      color: #fff;
      font-weight: bold;
    }

    button {
      height: 42px;
      border: 0;
      background: #4dbaf9;
      color: #fff;
      font-size: 16px;
      line-height: 21px;
      font-weight: bold;
      padding: 0 20px;
      margin: 20px 0;
      border-radius: 4px;
      transition: background 0.2s;
      align-self: flex-end;

      &:hover {
        background: ${darken(0.08, '#4DBAF9')};
      }

      & + button {
        background: #f94d6a;
        margin-left: 15px;

        &:hover {
          background: ${darken(0.08, '#f94d6a')};
        }
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

  img {
    width: 940px;
    height: 300px;
    background: #eee;
    object-fit: cover;
    margin: 30px 0 25px;
  }

  > p {
    font-size: 18px;
    color: #fff;
  }

  > div {
    margin: 30px 0;
    font-size: 16px;
    color: rgba(255, 255, 255, 0.6);
    display: flex;

    span {
      display: flex;
      justify-content: flex-start;
      p {
        text-align: center;
        margin-right: 30px;
      }
      svg {
        margin-right: 5px;
      }
    }
  }
`;
