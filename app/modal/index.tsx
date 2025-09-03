import ThemedButton from '@/presentation/shared/ThemedButton';
import ThemedView from '@/presentation/shared/ThemedView';
import { Link, router } from 'expo-router';
import { Text } from 'react-native';

const ModalScreen = () => {
  return (
    <ThemedView>
      <Link
        asChild href='/modal/modal-window'
        className='mx-4 text-center'
        
      >
        <Text className='text-white my-2 text-xl bg-light-primary dark:bg-dark-primary rounded-xl'>
          Abrir modal
        </Text>
      </Link>


      <ThemedButton
        onPress={ () => router.push('/modal/modal-window')}
        className='mx-4'
      >
        Abrir modal
      </ThemedButton>
    </ThemedView>
  );
};
export default ModalScreen;
