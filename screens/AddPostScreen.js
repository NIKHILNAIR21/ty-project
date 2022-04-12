import React, {useState, useContext} from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  Alert,
  ActivityIndicator,
} from 'react-native';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';
import ImagePicker from 'react-native-image-crop-picker';
import storage from '@react-native-firebase/storage';
import firestore from '@react-native-firebase/firestore';
import {AuthContext} from '../navigation/AuthProvider';

import {
  InputField,
  InputWrapper,
  AddImage,
  SubmitBtn,
  SubmitBtnText,
  StatusWrapper,
} from '../styles/AddPost';

const AddPostScreen = () => {
  const {user, logout} = useContext(AuthContext);

  const [image, setImage] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [transfered, setTransfered] = useState(0);
  const [post, setPost] = useState(null);

  const choosePhotoFromLibrary = () => {
    ImagePicker.openPicker({
      width: 1200,
      height: 780,
      cropping: true,
    }).then(image => {
      console.log(image);
      const imageUri = Platform.OS === 'ios' ? image.sourceURL : image.path;
      setImage(imageUri);
    });
  };
  const submitPost = async () => {
    const imageUrl = await uploadImage();
    console.log('Image url :', imageUrl);

    firestore()
      .collection('posts')
      .add({
        userId: user.uid,
        post: post,
        postImg: imageUrl,
        postTime: firestore.Timestamp.fromDate(new Date()),
        likes: null,
      })
      .then(() => {
        console.log('Post added');
        Alert.alert(
          'Image uploaded',
          'Your image has been uploaded to the feed successfully!',
        );
        setPost(null);
      })
      .catch(() => {
        console.log('Something went wrong');
      });
  };

  const uploadImage = async () => {
    if (image == null) {
      return null;
    }
    const uploadUri = image;
    let filename = uploadUri.substring(uploadUri.lastIndexOf('/') + 1);

    const extension = filename.split('.').pop();
    const name = filename.split('.').slice(0, -1).join('.');
    filename = name + Date.now() + '.' + extension;

    setUploading(true);
    setTransfered(0);

    const storageRef = storage().ref(`photos/${filename}`);
    const task = storageRef.putFile(uploadUri);

    task.on('state_changed', taskSnapshot => {
      console.log(
        `${taskSnapshot.bytesTransferred} transferred out of ${taskSnapshot.totalBytes}`,
      );
      setTransfered(
        Math.round(taskSnapshot.bytesTransferred / taskSnapshot.totalBytes) *
          100,
      );
    });

    try {
      await task;

      const url = await storageRef.getDownloadURL();

      setUploading(false);
      setImage(null);

      return url;
    } catch (e) {
      console.log(e);
      return null;
    }
  };
  return (
    <View style={styles.conatainer}>
      <InputWrapper>
        {image != null ? <AddImage source={{uri: image}} /> : null}

        <InputField
          placeholder="What's on your mind"
          placeholderTextColor="#4f5152"
          multiline
          numberOfLines={4}
          onChangeText={content => setPost(content)}
        />
        {uploading ? (
          <StatusWrapper>
            <Text>{transfered} % completed😉</Text>
            <ActivityIndicator size="large" color="#3S000ff" />
          </StatusWrapper>
        ) : (
          <SubmitBtn onPress={submitPost}>
            <SubmitBtnText>Post</SubmitBtnText>
          </SubmitBtn>
        )}
      </InputWrapper>
      <ActionButton buttonColor="rgba(231,76,60,1)">
        <ActionButton.Item
          buttonColor="#3498db"
          title="Gallery"
          onPress={choosePhotoFromLibrary}>
          <Icon name="md-images-outline" style={styles.actionButtonIcon} />
        </ActionButton.Item>
      </ActionButton>
    </View>
  );
};
export default AddPostScreen;

const styles = StyleSheet.create({
  conatainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  },
});
