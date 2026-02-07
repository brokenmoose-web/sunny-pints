export type Pub = {
  slug: string;
  name: string;
  address: string;
  gardenOrientation: string;
  terraceOrientation?: string;
  notes?: string;
  heaters: string;
};

const slugify = (value: string) =>
  value
    .toLowerCase()
    .replace(/’/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");

const withSlug = (pub: Omit<Pub, "slug">): Pub => ({
  ...pub,
  slug: slugify(pub.name),
});

export const pubs: Pub[] = [
  withSlug({
    name: "The Grosvenor",
    address: "127 Oaklands Rd, London W7 2DT",
    gardenOrientation: "N (walled)",
    terraceOrientation: "S",
    notes: "Walled garden faces N; terrace faces S",
    heaters: "Unknown",
  }),
  withSlug({
    name: "The Forester",
    address: "2 Leighton Rd, London W13 9EP",
    gardenOrientation: "W",
    terraceOrientation: "S",
    heaters: "Unknown",
  }),
  withSlug({
    name: "The Green W7",
    address: "13 Lower Boston Rd, London W7 3TX",
    gardenOrientation: "W",
    terraceOrientation: "S",
    heaters: "Unknown",
  }),
  withSlug({
    name: "The Fox",
    address: "Green Ln, London W7 2PJ",
    gardenOrientation: "SE",
    heaters: "Unknown",
  }),
  withSlug({
    name: "The Viaduct",
    address: "221 Uxbridge Rd, London W7 3TD",
    gardenOrientation: "NW",
    heaters: "Unknown",
  }),
  withSlug({
    name: "The King’s Arms",
    address: "110 Uxbridge Rd, London W7 3SU",
    gardenOrientation: "S",
    heaters: "Unknown",
  }),
];
