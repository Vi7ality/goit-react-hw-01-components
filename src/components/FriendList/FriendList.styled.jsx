import styled from '@emotion/styled';

export const List = styled.ul`
  border: 1px solid black;
  margin: 20px;
  padding: 20px;
`;

export const FriendItem = styled.li`
  display: flex;
  align-items: center;

  
`;

export const Status = styled.span`
  background-color: ${p => {

    switch (p.isOnline) {
        case true:
            return 'green'
        case false:
            return 'red'
        default:
            throw new Error(`Unexpected format ${p}`)
    }
  }};
  display: block;
  height: 20px;
  width: 20px;
  border-radius: 50%;

  margin-right: 10px;
`;
