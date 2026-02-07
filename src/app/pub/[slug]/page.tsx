import Link from "next/link";
import { notFound } from "next/navigation";
import PubTabs from "@/components/PubTabs";
import { pubs } from "@/data/pubs";

type PubPageProps = {
  params: { slug: string };
};

export default function PubPage({ params }: PubPageProps) {
  const pub = pubs.find((item) => item.slug === params.slug);

  if (!pub) {
    notFound();
  }

  return (
    <main className="pub-page">
      <header className="pub-header">
        <Link className="back-link" href="/">
          ← Back to map
        </Link>
        <h1>{pub.name}</h1>
        <p>{pub.address}</p>
      </header>
      <PubTabs pub={pub} />
    </main>
  );
}
