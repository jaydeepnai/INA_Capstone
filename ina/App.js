
import StackNavigator from './navigation/StackNavigator';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <StackNavigator/>
    </QueryClientProvider>
  );
}

