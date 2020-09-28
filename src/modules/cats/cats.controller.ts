import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common'
import { CatsInterface, CatTalkInterface } from './interface/cats.interface'
import { CatsService } from './cats.service'
import { CreateCatDto, ParamId } from './dto/create-cat.dto'

@Controller('cats')
export class CatsController {
  constructor(
    private readonly catService: CatsService,
  ) { }
  @Get()
  async findAllCats(): Promise<CatsInterface[]> {
    return await this.catService.findAll();
  }

  @Get(':id')
  async getCat(@Param() param: ParamId): Promise<CatsInterface> {
    return await this.catService.findByID(param.id);

  }
  @Get('talks')
  async getCatTalkMessages(): Promise<CatTalkInterface[]> {
    return []
  }

  @Post()
  async createCat(@Body() createCatDto: CreateCatDto): Promise<CatsInterface> {
    return await this.catService.createCat(createCatDto);
  }

  @Delete(':id')
  async removeCat(@Param() param: ParamId): Promise<string> {
    const id = await this.catService.delete(param.id);
    return `remove cat ${id} complete`;
  }

}