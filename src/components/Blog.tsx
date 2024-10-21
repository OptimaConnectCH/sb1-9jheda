import React from 'react';
import { Calendar, User } from 'lucide-react';

const BlogPost = ({ title, excerpt, date, author, image }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden">
    <img src={image} alt={title} className="w-full h-48 object-cover" />
    <div className="p-6">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{excerpt}</p>
      <div className="flex items-center text-sm text-gray-500">
        <Calendar size={16} className="mr-2" />
        <span className="mr-4">{date}</span>
        <User size={16} className="mr-2" />
        <span>{author}</span>
      </div>
    </div>
  </div>
);

const Blog = () => {
  const posts = [
    {
      title: "The Future of AI in Digital Marketing",
      excerpt: "Explore how artificial intelligence is reshaping the landscape of digital marketing and what it means for businesses.",
      date: "May 15, 2023",
      author: "John Doe",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      title: "Automation Strategies for Business Growth",
      excerpt: "Learn about the latest automation techniques that can help streamline your business processes and drive growth.",
      date: "May 10, 2023",
      author: "Jane Smith",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      title: "SEO Trends to Watch in 2023",
      excerpt: "Stay ahead of the curve with these emerging SEO trends that will shape the digital landscape in the coming year.",
      date: "May 5, 2023",
      author: "Mike Johnson",
      image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    }
  ];

  return (
    <section id="blog" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Latest Insights</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <BlogPost key={index} {...post} />
          ))}
        </div>
        <div className="mt-12 text-center">
          <a href="#" className="text-blue-600 font-semibold hover:underline">
            View all articles
          </a>
        </div>
      </div>
    </section>
  );
};

export default Blog;