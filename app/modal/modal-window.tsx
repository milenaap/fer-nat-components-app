import ThemedText from '@/presentation/shared/ThemedText'
import ThemedView from '@/presentation/shared/ThemedView'



const ModalScreen = () => {
  return (
    <ThemedView 
        className='justify-center items-center flex-1' 
        bgColor='#A52182'
    >
      <ThemedText className='text-white'>Hola, soy modal</ThemedText>
    </ThemedView>
  )
}

export default ModalScreen