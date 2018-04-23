// src/pages/controller.ts
import { JsonController, Get, Param } from 'routing-controllers'
//import pagesById, { Page } from './data'
import Page from './entity'

@JsonController()
export default class PageController {

  @Get('/pages/:id')
  getPage(
    @Param('id') id: number
) {
  return Page.findOne(id)
}

@Get('/pages')
async allPages() {
  const pages = await Page.find()
  return { pages }
}

}
