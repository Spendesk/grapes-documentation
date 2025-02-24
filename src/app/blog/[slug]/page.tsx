import { getBlogPosts } from "../utils";

export async function generateStaticParams() {
  const posts = getBlogPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props) {
  const slug = (await params).slug;
  const post = getBlogPosts().find((post) => post.slug === slug);

  if (!post) {
    throw new Error("Unable to find post");
  }

  const {
    title,
    publishedAt: publishedTime,
    summary: description,
  } = post.metadata;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime,
    },
  };
}

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function Blog({ params }: Props) {
  const slug = (await params).slug;
  const { default: Post } = await import(`../_posts/${slug}.mdx`);

  const post = getBlogPosts().find((post) => post.slug === slug);

  if (!post) {
    throw new Error("Unable to find post");
  }

  const date = new Intl.DateTimeFormat("en-US", {
    dateStyle: "long" as const,
    timeStyle: "short" as const,
  }).format(new Date(post.metadata.publishedAt));

  return (
    <section>
      <h1 className="heading-xxl text-primary">{post.metadata.title}</h1>
      <p className="body-m text-secondary-bg-primary">{date}</p>
      <article className="content mt-32">
        <Post />
      </article>
    </section>
  );
}
