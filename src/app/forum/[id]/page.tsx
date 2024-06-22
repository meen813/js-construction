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
  const params = useParams(); // useParams 훅 사용
  const { id } = params; // id를 params에서 추출

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
      <div className='flex flex-col items-center w-full'>
        <div className='flex flex-row overflow-x-auto w-1/2 justify-between bg-gray-200'>
          <p className="text-gray-500">{post.author}</p>
          <p className="text-gray-500">{new Date(post.createdAt).toLocaleString()}</p>
        </div>
        <div className="mb-4 bg-red-100 w-1/2">
          <p className="text-3xl font-bold">{post.title}</p>
          {post.imageUrl && (
            <Image
              src={post.imageUrl}
              alt={post.title}
              // layout="fill"
              objectFit="cover"
              className="rounded-lg shadow-lg"
              width={500}
              height={200}
            />
          )}
        </div>
        <p className="text-gray-700">{post.content}</p>
      </div>
    </section>
  );
}
