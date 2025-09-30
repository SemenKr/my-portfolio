import styled from 'styled-components';
import { SectionBlock } from "../../components/section/SectionBlock.tsx";
import { AdaptiveImage } from '../../shared/ui/AdaptiveImage.tsx';
import blogImage1 from '../../shared/assets/images/blogs/blog1/Image.png';
import blogImage2 from '../../shared/assets/images/blogs/blog2/Image.png';
import blogImage3 from '../../shared/assets/images/blogs/blog3/Image.png';
interface BlogPost {
	id: number;
	title: string;
	excerpt: string;
	image: string;
	readTime: string;
	date: string;
	category: string;
	slug: string;
}

// Моковые данные статей
const mockBlogPosts: BlogPost[] = [
	{
		id: 1,
		title: "Лучшие практики React в 2024",
		excerpt: "Рассматриваем современные подходы к разработке на React, включая хуки, серверные компоненты и оптимизацию производительности.",
		image: blogImage1,
		readTime: "5 мин",
		date: "15 марта 2024",
		category: "React",
		slug: "react-best-practices-2024"
	},
	{
		id: 2,
		title: "TypeScript для больших проектов",
		excerpt: "Как правильно настроить TypeScript в enterprise-проектах и избежать распространенных ошибок.",
		image: blogImage2,
		readTime: "7 мин",
		date: "10 марта 2024",
		category: "TypeScript",
		slug: "typescript-for-enterprise"
	},
	{
		id: 3,
		title: "Оптимизация веб-приложений",
		excerpt: "Практические советы по ускорению загрузки и улучшению пользовательского опыта.",
		image: blogImage3,
		readTime: "6 мин",
		date: "5 марта 2024",
		category: "Performance",
		slug: "web-performance-optimization"
	}
];


export const Blog = () => {
	return (
		<SectionBlock title={ "Blog" } description={ "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum" } >
			<BlogGrid>
				{ mockBlogPosts.map((post) => (
					<BlogCard key={ post.id } href={ `/blog/${post.slug}` }>
						<ArticleImage>
							<AdaptiveImage
								src={ post.image }
								alt={ post.title }
								width="100%"
								aspectRatio="310/300"
								objectFit="contain"
								fallbackFormat="png"
							/>
						</ArticleImage>

						<ArticleContent>
							<ArticleMeta>
								<CategoryTag>{ post.category }</CategoryTag>
								<ReadTime>{ post.readTime } чтения</ReadTime>
							</ArticleMeta>

							<ArticleTitle>{ post.title }</ArticleTitle>
							<ArticleExcerpt>{ post.excerpt }</ArticleExcerpt>

							<ArticleFooter>
								<PublishDate>{ post.date }</PublishDate>
								<ReadMore href='#'>Learn more &gt;</ReadMore>
							</ArticleFooter>
						</ArticleContent>
					</BlogCard>
				)) }
			</BlogGrid>
		</SectionBlock>
	)
}
const BlogGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, auto);
  gap: 0.5rem;
  margin-top: 2rem;

  @media (max-width: 1200px) {
    grid-template-columns: 1fr;
  }
`;

const BlogCard = styled.a`
  display: block;
  background: ${({ theme }) => theme.colors.bgMain};
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadows.sm};
  transition: all 0.3s ease;
  text-decoration: none;
  color: inherit;
  border: 1px solid ${({ theme }) => theme.colors.border};

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => theme.shadows.md};
  }
`;

const ArticleImage = styled.div`
  position: relative;
  overflow: hidden;
`;

const ArticleContent = styled.div`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const ArticleMeta = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
`;

const CategoryTag = styled.span`
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.text.inverted};
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const ReadTime = styled.span`
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: 0.875rem;
  opacity: 0.7;
`;

const ArticleTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  line-height: 1.4;
  color: ${({ theme }) => theme.colors.text.title};
  margin: 0;
`;

const ArticleExcerpt = styled.p`
  color: ${({ theme }) => theme.colors.text.primary};
  line-height: 1.6;
  margin: 0;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const ArticleFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
  padding-top: 1rem;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
`;

const PublishDate = styled.span`
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: 0.875rem;
  opacity: 0.7;
`;

const ReadMore = styled.a`
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 500;
  font-size: 0.875rem;
  transition: transform 0.2s ease;

  ${BlogCard}:hover & {
    transform: translateX(4px);
  }
`;