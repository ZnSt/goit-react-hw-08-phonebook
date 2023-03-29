import { Oval } from 'react-loader-spinner';
import styled from '@emotion/styled';

export const Loader = () => {
  return (
    <ContainerLoader>
      <Oval
        height={80}
        width={80}
        color="tomato"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="oval-loading"
        secondaryColor="tomato"
        strokeWidth={2}
        strokeWidthSecondary={2}
      />
    </ContainerLoader>
  );
};

const ContainerLoader = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;
