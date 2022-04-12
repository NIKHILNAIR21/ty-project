import React, {useContext} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {AuthContext} from '../navigation/AuthProvider';

import moment from 'moment';

import {
  Card,
  UserInfo,
  UserImg,
  UserName,
  UserInfoText,
  PostTime,
  PostText,
  PostImg,
  InteractionWrapper,
  Interaction,
  InteractionText,
  Divider,
} from '../styles/FeedStyles';
import {TouchableOpacity} from 'react-native-gesture-handler';

const PostCard = ({item, onDelete, onPress}) => {
  const {user, logout} = useContext(AuthContext);
  const likeIcon = item.liked ? 'heart' : 'heart-outline';
  const likeIconColor = item.liked ? '#2e64e5' : '#333';
  let likeText = [];
  if (item.likes == 1) {
    likeText = '1 like';
  } else if (item.likes > 1) {
    likeText = item.likes + 'Likes';
  } else {
    likeText = 'like';
  }

  return (
    <Card>
      <UserInfo>
        <UserImg source={{uri: item.userImg}} />
        <UserInfoText>
          <TouchableOpacity onPress={onPress}>
            <UserName>{item.userName}</UserName>
          </TouchableOpacity>
          <PostTime>{moment(item.postTime.toDate()).fromNow()}</PostTime>
        </UserInfoText>
      </UserInfo>
      <PostText>{item.post}</PostText>
      {item.postImg !== null ? (
        <PostImg source={{uri: item.postImg}} />
      ) : (
        <Divider />
      )}
      <InteractionWrapper>
        <Interaction active={item.liked}>
          <Ionicons name={likeIcon} size={25} color={likeIconColor} />
          <InteractionText active={item.liked}>{likeText}</InteractionText>
        </Interaction>
        {user.uid == item.userId ? (
          <Interaction onPress={() => onDelete(item.id)}>
            <Ionicons name="md-trash-bin" size={25} color="#000000" />
          </Interaction>
        ) : null}
      </InteractionWrapper>
    </Card>
  );
};

export default PostCard;
