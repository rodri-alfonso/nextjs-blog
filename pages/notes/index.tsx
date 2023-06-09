import Page from '@layouts/Page'
import Banner from '@components/Banner'
import NoteSelector from '@components/NoteSelector'
import NoteContent from '@components/NoteContent'

const MOCK = [
	{
		title: 'Note title mock',
		description: 'This is a great description of whats supouse to be this note',
		topic: 'css',
	},
	{
		title: 'Note title mock',
		description: 'This is a great description of whats supouse to be this note',
		topic: 'javascript',
	},
	{
		title: 'Note title mock',
		description: 'This is a great description of whats supouse to be this note',
		topic: 'news',
	},
	{
		title: 'Note title mock',
		description: 'This is a great description of whats supouse to be this note',
		topic: 'webdev',
	},
]

export default function Notes() {
	return (
		<Page description='' title="Rodrigo's Blog | Notes">
			<Banner title='What I&#39;ve read' description={`A few notes about CSS, web performance, and news`} />
			<div className='py-6'>{/* <NoteSelector /> */}</div>
			<div className='pt-4 grid gap-20'>
				{MOCK.map((note) => (
					<NoteContent description={note.description} title={note.title} topic={note.topic} key={note.title} />
				))}
			</div>
		</Page>
	)
}
