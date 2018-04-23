export interface Page {
  id: number,
  title: string,
  content: string
}

interface PageDatabase {
  [id: number]: Page
}
const pagesById: PageDatabase = {
  1: {
      id: 1,
      title: 'Homepage',
      content: `<h1>Homepage</h1>`
          + `This is the homepage, and everything starts with a <strong>home</strong>page.`
  },
  2: {
      id: 2,
      title: 'Seller Page',
      content: `<h1>Seller's Page</h1>`
          +`Here is the page for seller where they can submit products they want to sell`
  },
  3: {
      id: 3,
      title: 'Buyer Page',
      content: `<h1>Buyer's Page</h1>`
          +`This is the list of products`
  }
}

export default pagesById
