import { Header } from "@/components/Header/Header";
import { ReduxProvider } from "@/components/ReduxProvider/ReduxProvider";
import "./globals.css";

export const metadata = {
  title: "City Events Radar",
  description: "Discover amazing events in your city",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        <ReduxProvider>
          <Header />
          {children}
        </ReduxProvider>
      </body>
    </html>
  );
}
