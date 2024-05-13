import CanonicalURL from "@/components/CanonicalURL";
import type { AppProps } from "next/app";
import Head from "next/head"; // Import the Head component
import { Suspense } from "react";

// bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

// font awesome 6
import "public/icons/font-awesome/css/all.min.css";

// custom icons
import "public/icons/glyphter/css/istikhara-qalandar.css";

// main scss
import "@/styles/main.scss";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta
          name="keywords"
          content="
Home, load, load more istikhara, load more numerology, numerology wazaif, istikhara numerology wazaif, lets talk, migration load,  istikhara dua, astrology horoscope, black magic, numerology, jobs, marriage, migration, love, stones, wazifa, kala jadu, carrier, life journey, Court Case, Health, healing, istikhara for health, istikhara for healing, istikhara for marriage, istikhara for love, istikhara for migration, istikhara for travel, istikhara for black magic, istikhara for cure black Magic, istikhara for choosing Field, Numerology for migration, numerology for travel, numerology for choosing the life partner, numerology for choosing the name  for new born baby, numerology for stones and colors, numerology for choosing the carrier, wazaif, solving the problems in your life, choosing the life partner,salat istikhara, istikhara dua for marriage, dua istikhara for marriage, istikhara for marriage dua, istikhara dua marriage, marriage istikhara dua, dua for istikhara for marriage, dua for istikhara marriage, dua istikhara marriage,
numerology,
life path number,
life path numbers
number path life,
numerology chart,
numerology calculator,
number 2,
number 4,
number 6,
number 3,
number 7,
number 9,
number 8,
numerology number, numerology numbers,
number numerology,
numerological number,
numerologist number,
what is my numerology number,
what's my number numerology,
numerology 4,
4 in numerology,
name numerology,
numerology name,
numerology of name,
numerology 6,
6 in numerology,
6 numerology,
numerology 3,
numerology of 3,
numerology 5,
5 numerology,
numerology of 5,
5 in numerology,
numerology 7,
7 numerology,
9 life path,
life path 9,
what is my life path number,
numerology name calculator,
name numerology calculator,
numerology calculator by name,
numerology calculator name,
numerology calculator: name,
numerology calculator for names,
numerology for name calculator,
numerology of number, wazifa,
dua for marriage,
wazifas,
wazifa meaning,
hajat ki dua,
wazifa for hajat,
wazifas for hajat,
wazifa for job,
wazifa for jobs,
wazifa job,
job wazifa,
wazifa jobs,
dua for marrying someone you love,
duas to marry someone you love,
wazifa for marriage,
marriage wazifa,
wazifa marriage,
dua for husband love,
dua for husband's love,
dua for love from husband,
wazifa dua e hajat,
islamic wazifas,
wazifa in islam,
what is wazifa,
islam wazifa,
wazifa islam,
what is wazifa in islam,
islamic wazifa,
dua to get job in 3 days,
powerful dua to get job in 3 days,
shadi ka wazifa,
wazifa for husband love,
husband love wazifa,
wazifa for love of husband,
magic woman lyrics,
magic woman song,
dark magic song,
blackmagic design inc,
black magic houston,
social club houston tx,
magic nightclub houston,
black magic whey protein,
black magic blueberry muffin protein,
black magic supply multi source protein,
black magic hydraulics kit,
black magic hydraulics ebay,
black magic hydraulics kits,
black magic piston pump,
trudi canavan black magician trilogy,
trudi canavan the black magician trilogy,
black magician series,
black and magic woman,
black magic magic,
take a sip of my secret potion lyrics,
black magic chocolate cake recipe,
black magic brand,
blackmagic brand,
blackmagic design ltd,
blackmagic windows,
black social clubs in houston,
black magic club,
magic night club houston,
what's black magic game,
black magic peanut butter protein,
black magic lowrider,
black magic hydraulics toyota rear end,
black magic in usa,
what is black magic cake,"
        />
      </Head>

      <Suspense fallback={<div>Loading...</div>}>
        <CanonicalURL />
        <Component {...pageProps} />
      </Suspense>
    </>
  );
}
