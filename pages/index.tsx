import { Playfair_Display } from 'next/font/google'
import Page from '@layouts/Page'
import { getPartialContent } from '../utils/content'
import TopArticles from '@components/TopArticles'
import Banner from '@components/Banner'

const inter = Playfair_Display({ subsets: ['latin'], weight: ['400', '500', '600'] })

export default function Home({ artices }: any) {
	return (
		<Page title='' description='' footer>
			<Banner
				title='Welcome to my dashboard!'
				description='I write about UI architecture, design systems, typographies, CSS, and web performance.'
			/>

			<div className='grid gap-20'>
				<TopArticles articles={artices} />
			</div>
		</Page>
	)
}

export const getStaticProps = () => {
	const artices = getPartialContent({ type: 'articles' })

	return {
		props: {
			artices,
		},
	}
}
