import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <>
    </>
  );
});

export const head: DocumentHead = {
  title: "Recofriend",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
