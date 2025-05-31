import { redirect, RedirectType } from "next/navigation";

export default function HomePage() {
  redirect("/recipes", RedirectType.replace);
}
