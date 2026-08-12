import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Greenwood Homes | Custom Homes Since 1998",
  description: "Licensed custom home builder serving Lake Tahoe, Truckee, Hawaii, Idaho, and Utah.",
};

const directionContract = `
THESIS: Greenwood’s promises are joined to visible evidence; the page refuses the generic luxury-gallery hero.
OWN-WORLD: Charcoal drafting linen, warm paper, vellum proof leaves, brass pins, fired-clay action tabs, exact drafting lines, and full-color completed work.
STORY: Visitors see an exceptional home, open seven kinds of proof, examine the portfolio and process, meet the team, then begin a project conversation.
FIRST VIEWPORT: Warm top navigation above a monumental home photograph; a horizontal headline field and seven fanned proof leaves overlap the image; the active leaf carries the primary action.
FORM: The Proof Cabinet, chosen from three Builder’s Pattern Book compositions; seed ba0d4e48.
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
