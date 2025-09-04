import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { useColorScheme } from '@/hooks/useColorScheme';
import { useThemeColor } from '@/hooks/useThemeColor';
import { Stack } from 'expo-router';
import { allRoutes } from '@/constants/Routes';
import "../global.css";
import { ThemeChangerProvider } from '@/presentation/context/ThemedChangerContext';




export default function RootLayout() {

  const backgroundColor = useThemeColor({}, 'background');
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  if (!loaded) {
    // Async font loading only occurs in development.
    return null;
  }

  return (


    <GestureHandlerRootView style={{ backgroundColor: backgroundColor, flex: 1 }}>

      {/* <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}> */}

      <ThemeChangerProvider>

        <Stack
          screenOptions={{
            headerShadowVisible: false,
            contentStyle: {
              backgroundColor: backgroundColor,
            },
            headerStyle: {
              backgroundColor: backgroundColor,
            },
          }}
        >

            <Stack.Screen 
              name='index'
              options={{
                title: 'Components APP',
              }}
            />

            {
              allRoutes.map((route) => (
                <Stack.Screen 
                  key={route.name}
                  name={ route.name }
                  options={{
                    title: route.title,
                    headerShown: !route.title.includes('Slides'),
                  }}
                />
              ))
            }

        </Stack>

      <StatusBar style="auto" />

      </ThemeChangerProvider>


    {/* </ThemeProvider> */}


    </GestureHandlerRootView>

    
  );
}