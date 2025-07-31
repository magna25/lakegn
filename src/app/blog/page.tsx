import { blogPosts } from '@/data/blog'
import BlogHeader from '@/components/BlogHeader'
import Contact from '@/components/Contact'

export const metadata = {
  title: 'Blog & Guides | Lakegn Consultancy Services',
  description: 'Expert guides and blog posts on study abroad, work visas, tourist applications, and visa appointment processes. Professional consultation insights from Lakegn.',
  keywords: 'study abroad guides, work visa blog, tourist visa information, visa consultation, immigration guides',
}

export default function BlogPage() {
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

  const categories = ['all', 'study-abroad', 'work-visas', 'tourism', 'visa-process']
  
  return (
    <>
      <BlogHeader />
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <div className="bg-gradient-to-b from-gray-50 to-white py-20 mt-0">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 tracking-wider" style={{ fontFamily: 'Impact, "Franklin Gothic Bold", "Helvetica Inserat", "Bitstream Vera Sans Bold", "Arial Black", sans-serif' }}>
                EXPERT GUIDES & BLOG
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                Professional insights and comprehensive guides for study abroad, work visas, tourism, and visa application processes
              </p>
            </div>
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-100">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${getCategoryColor(post.category)}`}>
                      {post.category.replace('-', ' ').toUpperCase()}
                    </span>
                    <span className="text-sm text-gray-500">{post.readingTime}</span>
                  </div>
                  
                  <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 leading-tight">
                    <a 
                      href={`/blog/${post.slug}`}
                      className="hover:text-emerald-600 transition-colors duration-200"
                    >
                      {post.title}
                    </a>
                  </h2>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <span>{formatDate(post.publishedAt)}</span>
                    <span>By {post.author}</span>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.slice(0, 3).map((tag, index) => (
                      <span 
                        key={index}
                        className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <a 
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-semibold transition-colors duration-200"
                  >
                    Read Post
                    <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="bg-gradient-to-r from-emerald-50 to-blue-50 py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Stay Updated</h2>
            <p className="text-lg text-gray-600 mb-8">
              Get the latest guides and updates on visa processes, study abroad opportunities, and immigration news.
            </p>
            <a 
              href="/#apply" 
              className="inline-flex items-center px-8 py-3 bg-emerald-600 text-white font-semibold rounded-lg hover:bg-emerald-700 transition-colors duration-200"
            >
              Contact Us for Updates
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