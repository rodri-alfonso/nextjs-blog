import { Inter } from 'next/font/google'
import Page from '@layouts/Page'
import { getPartialContent } from '../utils/content'
import TopArticles from '@components/TopArticles'
import Banner from '@components/Banner'

const inter = Inter({ subsets: ['latin'] })

export default function Home({ posts }: any) {
	return (
		<Page title='' description='' footer>
			<Banner title='Welcome' description='this is a description' />

			<div className='pt-20'>
				<TopArticles articles={posts} />
			</div>
		</Page>
	)
}

export const getStaticProps = () => {
	const posts = getPartialContent({ type: 'articles' })

	return {
		props: {
			posts,
		},
	}
}
