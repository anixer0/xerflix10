"use client";
import * as React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@nextui-org/react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function VideoPlayer({ id }: any) {
  const [episode, setEpisode] = React.useState("1");
  const [season, setSeason] = React.useState("1");
  return (
    <div className="pb-8">
      <div className="pb-4">
        <div className="flex flex-col text-center items-center justify-center">
          <div className="border-2 rounded-md	pl-4 flex w-full max-w-sm items-center space-x-2">
            Season:{" "}
            <Input
              placeholder="Season"
              value={season}
              onValueChange={setSeason}
            />{" "}
            Episode:{" "}
            <Input
              placeholder="Episode"
              value={episode}
              onValueChange={setEpisode}
            />
          </div>
        </div>
        <div className="pt-4">
          <div className="flex flex-col text-center items-center justify-center">
            <Link href={`https://dl.vidsrc.vip/tv/${id}/${season}/${episode}`}>
              <Button>Download EP: {episode}</Button>
            </Link>
          </div>
        </div>
      </div>
      <Tabs defaultValue="Xerflix1">
        <div className="flex flex-col items-center">
          <TabsList>
            <TabsTrigger value="Xerflix1">Xerflix1</TabsTrigger>
            <TabsTrigger value="vidsrcvip">VidSrc.Vip</TabsTrigger>
            <TabsTrigger value="vidsrcpro">Vid.Pro</TabsTrigger>
            <TabsTrigger value="vidsrcin">Vid.In</TabsTrigger>
            <TabsTrigger value="superembed">SuberEmbed</TabsTrigger>
          </TabsList>
        </div>
        <TabsContent value="Xerflix1">
          <iframe
            src={`https://play2.123embed.net/tv/${id}/${season}/${episode}`}
            referrerPolicy="origin"
            allowFullScreen
            width="100%"
            height="450"
            scrolling="no"
            className="max-w-3xl mx-auto px-4 pt-10"
          ></iframe>
        </TabsContent>
        <TabsContent value="vidsrcvip">
          <iframe
            src={`https://vidsrc.vip/embed/tv/${id}/${season}/${episode}`}
            referrerPolicy="origin"
            allowFullScreen
            width="100%"
            height="450"
            scrolling="no"
            className="max-w-3xl mx-auto px-4 pt-10"
          ></iframe>
        </TabsContent>
        <TabsContent value="vidsrcpro">
          <iframe
            src={`https://vidsrc.pro/embed/tv/${id}/${season}/${episode}`}
            referrerPolicy="origin"
            allowFullScreen
            width="100%"
            height="450"
            scrolling="no"
            className="max-w-3xl mx-auto px-4 pt-10"
          ></iframe>
        </TabsContent>
        <TabsContent value="vidsrcin">
          <iframe
            src={`https://vidsrc.in/embed/tv/${id}/${season}/${episode}`}
            referrerPolicy="origin"
            allowFullScreen
            width="100%"
            height="450"
            scrolling="no"
            className="max-w-3xl mx-auto px-4 pt-10"
          ></iframe>
        </TabsContent>
        <TabsContent value="superembed">
          <iframe
            src={`https://multiembed.mov/?video_id=${id}&tmdb=1&s=${season}&e=${episode}`}
            referrerPolicy="origin"
            allowFullScreen
            width="100%"
            height="450"
            scrolling="no"
            className="max-w-3xl mx-auto px-4 pt-10"
          ></iframe>
        </TabsContent>
      </Tabs>
    </div>
  );
}
