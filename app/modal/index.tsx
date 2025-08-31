import ThemedView from '@/presentation/shared/ThemedView';
import { Link } from 'expo-router';
import { View, Text } from 'react-native';

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
    </ThemedView>
  );
};
export default ModalScreen;
