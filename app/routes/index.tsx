import { useEffect } from "react";
import { Link } from "@remix-run/react";

export default function Index() {
  useEffect(() => {
    console.log("I'm hydrated now, baby!");
  });

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>Welcome to Remix</h1>
      <ul>
        <li>
          <Link reloadDocument to="one">
            Page One
          </Link>
        </li>
        <li>
          <Link reloadDocument to="two">
            Page Two
          </Link>
        </li>
      </ul>
    </div>
  );
}
