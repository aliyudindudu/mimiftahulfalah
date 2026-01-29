import Image from 'next/image';
import Link from 'next/link';

// Interface untuk News Card
interface NewsCardData {
    id: string;
    title: string;
    excerpt: string;
    featuredImage: string;
    category: {
        name: string;
        color: string;
    };
    publishedAt: string;
    slug: string;
}

interface NewsCardProps {
    data: NewsCardData;
}

// Format tanggal ke bahasa Indonesia
function formatDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleDateString('id-ID', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });
}

export default function NewsCard({ data }: NewsCardProps) {
    return (
        <article className="news-card">
            <Link href={`/berita/${data.slug}`} className="news-card-image-link">
                <div className="news-card-image-wrapper">
                    <Image
                        src={data.featuredImage}
                        alt={data.title}
                        width={400}
                        height={250}
                        className="news-card-image"
                    />
                </div>
            </Link>

            <div className="news-card-content">
                <div className="news-card-meta">
                    <time className="news-card-date">{formatDate(data.publishedAt)}</time>
                    <span
                        className="news-card-category"
                        style={{ backgroundColor: data.category.color + '20', color: data.category.color }}
                    >
                        {data.category.name}
                    </span>
                </div>

                <Link href={`/berita/${data.slug}`}>
                    <h3 className="news-card-title">{data.title}</h3>
                </Link>

                <p className="news-card-excerpt">{data.excerpt}</p>
            </div>
        </article>
    );
}
