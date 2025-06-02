import React from 'react';
import { BlogCard } from '../components/BlogCard';
import blogData from '../data/blogs.json';

export function Blog() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0B1120] via-[#0F1A2E] to-[#1B2C4B]">
      <div className="container mx-auto px-4 py-32">
        <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-transparent bg-clip-text">
          Blog
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogData.posts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
}