// 'use client';

// import { useEffect, useState } from 'react';
// import Link from 'next/link';

// type Post = {
//   postId: string;
//   title: string;
//   content: string;
//   author: string;
//   imageUrl: string;
//   createdAt: string;
//   formattedDate: string;
// };

// const formatDate = (dateString: string) => {
//   const date = new Date(dateString);
//   return date.toLocaleDateString('en-CA');
// };

// export default function Forum() {
//   const [posts, setPosts] = useState<Post[]>([]);
//   const [loading, setLoading] = useState<boolean>(true);

//   useEffect(() => {
//     const getPosts = async () => {
//       try {
//         const response = await fetch('/api/posts');
//         if (!response.ok) {
//           throw new Error('Failed to fetch');
//         }
//         let data = await response.json();
//         data.sort((a: Post, b: Post) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
//         setPosts(data);
//         setLoading(false);
//       } catch (error) {
//         console.error('Error fetching posts:', error);
//         setLoading(false);
//       }
//     };

//     getPosts();
//   }, []);

//   if (loading) {
//     return <p>Loading...</p>;
//   }

//   if (posts.length === 0) {
//     return <p>No posts found</p>;
//   }

//   return (
//     <section className="p-4 md:p-8">
//       <div className="p-10" />
//       <h1 className="text-2xl md:text-3xl font-bold flex justify-center mb-7">User Forum</h1>
//       <div className="flex flex-col items-center w-full">
//         <div className="flex justify-end w-full max-w-4xl mb-4">
//           <Link href="/newPost">
//             <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
//               New Post
//             </button>
//           </Link>
//         </div>
//         <div className="overflow-x-auto w-full max-w-4xl">
//           <table className="w-full bg-gray-100 border">
//             <thead>
//               <tr>
//                 <th className="px-4 py-2 border w-1/12">Post#</th>
//                 <th className="px-4 py-2 border">Title</th>
//                 <th className="px-4 py-2 border w-2/12">Author</th>
//                 <th className="px-4 py-2 border w-2/12">Posted On</th>
//               </tr>
//             </thead>
//             <tbody>
//               {posts.map((post, index) => (
//                 <tr key={post.postId} className="hover:bg-gray-100 text-center">
//                   <td className="px-4 py-2 border">
//                     {index + 1}
//                   </td>
//                   <td className="px-4 py-2 border">
//                     <Link href={`/forum/${post.postId}`}>
//                       {post.title}
//                     </Link>
//                   </td>
//                   <td className="px-4 py-2 border">{post.author}</td>
//                   <td className="px-4 py-2 border">{formatDate(post.createdAt)}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </section>
//   );
// }
