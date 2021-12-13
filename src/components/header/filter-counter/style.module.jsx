import styled from '@emotion/styled';

export const FilterComponent = styled.div`
  position: absolute;
  background-color: ${(props) => props.theme.white};
  width: 22%;
  border-radius: 8px;
  right: 190px;
  top: 75px;
`;

export const FilterCounters = styled.div`
  height: 114px;
  margin: 22px;
  display: flex;
  flex-direction:column;
  justify-content: space-between;
`;

export const AdultsChildrenRoom = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const PCounters = styled.p`
  font-size: 16px;
  line-height: 30px;
  vertical-align: middle;
`;

export const FilterCounterComponent = styled.div`
  display: flex;
  justify-content: space-between;
  width: 108px;
  & button{
    border: 1px solid ${(props) => props.theme.primary};
    width: 30px;
    height: 30px;
    font-size: 20px;
    line-height: 25px;
    color: ${(props) => props.theme.primary};
    text-align: center;
    cursor: pointer;
    background-color: ${(props) => props.theme.white};
  }
  & .button-off {
    border: 1px solid ${(props) => props.theme.secondaryText};
    color: ${(props) => props.theme.secondaryText};
  }
  & p{
    font-size: 16px;
    line-height: 30px;
    vertical-align: middle;
  }
`;

export const FilterChildrenAge = styled.p`
  margin: 28px 22px 22px 19px;
  text-align: left;
  & p{
    font-size: 12px;
    line-height: 14px;
  }
`;
