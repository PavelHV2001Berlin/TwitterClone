import { StyleSheet, Text, View, Image, StatusBar} from 'react-native';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/FontAwesome';

const HomeLayout = styled.View`
  flex: 1;
`;
const AppIcon = styled.Image`
width: 50px;
height: 50px;
`
const HomeHeader = styled.View`
padding: 10px;
width: 100%;
flex-direction: row;
justify-content: space-between;
align-items: center;
`
const ForYouNav = styled.View`
flex-direction: row;
justify-content: space-between;
padding-horizontal: 50px;
margin-top: 30px;
`
export default function Home() {
    return (
      <HomeLayout>
        <StatusBar hidden={true}/>
        <HomeHeader>
          <AppIcon source={require('../../assets/placeholderimage.png')}/>
          <AppIcon source={require('../../assets/placeholderimage.png')}/>
          <Icon
            name='gear'
            size={30}
            color="#000"
          />
        </HomeHeader>
        <ForYouNav>
          <Text style={{fontWeight: "bold", fontSize: 20}}>Für dich</Text>
          <Text style={{fontSize: 20}}>Folge ich</Text>
        </ForYouNav>
   
      </HomeLayout>
    );
}