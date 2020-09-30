import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CatsInterface } from './interface/cats.interface';
import { CreateCatDto } from './dto/create-cat.dto';
import { exception } from 'console';

@Injectable()
export class CatsService {
    constructor(
        @InjectModel('Cat') private readonly catModel: Model<CatsInterface>
    ) { }
    async createCat(createCatDto: CreateCatDto): Promise<CatsInterface> {
        const finCat = await this.catModel.findOne({ title: createCatDto.title });
        if (!finCat) throw new exception('title duplicate.');
        const cat = new this.catModel(createCatDto);
        await cat.save();
        return this.buildCatInfo(cat);
    }
    async findByID(id: string): Promise<CatsInterface> {
        const cat = await this.catModel.findById(id);
        if (!cat) {
            throw new NotFoundException('Email not found.');
        }
        return this.buildCatInfo(cat);

    }
    async findAll(): Promise<CatsInterface[]> {
        const cats = await this.catModel.find();
        if (!cats) {
            throw new NotFoundException('Email not found.');
        }
        return this.buildCatsInfos(cats);

    }
    async delete(id: string) {
        const cat = await this.catModel.remove({ _id: id });
        if (!cat) {
            throw new NotFoundException('Cat not found.');
        }
        return id;

    }
    private buildCatInfo(cat): any {
        const catInfo = {
            id: cat._id,
            title: cat.title,
            avatar: `https://www.peppercarrot.com/extras/html/2016_cat-generator/avatar.php?seed=${cat.avatar}`,
            sounds: cat.sounds,
        }

        return catInfo;
    }
    private buildCatsInfos(cats): any {
        const catsInfo = []
        cats.forEach(cat => catsInfo.push(this.buildCatInfo(cat)));
        return catsInfo;
    }
}

