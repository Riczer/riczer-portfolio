import { ProjectType } from "@/constants/projects";
import Image from "next/image";

export function Project({ title, description, image, live }: ProjectType) {
  return (
    <div className="rounded-lg border-2 overflow-hidden flex flex-col">
      <Image src={image} alt={title} />
      <div className="p-4 flex flex-col gap-2 flex-1">
        <h1 className="text-xl font-bold">{title}</h1>
        <p className="flex-1">{description}</p>
        {live && (
          <a
            href={live}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary rounded-lg text-secondary p-2 inline-block self-end"
          >
            Live demo
          </a>
        )}
      </div>
    </div>
  );
}
