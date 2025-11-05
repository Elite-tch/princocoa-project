import { Poppins } from "next/font/google"
import TopScrol from "@/components/landingpage/top-scroll"
import Navigation from "@/components/landingpage/navigation"
import Footer from "@/components/landingpage/footer"
import "./globals.css"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
})

export const metadata = {
  title: "Princocoa Studio - Creative Design and Branding Agency",
  description:
    "Princocoa Studio is a creative design and branding agency offering web design, brand identity, photography, videography, and marketing services that help brands stand out.",
  keywords: [
    "Princocoa",
    "branding agency",
    "creative design",
    "web design",
    "photography",
    "videography",
    "marketing agency",
    "brand identity",
    "Lagos Nigeria",
  ],
  authors: [{ name: "Princocoa" }],
  openGraph: {
    title: "Princocoa - Creative Design and Branding Agency",
    description:
      "We bring your ideas to life through design, creativity, and strategy. Discover our work in branding, web design, and visual storytelling.",
    url: "https://yourwebsite.com", // replace with your actual domain
    siteName: "Princocoa",
    images: [
      {
        url: "/og-image.jpg", // add your image to /public
        width: 1200,
        height: 630,
        alt: "Princocoa Creative Agency",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico", // place favicon.ico inside your /public folder
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} font-sans antialiased bg-[#d0e6f1]`}>
        <TopScrol />
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  )
}
