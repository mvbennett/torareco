import { component$ } from "@builder.io/qwik";

export default component$(
  ({
    category = "Coffee",
    description = "All the best coffee shops in Seoul",
    link = "/coffee",
    img,
  }: {
    category: string;
    description: string;
    link: string;
    img: string;
  }) => {
    return (
      <div>
        <a href={link}>
          <img src={img} height={200} width={300}></img>
          <h2>${category}</h2>
          <p>${description}</p>
        </a>
      </div>
    );
  },
);
