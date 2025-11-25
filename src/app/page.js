import BlogSection from "@/components/home/BlogSection";
import FeaturedProduct from "@/components/home/FeaturedProduct";
import HeroBanner from "@/components/home/HeroBanner";
import { ReviewSection } from "@/components/home/ReviewSection";
import SpecialOffers from "@/components/home/SpecialOffers";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Image from "next/image";

export default function Home() {
  return (
    <div className=" font-sans dark:bg-black">
 <HeroBanner></HeroBanner>
 <FeaturedProduct></FeaturedProduct>

 <WhyChooseUs></WhyChooseUs>
 <ReviewSection></ReviewSection>
 <BlogSection></BlogSection>
    </div>
  );
}
