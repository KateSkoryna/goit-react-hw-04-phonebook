import styled from '@emotion/styled';

export const ContactListBox = styled.ul`
  margin-top: 30px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

export const ContactListItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-basis: calc((100% - 60px) / 4);
`;

export const ContactListText = styled.p`
  margin-bottom: 10px;
`;

export const ContactListBtn = styled.button`
  display: block;
  width: 100px;
  height: 40px;
  font-size: 12px;
  text-transform: uppercase;
  border-radius: 2px;
  background-color: #b6d5d8;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.08), 0px 4px 4px rgba(0, 0, 0, 0.03),
    1px 4px 6px rgba(0, 0, 0, 0.08);
  transition: scale 250ms linear, background-color 250ms linear,
    color 250ms linear;

  :hover,
  :focus {
    background-color: #63868a;
    color: #e1e4e9;
    scale: 1.1;
  }
`;
