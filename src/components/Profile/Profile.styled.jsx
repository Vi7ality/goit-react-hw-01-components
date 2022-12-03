import styled from '@emotion/styled';

export const ProfileBlock = styled.div`
  border: solid 1px rgb(159, 134, 255);
  border-radius: 4px;

  margin: 20px;
`;

export const Description = styled.div`
  text-align: center;
  background-color: white;
  padding-top: 30px;
  padding-bottom: 30px;
`;

export const Avatar = styled.img`
  width: 200px;
  /* height: 200px; */
  border-radius: 50%;
`;

export const StatsList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;

  padding: 10px;
  background-color: #a6a6a6;
`;
export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  padding: 20px 10px;
  align-items: center;

`;
