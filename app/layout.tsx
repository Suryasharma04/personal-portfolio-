import { Inter, Playfair_Display} from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import ActiveSectionContextProvider from "@/context/activeSectionContext";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/footer";
import ThemeSwitch from "@/components/ThemeSwitch";
import ThemeContextProvider from "@/context/themeContext";
import CustomCursor from "./CustomCursor";

// const inter = Inter({ subsets: ["latin"] });
const playfairDisplay = Playfair_Display({ subsets: ["latin"] });

export const metadata = {
  title: "Surya | Personal Portfolio",
  description: "Portfolio Website for Surya Sharma",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
})
 {
  return (
    <html lang="en" className="!scroll-smooth">
      <body className={`${playfairDisplay.className} bg-gray-50 text-gray-950 relative pt-28 sm:pt-36 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}>

        <div className="bg-[#ffeaea] absolute top-[-6rem] -z-10 right-[0rem] h-[20rem] w-[30rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#4f1a38]"></div>

        <div className="bg-[#fff8de] absolute top-[-1rem] -z-10 left-[-10rem] h-[30rem] w-[20rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#423812]"></div>

        <ThemeContextProvider>
        <ActiveSectionContextProvider> 

        <Header/>
        {children}
        <Footer />
        <Toaster position="top-right"/>
        <ThemeSwitch />


<CustomCursor /> 

        </ActiveSectionContextProvider>
        </ThemeContextProvider>
        </body>
    </html>
  );
}
