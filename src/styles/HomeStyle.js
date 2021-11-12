import styled from 'styled-components';

const HomeStyle = styled.div`
  .home-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 30px;
    width: 100%;
  }
  .home-button {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    margin-top: 20px;
    margin-bottom: 20px;
    min-width: 300px;
  }
  .home-box {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-evenly;
    margin-top: 20px;
    margin-bottom: 20px;
    width: 300px;

    .home-box-item {
      margin: 10px;
  }
`;

export default HomeStyle;
