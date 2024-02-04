
import { StatusBar } from 'react-native';
import StackNavigator from './navigation/StackNavigator';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

export default function App() {
  return (
    <>
      <StatusBar barStyle="dark-content" hidden={false} backgroundColor="white" translucent={true} />
      <QueryClientProvider client={queryClient}>
        <StackNavigator />
      </QueryClientProvider>
    </>
  );
}

