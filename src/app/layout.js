import "../app/styles/globals.css";
import AuthProvider from "../app/components/SessionProvider";

export const metadata = {
  title: "Medigrid App",
  description: "Great Medical for you",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
