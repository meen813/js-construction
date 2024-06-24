'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';

type Post = {
  postId: string;
  title: string;
  content: string;
  author: string;
  imageUrl: string;
  createdAt: string;
}

export default function PostPage() {
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const params = useParams();
  const { id } = params; 

  useEffect(() => {
    if (id) {
      const fetchPost = async () => {
        try {
          const response = await fetch(`/api/posts/${id}`);
          if (!response.ok) {
            throw new Error('Failed to fetch');
          }
          const data = await response.json();
          setPost(data);
          setLoading(false);
        } catch (error) {
          console.error('Error fetching post:', error);
          setLoading(false);
        }
      };

      fetchPost();
    }
  }, [id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!post) {
    return <p>Post not found</p>;
  }

  return (
    <section className="p-8">
      <div className="p-10" />
      <div className="flex flex-col items-center w-full max-w-2xl mx-auto bg-white rounded-lg shadow-lg">
        <div className="flex flex-row justify-between w-full p-4 bg-gray-100 rounded-t-lg">
          <p className="text-gray-700 font-semibold">{post.author}</p>
          <p className="text-gray-700">{new Date(post.createdAt).toLocaleString()}</p>
        </div>
        <div className="w-full p-4">
          <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
          {post.imageUrl && (
            <div className="mb-4">
              <Image
                src={post.imageUrl}
                alt={post.title}
                objectFit="cover"
                className="rounded-lg shadow-lg"
                width={800}
                height={400}
              />
            </div>
          )}
          <p className="text-gray-700">{post.content}</p>
        </div>
      </div>
    </section>
  );
}
