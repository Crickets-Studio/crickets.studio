import fs from "fs";
import matter from "gray-matter";
import { GetStaticProps } from "next";
import { useRouter } from "next/router";

import BtnLink from "@/Buttons/BtnLink";
import Hero from "@/components/Hero";

type MarkdownProps = {
  content: string;
  data: {
    [key: string]: any;
  };
};

const Markdown = ({ content, data }: MarkdownProps) => {
  const router = useRouter();

  return (
    <>
      <Hero title={data.title}>
        <div dangerouslySetInnerHTML={{ __html: content }} />
        <BtnLink onClick={() => router.replace("/")}>Back</BtnLink>
      </Hero>
    </>
  );
};
export const getStaticProps: GetStaticProps<MarkdownProps> = async () => {
  const file = fs.readFileSync("./markdown/about.md", "utf-8");

  const { content, data } = matter(file);

  return { props: { content, data } };
};

export default Markdown;
