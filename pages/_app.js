import { AuthProvider } from '../contexts/AuthContext';
import '../styles/docs.css';
import '../styles/donators.css';
import '../styles/flex-grid.css';
import '../styles/footer.css';
import '../styles/form.css';
import '../styles/globals.css';
import '../styles/loadingstyle.css';
import '../styles/main.css';
import '../styles/management.css';
import '../styles/navigation.css';
import '../styles/personalInformation.css';
import '../styles/post.css';
import '../styles/responsive.css';
import '../styles/root.css';
import '../styles/wallet.css';


function MyApp({ Component, pageProps }) {

  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  );
}

export default MyApp;
