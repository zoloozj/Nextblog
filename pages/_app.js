import "styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <div className="bg-slate-100 text-gray-600">
      <Component {...pageProps} />
    </div>
  );
}
