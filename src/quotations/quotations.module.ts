import { Module } from '@nestjs/common';
import { QuotationsService } from './quotations.service';
import { QuotationsController } from './quotations.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Quotation, QuotationSchema } from 'src/quotations/quotation.schema';

@Module({
  imports: [MongooseModule.forFeature([{
    name: Quotation.name,
    schema: QuotationSchema
  }])],
  providers: [QuotationsService],
  controllers: [QuotationsController]
})
export class QuotationsModule {}
