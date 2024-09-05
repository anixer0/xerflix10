"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function VideoPlayer({ id }:any) {
  return (
    <div className="pb-8">
      <Tabs defaultValue="vidlink">
        <div className="flex flex-col items-center">
          <TabsList>
            <TabsTrigger value="xer2">Xer2</TabsTrigger>
            <TabsTrigger value="vidsrcvip">VidSrc.Vip</TabsTrigger>
            <TabsTrigger value="vidsrcpro">Vidsrc.pro</TabsTrigger>
            <TabsTrigger value="vidsrcin">Vid.In</TabsTrigger>
            <TabsTrigger value="superembed">SuperEmbed</TabsTrigger>
            <TabsTrigger value="vidlink">vidlink</TabsTrigger>
          </TabsList>
          </div>
          <iframe
            <TabsContent value="xer2">
          <iframe
            src={`https://play2.123embed.net/movie/${id}`}
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
            src={`https://vidsrc.vip/embed/movie/${id}`}
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
            src={`https://vidsrc.pro/embed/movie/${id}`}
            referrerPolicy="origin"
            allowFullScreen
            width="100%"
            height="450"
            scrolling="no"
            className="max-w-3xl mx-auto px-4 pt-10"
          ></iframe>
        </TabsContent>
        <TabsContent value="vidsrc">
          <iframe
            src={`https://vidsrc.in/embed/movie/${id}`}
            referrerPolicy="origin"
            allowFullScreen
            width="100%"
            height="450"
            scrolling="no"
            className="max-w-3xl mx-auto px-4 pt-10"
          ></iframe>
        </TabsContent>
        <TabsContent value="vidlink">
          <iframe
            src={`https://vidlink.pro/movie/${id}`}
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
            src={`https://multiembed.mov/?video_id=${id}&tmdb=1`}
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
