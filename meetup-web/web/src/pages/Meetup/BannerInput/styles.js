import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 940px;

  label {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0.4);
    height: 300px;
    margin-top: 50px;
    margin-bottom: 20px;
    color: rgba(255, 255, 255, 0.3);

    img {
      width: 100%;
      max-width: 940px;
      height: 300px;
      object-fit: cover;
    }
    div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      strong {
        font-size: 20px;
      }
      svg {
        color: rgba(255, 255, 255, 0.3);
        margin-bottom: 10px;
      }
    }
    input {
      display: none;
    }
  }
`;
