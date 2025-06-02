import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { marked } from 'marked';
import blogData from '../data/blogs.json';

export function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = blogData.posts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#0B1120] via-[#0F1A2E] to-[#1B2C4B] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-300 mb-4">Post Not Found</h1>
          <Link 
            to="/blog"
            className="text-blue-400 hover:text-blue-300 transition-colors"
          >
            Return to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0B1120] via-[#0F1A2E] to-[#1B2C4B]">
      <div className="container mx-auto px-4 py-32">
        <Link 
          to="/blog"
          className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors mb-8"
        >
          <svg 
            className="w-4 h-4 mr-2" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back to Blog
        </Link>

        <div className="max-w-4xl mx-auto">
          <div className="relative h-96 mb-8 rounded-2xl overflow-hidden">
            <img 
              src={post.coverImage} 
              alt={post.title} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
          </div>

          <div className="text-sm text-gray-400 mb-4">{new Date(post.date).toLocaleDateString()}</div>
          <h1 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-transparent bg-clip-text">
            {post.title}
          </h1>

          <div 
            className="prose prose-invert prose-blue max-w-none"
            dangerouslySetInnerHTML={{ __html: marked(post.content) }}
          />
        </div>
      </div>
    </div>
  );
}