import '../styles/globals.css';
import '../styles/root.css';
import '../styles/navigation.css';
import '../styles/form.css';
import '../styles/footer.css';
import '../styles/post.css';
import '../styles/wallet.css';
import '../styles/loadingstyle.css';
import '../styles/docs.css';
import '../styles/donators.css';
import '../styles/personalInformation.css';
import '../styles/responsive.css';
import '../styles/flex-grid.css';
import '../styles/management.css';
import '../styles/management.css';
import '../styles/main.css';


import { AuthProvider } from '../contexts/AuthContext';

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  );
}

export default MyApp;
