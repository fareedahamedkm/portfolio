import React from 'react';
import { Link } from 'react-router-dom';

interface BlogPost {
  title: string;
  slug: string;
  description: string;
  date: string;
  coverImage: string;
}

interface BlogCardProps {
  post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <Link 
      to={`/blog/${post.slug}`}
      className="group bg-gradient-to-br from-[#0F1A2E]/80 to-[#1B2C4B]/80 backdrop-blur-lg rounded-2xl overflow-hidden shadow-2xl border border-indigo-500/20 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-indigo-500/20"
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={post.coverImage} 
          alt={post.title} 
          className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
      </div>
      <div className="p-6">
        <div className="text-sm text-gray-400 mb-2">{new Date(post.date).toLocaleDateString()}</div>
        <h3 className="text-xl font-semibold mb-2 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
          {post.title}
        </h3>
        <p className="text-gray-300 line-clamp-3">{post.description}</p>
        <div className="mt-4 inline-flex items-center text-blue-400 group-hover:text-blue-300 transition-colors">
          Read More
          <svg 
            className="w-4 h-4 ml-2" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      </div>
    </Link>
  );
}