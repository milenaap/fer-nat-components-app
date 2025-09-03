import { useAnimation } from '@/hooks/useAnimation';
import { useState } from 'react';
import { View, ActivityIndicator, ImageStyle, StyleProp, Animated } from 'react-native'



interface Props {
    uri: string;
    style: StyleProp<ImageStyle>;

}

const FadeInImage = ({uri, style}: Props) => {

    const [isLoading, setIsLoading] = useState(true);

    const { animatedOpacity,fadeIn } = useAnimation();


  return (
    <View style={{
        justifyContent: 'center',
        alignItems: 'center',
    }}>

        {
            isLoading && (

                <ActivityIndicator 
                    style={{position: 'absolute'}}
                    color='grey'
                    size={30}
                />
            )
        }
        <Animated.Image 
            source={{ uri}}
            style={ [ style, {opacity: animatedOpacity} ] }
            onLoadEnd={ () => {
                fadeIn({
                    duration: 2000,
                });
                setIsLoading(false);
            }}
        />
    
    </View>
  )
}

export default FadeInImage