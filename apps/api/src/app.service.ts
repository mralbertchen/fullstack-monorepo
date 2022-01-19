import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  submitSurvey(results: any) {
    console.log(results);
  }
}
