import { component$ } from "@builder.io/qwik";
import { QwikLogo } from "../../starter/icons/qwik";

export default component$(() => {
  return (
    <header class="container flex items-center justify-between">
      <div class="inline-block">
        <a href="/" title="qwik" class="block">
          <QwikLogo height={50} width={143} />
        </a>
      </div>
      <div class="m-0 flex gap-7 p-0">
        <NavLink href="" title="Sights" />
        <NavLink href="" title="Food" />
        <NavLink href="" title="Day Drinks" />
        <NavLink href="" title="Night Drinks" />
      </div>
    </header>
  );
});

export const NavLink = component$(
  ({ href, title }: { href: string; title: string }) => {
    return (
      <>
        <a class="inline-block text-white hover:text-blue-400" href={href}>
          {title}
        </a>
      </>
    );
  },
);
