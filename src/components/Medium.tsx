import React, { useState, useEffect } from 'react';
import { Card, CardFooter, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

// Define the structure of a Medium post from the rss2json API
interface MediumPost {
  title: string;
  pubDate: string;
  link: string;
  guid: string;
  author: string;
  thumbnail: string;
  description:string;
  content: string;
  enclosure: {
    link: string;
    type: string;
    length: number;
  };
  categories: string[];
  posterImage: string; // Custom field for the extracted poster image
}

// Function to strip HTML and truncate text
const cleanAndTruncate = (html: string, length: number = 80): string => {
  // First, remove the image tag to avoid its alt text appearing.
  const textWithoutImage = html.replace(/<img[^>]*>/g, "");
  // Then, strip all other HTML tags.
  const text = textWithoutImage.replace(/<[^>]*>/g, '');
  if (text.length <= length) {
    return text;
  }
  return text.substring(0, length) + '...';
};

// Function to format date
const formatDate = (dateString: string): string => {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};

const Medium = () => {
  const [posts, setPosts] = useState<MediumPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const mediumUsername = '@tapasviMadhak';

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/${mediumUsername}`
        );
        if (!response.ok) {
          throw new Error('Failed to fetch Medium posts. Please check the username.');
        }
        const data = await response.json();
        if (data.status !== 'ok') {
          throw new Error(data.message || 'An error occurred while fetching the feed.');
        }
        
        // Process posts to extract the main image from the description
        const processedPosts = data.items.map((post: any) => {
          const match = post.description.match(/<img[^>]+src="([^">]+)"/);
          return {
            ...post,
            posterImage: match ? match[1] : post.thumbnail, // Fallback to original thumbnail
          };
        });

        setPosts(processedPosts);
        setError(null);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError('An unknown error occurred.');
        }
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [mediumUsername]);

  return (
    <section id="medium" className="py-20 md:py-32 bg-secondary">
      <div className="container">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            From My Blog
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Insights, tutorials, and stories from my journey in tech.
          </p>
        </div>

        <div className="relative mt-12">
          {loading && (
            <div className="flex overflow-hidden">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="min-w-0 shrink-0 grow-0 basis-full p-4 md:basis-1/2 lg:basis-1/3">
                  <Card className="animate-pulse">
                    <div className="aspect-video w-full bg-muted"></div>
                    <div className="p-4">
                      <div className="h-4 w-1/2 rounded bg-muted"></div>
                      <div className="mt-3 h-5 w-3/4 rounded bg-muted"></div>
                      <div className="mt-3 h-4 w-full rounded bg-muted"></div>
                      <div className="mt-2 h-4 w-5/6 rounded bg-muted"></div>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          )}

          {error && (
            <div className="text-center text-destructive">
              <p>Error: {error}</p>
            </div>
          )}

          {!loading && !error && posts.length > 0 && (
            <Carousel
              opts={{
                align: 'start',
                loop: posts.length > 3,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-4">
                {posts.slice(0, 6).map((post) => (
                  <CarouselItem key={post.guid} className="pl-4 md:basis-1/2 lg:basis-1/3">
                    <div className="h-full p-1">
                      <a
                        href={post.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group block h-full"
                      >
                        <Card className="flex h-full flex-col overflow-hidden transition-all group-hover:shadow-xl group-hover:-translate-y-1">
                          <div className="aspect-video overflow-hidden">
                            <img
                              src={post.posterImage}
                              alt={post.title}
                              className="h-full w-full object-cover transition-transform group-hover:scale-105"
                            />
                          </div>
                          <div className="flex flex-grow flex-col p-4">
                            <p className="text-xs text-muted-foreground">
                              {formatDate(post.pubDate)}
                            </p>
                            <CardTitle className="mt-2 text-base font-bold leading-snug">
                              {post.title}
                            </CardTitle>
                            <p className="mt-2 flex-grow text-sm text-card-foreground/80">
                              {cleanAndTruncate(post.description)}
                            </p>
                            <CardFooter className="mt-3 flex flex-wrap gap-2 p-0">
                              {post.categories.slice(0, 3).map((tag) => (
                                <Badge key={tag} variant="outline" className="text-xs">{tag}</Badge>
                              ))}
                            </CardFooter>
                          </div>
                        </Card>
                      </a>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          )}
        </div>
      </div>
    </section>
  );
};

export default Medium;
