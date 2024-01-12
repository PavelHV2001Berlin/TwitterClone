import { StyleSheet, Text, View, Image} from 'react-native';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/FontAwesome';

const TweetLayout = styled.View`
    flex-direction: row;
    padding-horizontal: 10px;
    padding-vertical: 10px;
    border-top-width: 0.5px;
    border-top-color: #ccc;
`
const TweetContent = styled.View`
    flex: 1;
    height: 100%;
    margin-left: 10px;
`
const TweetHeader = styled.View`
    flex-direction: row;
`
const TweetText = styled.Text`

`
export default function Tweet({username}){
    return <TweetLayout>
        <Image style={{width: 50, height: 50}} source={require('../assets/placeholderimage.png')}/>
        <TweetContent>
            <TweetHeader>
                <Text style={{fontWeight: "bold", fontSize: 16}}>{username}</Text>
                <Icon
                    name='gear'
                    size={10}
                    color="#000"
                />
                <Text style={{color: "grey", fontSize: 16}}>@IAmMarkMan...</Text>
                <Text style={{color: "grey", fontSize: 16, marginLeft: 10}}>4 Std.</Text>
                <Icon
                style={{position: "absolute", right: 0}}
                    name='gear'
                    size={20}
                    color="grey"
                />
            </TweetHeader>
            <TweetText>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
            </TweetText>
        </TweetContent>
    </TweetLayout>
}