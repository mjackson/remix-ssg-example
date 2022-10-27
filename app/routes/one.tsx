import { useLoaderData } from "@remix-run/react";

export function loader() {
  return { text: "Hello static page one!" };
}

export default function Component() {
  let { text } = useLoaderData();

  return (
    <div>
      <h1>Page One</h1>
      <p>{text}</p>
    </div>
  );
}
