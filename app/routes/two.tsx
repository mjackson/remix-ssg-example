import { useLoaderData } from "@remix-run/react";

export function loader() {
  return { text: "Hello static page two!" };
}

export default function Component() {
  let { text } = useLoaderData();

  return (
    <div>
      <h1>Page Two</h1>
      <p>{text}</p>
    </div>
  );
}
