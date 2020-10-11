import ProfileProvider from "../context/profile-context"
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <ProfileProvider>
      <Component {...pageProps} />
    </ProfileProvider>
  );
}

export default MyApp
