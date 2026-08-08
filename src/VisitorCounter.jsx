import { useEffect, useState } from "react";

/**
 * Shows a live visitor count on your site.
 * Uses CountAPI (free, no signup needed) to persist the count across visits.
 * Each unique page load increments the counter by 1.
 */
export default function VisitorCounter() {
  const [count, setCount] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    // Replace "satyamgupta-portfolio" with any unique namespace you like.
    // CountAPI creates the counter automatically the first time it's hit.
    const NAMESPACE = "satyamgupta-portfolio";
    const KEY = "site-visits";

    fetch(`https://api.countapi.xyz/hit/${NAMESPACE}/${KEY}`)
      .then((res) => res.json())
      .then((data) => setCount(data.value))
      .catch(() => setError(true));
  }, []);

  if (error) return null; // fail silently, don't break the page if API is down

  return (
    <div className="fixed bottom-4 right-4 z-40 flex items-center gap-2 bg-black/40 backdrop-blur-md border border-cyan-400/30 rounded-full px-4 py-2 text-sm text-gray-300">
      <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
      {count === null ? (
        <span>Loading visitors...</span>
      ) : (
        <span>
          <span className="text-cyan-400 font-semibold">{count.toLocaleString()}</span>{" "}
          visitors
        </span>
      )}
    </div>
  );
}