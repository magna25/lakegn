import { notFound } from 'next/navigation'
import { blogPosts } from '@/data/blog'
import BlogHeader from '@/components/BlogHeader'
import Contact from '@/components/Contact'

interface BlogPostPageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const resolvedParams = await params
  const post = blogPosts.find((post) => post.slug === resolvedParams.slug)
  
  if (!post) {
    return {
      title: 'Blog Post Not Found',
    }
  }

  return {
    title: post.seo.metaTitle,
    description: post.seo.metaDescription,
    keywords: post.seo.keywords.join(', '),
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.publishedAt,
      authors: [post.author],
    },
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const resolvedParams = await params
  const post = blogPosts.find((post) => post.slug === resolvedParams.slug)

  if (!post) {
    notFound()
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'study-abroad':
        return 'bg-emerald-100 text-emerald-800'
      case 'work-visas':
        return 'bg-blue-100 text-blue-800'
      case 'tourism':
        return 'bg-purple-100 text-purple-800'
      case 'visa-process':
        return 'bg-orange-100 text-orange-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <>
      <BlogHeader />
      <main className="min-h-screen bg-white">
        {/* Blog Post Header */}
        <div className="bg-gradient-to-b from-gray-50 to-white py-20 mt-0">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold mb-4 ${getCategoryColor(post.category)}`}>
                {post.category.replace('-', ' ').toUpperCase()}
              </span>
              <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 tracking-wide leading-tight" style={{ fontFamily: 'Impact, "Franklin Gothic Bold", "Helvetica Inserat", "Bitstream Vera Sans Bold", "Arial Black", sans-serif' }}>
                {post.title}
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                {post.excerpt}
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-6 text-gray-500">
                <div className="flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                  </svg>
                  <span>{formatDate(post.publishedAt)}</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                  <span>{post.readingTime}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Blog Post Content */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="prose prose-lg max-w-none">
            <div 
              className="blog-content text-gray-800 leading-relaxed"
              dangerouslySetInnerHTML={{ 
                __html: post.content
                  .replace(/\n/g, '<br>')
                  .replace(/# (.*?)<br>/g, '<h1 class="text-3xl md:text-4xl font-black text-gray-900 mb-6 mt-12 tracking-wide" style="font-family: Impact, \'Franklin Gothic Bold\', \'Helvetica Inserat\', \'Bitstream Vera Sans Bold\', \'Arial Black\', sans-serif;">$1</h1>')
                  .replace(/## (.*?)<br>/g, '<h2 class="text-2xl md:text-3xl font-bold text-gray-900 mb-4 mt-10">$1</h2>')
                  .replace(/### (.*?)<br>/g, '<h3 class="text-xl md:text-2xl font-bold text-gray-900 mb-3 mt-8">$1</h3>')
                  .replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold text-gray-900">$1</strong>')
                  .replace(/- (.*?)<br>/g, '<li class="mb-2">$1</li>')
                  .replace(/(<li.*?<\/li>)/g, '<ul class="list-disc list-inside mb-6 space-y-2">$1</ul>')
                  .replace(/<br><br>/g, '</p><p class="mb-6">')
                  .replace(/^/, '<p class="mb-6">')
                  .replace(/$/, '</p>')
              }}
            />
          </div>

          {/* Tags */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag, index) => (
                <span 
                  key={index}
                  className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Related Articles */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Related Posts</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {blogPosts
                .filter(p => p.id !== post.id && (p.category === post.category || p.tags.some(tag => post.tags.includes(tag))))
                .slice(0, 2)
                .map((relatedPost) => (
                  <a 
                    key={relatedPost.id}
                    href={`/blog/${relatedPost.slug}`}
                    className="block p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                  >
                    <span className={`inline-block px-2 py-1 rounded text-xs font-semibold mb-3 ${getCategoryColor(relatedPost.category)}`}>
                      {relatedPost.category.replace('-', ' ').toUpperCase()}
                    </span>
                    <h4 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
                      {relatedPost.title}
                    </h4>
                    <p className="text-gray-600 text-sm line-clamp-3">
                      {relatedPost.excerpt}
                    </p>
                    <div className="flex items-center mt-4 text-xs text-gray-500">
                      <span>{formatDate(relatedPost.publishedAt)}</span>
                      <span className="mx-2">•</span>
                      <span>{relatedPost.readingTime}</span>
                    </div>
                  </a>
                ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-12 p-8 bg-gradient-to-r from-emerald-50 to-blue-50 rounded-2xl text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Start Your Journey?</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Our expert consultants are here to guide you through every step of your application process. Contact us today for personalized assistance.
            </p>
            <a 
              href="/#apply" 
              className="inline-flex items-center px-8 py-3 bg-emerald-600 text-white font-semibold rounded-lg hover:bg-emerald-700 transition-colors duration-200"
            >
              Get Started Today
              <svg className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </main>
      <Contact />
    </>
  )
}