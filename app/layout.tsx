import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Topbar from "@/components/Topbar";
import Footer  from "@/components/Footer";




const inter = Inter({ subsets: ["latin"] });
const jsonLd = {
  '@context': 'https://zind.com',
  '@type': 'organization',
  name: "Zind Design Group",
  image: "/assets/images/zind.jpg",
  description: "We are best Rwandan based Architecture firm which match our clients needs, with our  intensive capability and hyper-intellectual knowledge in design to provide best design.  ",
  }

export const metadata: Metadata = {
  title:{
    default:"Virunga Wildlife Club",
    template:"%s | Virunga Wildlife Club"
  }, 
  description: " ",
  openGraph: {
    title: "ZIND Design",
  description: "We are best Rwandan based Architecture firm which match our clients needs, with our  intensive capability and hyper-intellectual knowledge in design to provide best design.  ",
    },
    
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <script
        type="application/ld+json"
              dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
        <div className="flex h-screen flex-col">
          <Topbar/>
          <main className="flex-1">{children}</main>
          <hr />
          <Footer />
        </div>
      </body>
    </html>
  );
}
