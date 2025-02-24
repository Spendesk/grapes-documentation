import { Timeline, TimelineItem } from "@dev-spendesk/grapes";
import Link from "next/link";
import React from "react";
import { getBlogPosts } from "./utils";

export default function Components() {
  const blogs = getBlogPosts();

  return (
    <>
      <h1 className="heading-xxl">Latest Updates</h1>
      <Timeline className="mt-64">
        {blogs.map((blog) => {
          return (
            <TimelineItem
              key={blog.slug}
              date={new Date(blog.metadata.publishedAt)}
            >
              <section>
                <h2 className="title-xl text-primary">{blog.metadata.title}</h2>
                <p className="body-l text-secondary-bg-primary">
                  {blog.metadata.summary}
                </p>
              </section>
              <div className="mt-8">
                <Link
                  className="text-brand-default hover:text-brand-hover"
                  href={`blog/${blog.slug}`}
                >
                  Read more
                </Link>
              </div>
            </TimelineItem>
          );
        })}
      </Timeline>
    </>
  );
}
