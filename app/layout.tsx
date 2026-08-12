import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Greenwood Homes | Custom Homes Since 1998",
  description: "Licensed custom home builder serving Lake Tahoe, Truckee, Hawaii, Idaho, and Utah.",
};

const directionContract = `
THESIS: Greenwood’s promises are joined to visible evidence; the page refuses the generic luxury-gallery hero.
OWN-WORLD: Charcoal drafting linen, warm record paper, brass pins, fired-clay action tabs, fine rules, and full-color completed work.
STORY: Visitors meet the offer through one exceptional home, then inspect exact licenses, completed projects, awards, client testimony, process, and named team members before contacting Greenwood.
FIRST VIEWPORT: The original logo sits in a warm masthead above a wide charcoal thesis field and one monumental home photograph; the primary action pins their seam.
FORM: A simplified Builder’s Pattern Book field derived from the approved Proof Cabinet; seed ba0d4e48.
FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, and DESIGN.md
`;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <div dangerouslySetInnerHTML={{ __html: `<!--${directionContract}-->` }} />
        {children}
      </body>
    </html>
  );
}
