import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux';
import store from '../redux/store';

function App({ Component, pageProps }: AppProps) {
  return (
    <div className="App">

      {/* store를 주입해준다. 일반 리덕스 사용법과 동일하다. */}
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </div>
  );
}

export default App