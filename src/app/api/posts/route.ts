import { NextRequest, NextResponse } from 'next/server';
import AWS from 'aws-sdk';
import { v4 as uuidv4 } from 'uuid';
import { createPost, getPosts } from '@/app/service/posts';

AWS.config.update({ region: process.env.AWS_REGION });

const s3 = new AWS.S3();
const BUCKET_NAME = process.env.BUCKET_NAME || 'post-images-jsconstruction';

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const title = formData.get('title') as string;
    const content = formData.get('content') as string;
    const author = formData.get('author') as string;
    const image = formData.get('image') as File;

    if (!title || !content) {
      return NextResponse.json({ message: 'Title and content are required' }, { status: 400 });
    }

    let imageUrl = '';

    if (image) {
      const imageId = uuidv4();
      const params = {
        Bucket: BUCKET_NAME as string,
        Key: `${imageId}-${image.name}`,
        Body: Buffer.from(await image.arrayBuffer()),
        ContentType: image.type,
      };

      try {
        const uploadResult = await s3.upload(params).promise();
        imageUrl = uploadResult.Location;
      } catch (error) {
        console.error('Error uploading image:', error);
        return NextResponse.json({ message: 'Error uploading image' }, { status: 500 });
      }
    }

    const newPost = await createPost(title, content, author, imageUrl);
    return NextResponse.json(newPost, { status: 201 });

  } catch (error) {
    console.error('Error creating post:', error);
    return NextResponse.json({ message: 'Error creating post' }, { status: 500 });
  }
}

export async function GET() {
  try {
    const posts = await getPosts();
    return NextResponse.json(posts, { status: 200 });
  } catch (error) {
    console.error('Error fetching posts:', error);
    return NextResponse.json({ message: 'Error fetching posts' }, { status: 500 });
  }
}
