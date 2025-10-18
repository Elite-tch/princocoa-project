import { Poppins } from "next/font/google"
import TopScrol from "@/components/landingpage/top-scroll"
import "./globals.css"
import Navigation from "@/components/landingpage/navigation"
import Footer from "@/components/landingpage/footer"
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
})

export const metadata = {
  title: "Seventh House Marketing - Creative Marketing Agency",
  description: "A marketing agency helping brands craft campaigns that turn heads and drive results",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} font-sans antialiased`}>
        <TopScrol />
        <Navigation />
        {children}
         <Footer/>
      </body>
    </html>
  )
}
