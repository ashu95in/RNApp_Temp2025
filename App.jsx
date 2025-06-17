import React, {useEffect, useState} from 'react';
import {ThemeProvider} from './src/context/ThemeContext';
import RootNavigator from './src/navigation/RootNavigation';
import SplashScreen from './src/screens/SplashScreen'; // path may vary
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

const queryClient = new QueryClient();

function App() {
  const [isAppReady, setIsAppReady] = useState(false);

  useEffect(() => {
    const prepare = async () => {
      await new Promise(resolve => setTimeout(resolve, 2000)); // 2s splash
      setIsAppReady(true);
    };

    prepare();
  }, []);

  return (
    <ThemeProvider>
      <QueryClientProvider client={queryClient}>
        {isAppReady ? <RootNavigator /> : <SplashScreen />}
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
