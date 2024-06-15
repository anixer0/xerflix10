"use client";
import Image from "next/image";
import { Pattern } from "@/components/pattern";
import { SiteHeader } from "@/components/navbar/site-header";
import { useRouter } from "next/navigation";
// Layout
import * as Craft from "@/components/craft";
import { Button } from "@/components/ui/button";
import Link from "next/link";

// Icons
import { Coins, ArrowRight, Pin } from "lucide-react";
import { Icons } from "@/components/icons";

type FeatureText = {
  title: string;
  description: string;
  href?: string;
};

const featureText: FeatureText[] = [
  {
    title: "Movie",
    href: "/movie",
    description: "Explore Movie Marvels: Spectacles Await You!",
  },
  {
    title: "Anime",
    href: "/anime",
    description: "Dive into Anime Worlds: Adventures Await!",
  },
  {
    title: "K-drama",
    href: "/kdrama",
    description: "Indulge in K Drama: Emotions Await!",
  },
  {
    title: "Tv Shows",
    href: "/tv",
    description: "Live on TV Shows: Addiction await ≥",
  },
];
const singleFeatureText: FeatureText[] = [
  {
    title: "Manga",
    href: "/manga",
    description: "Unleash Manga Magic: Stories Await!",
  },
];

type Post = {
  title: string;
  content: React.ReactNode;
  date: string;
  link: string;
};

const posts: Post[] = [
  {
    title: "📌 Thanks For Using XerFlix!",
    content: (
      <>
        <div>
          We wanted to take a moment to express our gratitude for your loyalty to XerFlix. Thank you!
          <br />
          
        </div>
      </>
    ),
    date: "2024-08-05",
    link: "/blog/"
  },
  {
    title: "📌 Please Send Any Amount On Gcash!",
    content: (
      <>
        <div>
         Your donation through GCash is greatly appreciated. Thank you for helping us continue to provide valuable content on our site.
         Gcash Number: 09260915228
        </div>
      </>
    ),
    date: "2024-08-06",
    link: "/blog/"
  },
];

export default function Home() {
  const router = useRouter();
  return (
    <>
      <Pattern variant="checkered" />
      <SiteHeader />
      <div className="mx-auto max-w-4xl p-4">
        <section className="flex h-[75vh] items-center md:h-[50vh]">
          <div className="mx-auto flex w-4/5 flex-col items-center justify-center space-y-4 text-center">
            <h1 className="text-6xl font-bold">
              XERFLIX
            </h1>
            <p className="text-sm leading-6 text-muted-foreground">
               XerFlix Is Ads Free Streaming Platform For Lazy People Who Like To
              <br />
              Watch Millions Of Movies, K-drama, Tv-series Read Manga And Animes For Free. Go Down To Watch
            </p>
            <div className="flex gap-2">
              <Link href={"https://www.facebook.com"}>
                <Button variant="default" disabled>
                  Facebook
                </Button>
              </Link>
              <Link href={"https://www.youtube.com"}>
                <Button variant="outline" disabled>
                  YouTube
                </Button>
              </Link>
              <Link href={"https://www.github.com"}>
                <Button variant="outline">
                  GitHub
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
      <section className="space-y-8">
        <Craft.Section className="">
          <Craft.Container className="">
            <div className="flex flex-col gap-6">
              <div className=" grid gap-6 md:grid-cols-2">
                {featureText.map(({ title, description, href }, index) => (
                  <Link
                    href={`${href}`}
                    className="flex flex-col justify-between gap-6 rounded-lg border p-6 transition-all hover:-mt-2 hover:mb-2"
                    key={index}
                  >
                    <div className="grid gap-4">
                      <h4 className="text-primary text-xl">
                        {title}{" "}
                        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                          -&gt;
                        </span>
                      </h4>
                      <p className="text-base opacity-75">{description}</p>
                    </div>
                  </Link>
                ))}
              </div>
              <div>
                {singleFeatureText.map(
                  ({ title, description, href }, index) => (
                    <Link
                      href={`${href}`}
                      className="flex flex-col justify-between gap-6 rounded-lg border p-6 transition-all hover:-mt-2 hover:mb-2"
                      key={index}
                    >
                      <div className="grid gap-4">
                        <h4 className="text-primary text-xl">
                          {title}{" "}
                          <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                            -&gt;
                          </span>
                        </h4>
                        <p className="text-base opacity-75">{description}</p>
                      </div>
                    </Link>
                  )
                )}
              </div>
            </div>
          </Craft.Container>
        </Craft.Section>
      </section>
      <section className="space-y-8">
  <Craft.Section className="">
    <Craft.Container className="">
      <h2 className="text-3xl font-bold mb-4">Latest Posts</h2>
      {posts.map((post, index) => (
        <div
          key={index}
          className="rounded-lg text-white shadow-md p-6 mb-8 transition-transform hover:scale-105"
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold">{post.title}</h3>
            <p className="text-sm text-gray-400">
              {post.date}
            </p>
          </div>
          <p className="text-gray-300">{post.content}</p>
          <div className="mt-4">
            <Link href={post.link} prefetch={false}>
              <Button variant="outline" className="text-white border-white hover:bg-white hover:text-black">
                Read More
              </Button>
            </Link>
          </div>
        </div>
      ))}
    </Craft.Container>
  </Craft.Section>
</section>
      <footer className="bg-transparent text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center space-y-4">
            <p className="text-sm">
              © 2024 XerFlix. All rights reserved.
            </p>
            <p className="text-sm">
              Made With ❤️ By: Xer.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
