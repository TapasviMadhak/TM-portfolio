import { useState, useEffect } from 'react';
import { Card, CardFooter, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

// Define the structure of a Medium post from the rss2json API
interface MediumPost {
  title: string;
  pubDate: string;
  link: string;
  guid: string;
  author: string;
  thumbnail: string;
  description: string;
  content: string;
  enclosure: any;
  categories: string[];
  posterImage?: string;
}

// Utility function to clean and truncate the description
const cleanAndTruncate = (text: string, maxLength: number = 100) => {
  // Remove HTML tags and decode entities
  const cleanText = text
    .replace(/<[^>]*>/g, '')
    .replace(/&[^;]+;/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
  
  return cleanText.length > maxLength 
    ? cleanText.substring(0, maxLength) + '...'
    : cleanText;
};

// Format date function
const formatDate = (dateString: string) => {
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
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-primary/10 border border-primary/20 rounded-full">
            <span className="text-sm font-medium text-primary">Latest Posts</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            From My <span className="gradient-text">Medium</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Insights, tutorials, and thoughts on cybersecurity and technology.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {loading && (
            <div className="flex items-center justify-center py-20">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
            </div>
          )}

          {error && (
            <div className="text-center text-destructive">
              <p>Error: {error}</p>
            </div>
          )}

          {!loading && !error && posts.length > 0 && (
            <div className="relative">
              {/* Horizontal scroll container */}
              <div className="flex overflow-x-auto scrollbar-thin pb-4 gap-6 snap-x snap-mandatory">
                {posts.map((post) => (
                  <a
                    key={post.guid}
                    href={post.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block flex-shrink-0 snap-start"
                    style={{ width: '320px' }}
                  >
                    <Card className="flex h-full flex-col overflow-hidden transition-all group-hover:shadow-xl group-hover:-translate-y-1 w-full">
                      <div className="aspect-video overflow-hidden">
                        <img
                          src={post.posterImage}
                          alt={post.title}
                          className="h-full w-full object-cover transition-transform group-hover:scale-105"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.src = 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=500&q=80';
                          }}
                        />
                      </div>
                      <div className="flex flex-grow flex-col p-4">
                        <p className="text-xs text-muted-foreground">
                          {formatDate(post.pubDate)}
                        </p>
                        <CardTitle className="mt-2 text-base font-bold leading-snug group-hover:text-primary transition-colors line-clamp-2">
                          {post.title}
                        </CardTitle>
                        <p className="mt-2 flex-grow text-sm text-card-foreground/80 line-clamp-3">
                          {cleanAndTruncate(post.description, 150)}
                        </p>
                        <CardFooter className="mt-3 flex flex-wrap gap-2 p-0">
                          {post.categories.slice(0, 2).map((tag) => (
                            <Badge key={tag} variant="outline" className="text-xs">{tag}</Badge>
                          ))}
                        </CardFooter>
                      </div>
                    </Card>
                  </a>
                ))}
                
                {/* Show loading indicator if there are more posts available */}
                {posts.length > 0 && (
                  <div className="flex-shrink-0 flex items-center justify-center w-32">
                    <div className="text-center text-muted-foreground">
                      <p className="text-sm">Scroll for more →</p>
                    </div>
                  </div>
                )}
              </div>
              
              {/* Scroll indicators */}
              <div className="flex justify-center mt-4 space-x-2">
                {posts.length > 3 && (
                  <div className="text-xs text-muted-foreground">
                    {posts.length} articles • Scroll horizontally to view all
                  </div>
                )}
              </div>
            </div>
          )}

          {!loading && !error && posts.length === 0 && (
            <div className="text-center text-muted-foreground py-20">
              <p>No Medium posts found.</p>
            </div>
          )}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-4">Want to read more of my articles?</p>
          <a
            href={`https://medium.com/${mediumUsername}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg font-medium transition-colors"
          >
            Visit My Medium
            <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Medium;