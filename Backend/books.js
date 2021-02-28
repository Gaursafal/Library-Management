const books = [
	{
		image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYe5-W7mmzLjUBb5ybS7ES7dH-aSXEmjdPUQ&usqp=CAU",
		name: 'Beyond Krom',
		author: 'Krom',
		year: 1993,
		category: 'Ethics',
		chapters: [
			{
				name: 'Introduction',
				page: '20'
			},
			{
				name: 'Education',
				page: '35'
			},
			{
				name: 'Biography',
				page: '54'
			},
			{
				name: 'Conclusion',
				page: '43'
			}
		]
	},

	{
		image:"data:image/jpeg;base64,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",
		name: 'Harry Potter',
		author: 'Potter',
		year: 2008,
		category: 'Horror',
		chapters: [
			{
				name: 'Introduction',
				page: '40'
			},
			{
				name: 'Education',
				page: '15'
			},
			{
				name: 'Biography',
				page: '94'
			},
			{
				name: 'Conclusion',
				page: '23'
			}
		]
	},

	{
		image: 'https://www.astro-photo.nl/wp_astro/wp-content/uploads/2015/11/final-cover-3d.jpg',
		name: 'Treaure Universe',
		author: 'Tuyter',
		year: 2003,
		category: 'Comedy',
		chapters: [
			{
				name: 'Introduction',
				page: '30'
			},
			{
				name: 'Education',
				page: '35'
			},
			{
				name: 'Biography',
				page: '94'
			},
			{
				name: 'Conclusion',
				page: '23'
			}
		]
	},

	{
		image:'https://i1.wp.com/www.allencheng.com/wp-content/uploads/2020/09/35-the-autobiography-of-benjamin-franklin.jpg?fit=200%2C300&ssl=1',
		name: 'Black Panther',
		author: 'Bagworth',
		year: 2000,
		category: 'Horror',
		chapters: [
			{
				name: 'Introduction',
				page: '30'
			},
			{
				name: 'Education',
				page: '35'
			},
			{
				name: 'Biography',
				page: '94'
			},
			{
				name: 'Conclusion',
				page: '23'
			}
		]
	},
	{
		image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZn1TxN_reRaKWRslZDIpvK8BCjyxNRG2diA&usqp=CAU",
		name: 'Dune Dune',
		author: 'Dechedune',
		year: 1993,
		category: 'Ethics',
		chapters: [
			{
				name: 'Introduction',
				page: '30'
			},
			{
				name: 'Education',
				page: '35'
			},
			{
				name: 'Biography',
				page: '94'
			},
			{
				name: 'Conclusion',
				page: '23'
			}
		]
	},

	{
		image:
			'https://www.thehindu.com/books/books-authors/lhqv5m/article30901294.ece/alternates/FREE_435/Unlocking-the-universe',
		name: 'Stephen Beaver',
		author: 'Beaver',
		year: 2005,
		category: 'Comedy',
		chapters: [
			{
				name: 'Introduction',
				page: '30'
			},
			{
				name: 'Education',
				page: '35'
			},
			{
				name: 'Biography',
				page: '94'
			},
			{
				name: 'Conclusion',
				page: '23'
			}
		]
	},

	{
		image:
			'https://static01.nyt.com/images/2016/05/04/arts/04BOOKALEXANDER-WEB/04BOOKALEXANDER-WEB-articleLarge-v2.jpg?quality=90&auto=webp',
		name: 'Jazz Physics',
		author: 'Alexander',
		year: 1986,
		category: 'Comedy',
		chapters: [
			{
				name: 'Introduction',
				page: '30'
			},
			{
				name: 'Education',
				page: '35'
			},
			{
				name: 'Biography',
				page: '94'
			},
			{
				name: 'Conclusion',
				page: '23'
			}
		]
	},

	{
		image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ97pFcvAFG220EJKoo5_niRpgkTooVLyDz-g&usqp=CAU',
		name: 'Lord Drniks',
		author: 'Lorddrink',
		year: 1930,
		category: 'Ethics',
		chapters: [
			{
				name: 'Introduction',
				page: '30'
			},
			{
				name: 'Education',
				page: '35'
			},
			{
				name: 'Biography',
				page: '94'
			},
			{
				name: 'Conclusion',
				page: '23'
			}
		]
	},
	{
		image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN-zzwb91iGNkAr7I4-ulp2SH-ulnDk3qu8w&usqp=CAU',
		name: 'Melua',
		author: 'Deche',
		year: 1999,
		category: 'Comedy',
		chapters: [
			{
				name: 'Introduction',
				page: '30'
			},
			{
				name: 'Education',
				page: '35'
			},
			{
				name: 'Biography',
				page: '94'
			},
			{
				name: 'Conclusion',
				page: '23'
			}
		]
	},

	{
		image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlkaqXV3ISFxtqY4Y26mkvG5fxRlS4D7i5ZQ&usqp=CAU',
		name: 'Foundation',
		author: 'Childres',
		year: 2000,
		category: 'Horror',
		chapters: [
			{
				name: 'Introduction',
				page: '30'
			},
			{
				name: 'Education',
				page: '35'
			},
			{
				name: 'Biography',
				page: '94'
			},
			{
				name: 'Conclusion',
				page: '23'
			}
		]
	},

	{
		image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ97c6ZY3UlatOxGWdjGXg8Yg11Au97aS1scA&usqp=CAU',
		name: 'Lemoni Skulet',
		author: 'Lemoni',
		year: 2000,
		category: 'Ethics',
		chapters: [
			{
				name: 'Introduction',
				page: '30'
			},
			{
				name: 'Education',
				page: '35'
			},
			{
				name: 'Biography',
				page: '94'
			},
			{
				name: 'Conclusion',
				page: '23'
			}
		]
	},

	{
		image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFvWGEsrFoq2-SKlb9hODo8OUVaH-2B_XxFQ&usqp=CAU',
		name: 'Boring Car Trivia',
		author: 'Trivia',
		year: 1993,
		category: 'Horror',
		chapters: [
			{
				name: 'Introduction',
				page: '30'
			},
			{
				name: 'Education',
				page: '35'
			},
			{
				name: 'Biography',
				page: '94'
			},
			{
				name: 'Conclusion',
				page: '23'
			}
		]
	},
	{
		image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpVN145QUgFZtgY5VYRT_55KXbT7RBpaza8g&usqp=CAU',
		name: 'Power Creativity',
		author: 'Collins',
		year: 1993,
		category: 'Ethics',
		chapters: [
			{
				name: 'Introduction',
				page: '30'
			},
			{
				name: 'Education',
				page: '35'
			},
			{
				name: 'Biography',
				page: '94'
			},
			{
				name: 'Conclusion',
				page: '23'
			}
		]
	},

	{
		image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQczQO4FHHKS88sP65C6d1BKp7_Cgsb1iz8GQ&usqp=CAU',
		name: 'Data Visualization',
		author: 'Datebte Aris',
		year: 1993,
		category: 'Comedy',
		chapters: [
			{
				name: 'Introduction',
				page: '30'
			},
			{
				name: 'Education',
				page: '35'
			},
			{
				name: 'Biography',
				page: '94'
			},
			{
				name: 'Conclusion',
				page: '23'
			}
		]
	},

	{
		image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT87lIDqaaUAtPsUQfg4oIWyT65ip85rkOlvg&usqp=CAU',
		name: 'Sky Beyond Image',
		author: 'Joe Brothers',
		year: 2015,
		category: 'Ethics',
		chapters: [
			{
				name: 'Introduction',
				page: '30'
			},
			{
				name: 'Education',
				page: '35'
			},
			{
				name: 'Biography',
				page: '94'
			},
			{
				name: 'Conclusion',
				page: '23'
			}
		]
	},
];

module.exports = books;
