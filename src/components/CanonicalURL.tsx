import Head from "next/head";
import { useRouter } from "next/router";

interface Url {
  href?: string;
}

const CanonicalURL: React.FC = () => {
  const router = useRouter();
  const currentUrl = router.asPath;

  return (
    <Head>
      <link rel="canonical" href={currentUrl} />
    </Head>
  );
};

export default CanonicalURL;
