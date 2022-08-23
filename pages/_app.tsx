import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Layout } from "../components/Layout";
import { Wrapper } from "@googlemaps/react-wrapper";

function MyApp({ Component, pageProps }: AppProps) {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "";

  return (
    <Wrapper apiKey={apiKey}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Wrapper>
  );
}

export default MyApp;
