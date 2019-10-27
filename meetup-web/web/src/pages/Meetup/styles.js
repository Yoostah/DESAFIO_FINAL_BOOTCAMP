import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  width: 100%;
  max-width: 940px;
  margin: 0 auto;

  form {
    display: flex;
    flex-direction: column;
    margin-top: 20px;

    .react-datepicker__input-container {
      input {
        width: 100%;
        height: 50px;
        border: 0;
        border-radius: 4px;
        margin-bottom: 10px;
        background: rgba(0, 0, 0, 0.2);
        padding: 15px 20px;
        font-size: 18px;
        line-height: 20px;
        color: #fff;

        &::placeholder {
          color: rgba(255, 255, 255, 0.5);
        }
      }
    }

    input {
      height: 50px;
      border: 0;
      border-radius: 4px;
      margin-bottom: 10px;
      background: rgba(0, 0, 0, 0.2);
      padding: 15px 20px;
      font-size: 18px;
      line-height: 20px;
      color: #fff;

      &::placeholder {
        color: rgba(255, 255, 255, 0.5);
      }
    }

    textarea {
      height: 200px;
      border: 0;
      border-radius: 4px;
      margin-bottom: 10px;
      background: rgba(0, 0, 0, 0.2);
      padding: 15px 20px;
      font-size: 18px;
      line-height: 20px;
      color: #fff;
      resize: none;

      &::placeholder {
        color: rgba(255, 255, 255, 0.5);
      }
    }

    > button {
      height: 42px;
      width: 162px;
      border: 0;
      background: #f94d6a;
      color: #fff;
      font-size: 16px;
      line-height: 21px;
      font-weight: bold;
      margin: 10px 0;
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
  span {
    font-size: 12px;
    color: rgba(255, 255, 255, 0.6);
    align-self: flex-start;
    margin: 0 0 5px 5px;
    font-weight: bold;
  }
`;
