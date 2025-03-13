import { API } from "@/src/shared/api";
import { Button } from "@/src/shared/ui";

async function getMenu(firstCategory: number) {
  const res = await fetch(API.topPage.find, {
    method: "POST",
    body: JSON.stringify({ firstCategory: firstCategory }),
    headers: new Headers({ "content-type": "application/json" }),
  });

  return res.json();
}

export default async function Home() {
  const menu = await getMenu(0);

  return <div>Страница</div>;
}
