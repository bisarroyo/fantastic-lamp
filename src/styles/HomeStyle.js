import styled from 'styled-components';

const HomeStyle = styled.div`
  display: flex;
  flex-direction: column;

  .home_box-text {
    width: 100%;
    height: 100px;
    margin: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .home_box-button {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;

      .button_container {
        margin: 10px;
      }
    }
  }
  .home_box-info {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

export default HomeStyle;
