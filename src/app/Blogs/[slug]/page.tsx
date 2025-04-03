import Image from "next/image";
import Link from "next/link";

// Define the expected type for a blog post
type BlogPost = {
  date: string;
  title: string;
  image: string;
  content: string;
};

// Define the expected structure of blog posts
const blogPosts: Record<string, BlogPost> = {
  "how-a-typical-vacation-of-a-single-girl-should-look-like": {
    date: "MAR 24, 2025",
    title: "How A Typical Vacation Of A Single Girl Should Look Like!",
    image: "/blog1.png",
    content: "We are able to provide these needs through the donations of individuals...",
  },
  "the-art-of-self-care-a-guide-for-modern-women": {
    date: "MAR 24, 2025",
    title: "The Art of Self-Care: A Guide for Modern Women",
    image: "/blog1.png",
    content: "Discover essential self-care practices...",
  },
  "career-growth-strategies-for-women-in-tech": {
    date: "MAR 22, 2025",
    title: "Career Growth Strategies for Women in Tech",
    image: "/blog1.png",
    content: "Explore effective strategies...",
  },
  "financial-independence-smart-money-tips-for-women": {
    date: "MAR 20, 2025",
    title: "Financial Independence: Smart Money Tips for Women",
    image: "/blog1.png",
    content: "Learn practical financial advice...",
  },
};

// ✅ Define the expected type for the page props
interface PageProps {
  // params: { slug: string };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  params: any;
}

// ✅ Define the function to generate static paths
export function generateStaticParams(): PageProps["params"][] {
  return Object.keys(blogPosts).map((slug) => ({ slug }));
}

// ✅ Ensure the BlogPost component matches the expected Next.js type
export default function BlogPost({ params }: PageProps) {
  const { slug } = params;
  const blogPost = blogPosts[slug];

  if (!blogPost) {
    return (
      <div className="container mx-auto px-6 py-16 min-h-screen">
        <h1 className="text-4xl font-bold">Blog Post Not Found</h1>
        <p>Sorry, the blog post you’re looking for doesn’t exist.</p>
        <Link href="/Blogs" className="text-pink-600">Back to Blogs</Link>
      </div>
    );
  }

  return (
    <article className="container mx-auto px-6 py-16 min-h-screen">
      <h1 className="text-4xl font-bold">{blogPost.title}</h1>
      <Image src={blogPost.image} alt={blogPost.title} width={800} height={400} />
      <p className="text-gray-700">{blogPost.content}</p>
      <Link href="/Blogs" className="text-pink-600">Back to Blogs</Link>
    </article>
  );
}
