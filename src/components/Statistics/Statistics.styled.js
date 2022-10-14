import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: 0 auto;
  padding: 8px;
  text-align: center;
  align-items: center;
`;
export const PageSection = styled.section`
  padding: 20px 0;
  border: 1px solid ${p => p.theme.colors.gray};
  border-radius: 4px;
`;

export const Title = styled.h2`
  margin-bottom: 16px;
`;

export const BtnList = styled.ul`
  flex-direction: row;
  display: flex;
  justify-content: center;
  gap: 5px;
  text-align: center;
`;

export const InfoBlock = styled.p`
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 3px;
`;

export const Btn = styled.button`
  padding: 9px 20px;
  min-width: 90px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${p => p.theme.colors.white};
  border-radius: 4px;
  border: 1px solid ${p => p.theme.colors.accent};
  cursor: pointer;
  background-color: ${p => p.theme.colors.accent};
  :hover {
    background-image: ${p => p.theme.colors.hover};
  }
  transition: color 250ms ease-in-out, background-color 250ms ease-in-out,
    border-color 250ms ease-in-out;
`;
