import "../styles.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body class="flex-col items-center bg-white dark:bg-gradient-to-r dark:from-[#1b2129] dark:to-[#111213]">
        {children}
      </body>
    </html>
  );
}
