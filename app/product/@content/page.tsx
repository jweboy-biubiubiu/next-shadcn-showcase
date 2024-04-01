import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { request } from "@/lib/request";
import dayjs from "dayjs";
import Link from "next/link";
import React from "react";

type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

const PlatformContent = async ({ searchParams }: Props) => {
  const data = await request("/platform");
  console.log(searchParams);
  return (
    <div className="grid grid-cols-3 gap-6 ">
      {Array.isArray(data) &&
        data.map((item) => (
          <Link href={item.url} target="_blank" key={item.id}>
            <Card className="relative">
              <CardHeader>
                <CardTitle>{item.name}</CardTitle>
                <CardDescription className="flex justify-between">
                  Update At:{" "}
                  {dayjs(item.update_at).format("YYYY-MM-DD HH:mm:ss")}
                </CardDescription>
                <Badge variant="destructive" className="absolute right-6 mt-0">
                  {item.tag}
                </Badge>
              </CardHeader>
              <CardContent>
                {/* @ts-ignore */}
                {item.description.split("\n").map((item, index) => (
                  <div
                    key={index}
                    className="grid grid-cols-[25px_1fr] items-start pb-1"
                  >
                    <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
                    <div className="space-y-1">
                      <p className="text-sm text-foreground">{item}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </Link>
        ))}
    </div>
  );
};

export default PlatformContent;
