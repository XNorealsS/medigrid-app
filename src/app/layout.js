import "../app/styles/globals.css";
import AuthProvider from "../app/components/SessionProvider";

export const metadata = {
  title: "Login App",
  description: "Login with Google using NextAuth",
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
