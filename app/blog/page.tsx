"use client";
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

type BlogPost = {
  title: string;
  content: React.ReactNode;
  author: string;
  date: string;
};

const blogPosts: BlogPost[] = [
  {
    title: "XERFLIX IS FREE ADS!",
    content: (
      <>
        <p>
          Are you tired of endless ads interrupting your streaming experience? Say goodbye to them with xerflix - the ultimate ad-free streaming website. Enjoy your favorite shows and movies without any distractions. Try it now! xerflix streaming adfree
        </p>
      </>
    ),
    author: "XerFliX",
    date: "2024-08-05",
  },
  {
    title: "Thaks For Supporting XerFlix",
    content: (
      <>
        <p>
          Behind every successful streaming service lies a dedicated community of supporters. Thank you for being a part of ours. Your love and loyalty mean everything to us. 🙌🎬 XerFlix StreamingCommunity
        </p>
      </>
    ),
    author: "Xerflix",
    date: "2024-08-06",
  },
];

export default function BlogPage() {
  const router = useRouter();
  return (
    <>
      <Pattern variant="checkered" />
      <SiteHeader />
      <div className="mx-auto max-w-4xl p-4">
        <section className="flex items-center justify-center py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">XerFlix Blog</h1>
            <p className="text-lg text-muted-foreground">
              Stay updated with the latest news and announcements from XerFlix.
            </p>
          </div>
        </section>
        <section className="space-y-8">
          {blogPosts.map((post, index) => (
            <div key={index} className="bg-black rounded-lg text-white shadow-md p-6">
              <div className="flex items-center mb-4">
                <div>
                  <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
                  <p className="text-sm text-gray-400">
                    By {post.author} on {post.date}
                  </p>
                </div>
              </div>
              <div className="text-gray-300">{post.content}</div>
            </div>
          ))}
        </section>
      </div>
      <footer className="bg-transparent text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center space-y-4">
            <p className="text-sm">
              © 2024 XerFlix. All rights reserved.
            </p>
            <p className="text-sm">
              Made with ❤️ By: Xer.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
