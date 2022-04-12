import styled from 'styled-components';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #fafbff;
  padding: 20px;
`;
export const Card = styled.View`
  background-color: #f2f2f2;
  width: 350px;
  margin-bottom: 20px;
  border-radius: 10px;
`;
export const UserInfo = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  padding: 15px;
`;
export const UserImg = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 25px;
`;
export const UserInfoText = styled.View`
  flex-direction: column;
  justify-content: center;
  margin-left: 10px;
`;

export const UserName = styled.Text`
  font-size: 14px;
  font-weight: bold;
  font-family: 'Lato-Regular';
  color: #333;
`;
export const PostTime = styled.Text`
  font-size: 11px;
  font-family: 'Lato-Regular';
  color: #666;
`;
export const PostText = styled.Text`
  font-size: 15px;
  font-family: 'Lato-Regular';
  padding-left: 15px;
  padding-right: 15px;
  color: black;
`;
export const PostImg = styled.Image`
  width: 100%;
  height: 250px;
  margin-top: 15px;
`;
export const Divider = styled.View`
  border-bottom-color: #dddddd;
  border-bottom-width: 1px;
  width: 92%;
  align-self: center;
  margin-top: 15px;
`;

export const InteractionWrapper = styled.View`
  flex-direction: row;
  justify-content: space-around;
  padding: 12px;
`;

export const Interaction = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: center;
  border-radius: 5px;
  padding: 2px 5px;
  background-color: ${props => (props.active ? '#2e64e515' : 'transparent')};
`;

export const InteractionText = styled.Text`
  font-size: 15px;
  font-family: 'Lato-Regular';
  font-weight: bold;
  color: ${props => (props.active ? '#2e64e5' : '#333')};
  margin-top: 2.5px;
  margin-left: 5px;
`;
