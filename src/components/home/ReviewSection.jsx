import { cn } from "@/lib/utils";
import { Marquee } from "../ui/marquee";
import Image from "next/image";


const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "MegaMart has changed the way I shop online. Absolutely incredible experience!",
    img: "/review-avatar-1.png",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "The product quality and delivery speed are unmatched. Highly recommended!",
    img: "/review-avatar-2.png",
  },
  {
    name: "John",
    username: "@john",
    body: "Smooth UI, fast checkout, and amazing offers. MegaMart is my go-to store.",
    img: "/review-avatar-3.png",
  },
  {
    name: "Jane",
    username: "@jane",
    body: "Customer service is excellent! Shopping here feels premium.",
    img: "/review-avatar-4.png",
  },
  {
    name: "Jenny",
    username: "@jenny",
    body: "Best online store experience ever! Super clean UI and helpful features.",
    img: "/review-avatar-5.png",
  },
  {
    name: "James",
    username: "@james",
    body: "Amazing products with great prices. MegaMart never disappoints!",
    img: "/review-avatar-6.png",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({ img, name, username, body }) => {
  return (
    <figure
      className={cn(
        "relative h-full w-72 cursor-pointer overflow-hidden rounded-xl",
        "border border-primary/20 bg-white/80 backdrop-blur-sm shadow-md",
        "hover:shadow-xl hover:-translate-y-1 transition-all duration-300",
        "dark:bg-gray-900/60 dark:border-primary/30"
      )}
    >
      <div className="flex flex-row items-center gap-3 p-4">
       <Image
  src={img}
  alt={name}
  width={40}
  height={40}
  className="rounded-full border border-primary/40"
/>

        <div className="flex flex-col">
          <figcaption className="text-base font-bold text-primary">
            {name}
          </figcaption>
          <p className="text-xs text-gray-600 dark:text-gray-300">
            {username}
          </p>
        </div>
      </div>

      <blockquote className="px-4 pb-4 text-sm text-gray-700 dark:text-gray-200">
        {body}
      </blockquote>
    </figure>
  );
};

export function ReviewSection() {
  return (
    <section className="relative w-full my-12 bg-base-100 overflow-hidden max-w-11/12 mx-auto">
      {/* Top Title */}
     
        <h2 className="text-3xl font-bold text-primary mb-8 text-center">
          What Our Customers Say
        </h2>
       
      

      {/* Marquee Rows */}
      <div className="relative flex flex-col items-center justify-center">
        <Marquee pauseOnHover className="[--duration:18s]">
          {firstRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>

        <Marquee reverse pauseOnHover className="[--duration:18s]">
          {secondRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>

        {/* gradient fade edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-base-100"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-base-100"></div>
      </div>
    </section>
  );
}
