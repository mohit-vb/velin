import {
  Hero,
  ArtOfScent,
  Featured,
  Signature,
  NewsLetter,
} from "../components/home";

export default function Home() {
  return (
    <>
      <Hero />
      <ArtOfScent />
      <Featured />
      <Signature />
      <NewsLetter />
      <div className="h-px w-full bg-amber-950/10" />
    </>
  );
}
