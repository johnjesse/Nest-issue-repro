import { Injectable } from '@nestjs/common';
import { interval, map } from 'rxjs';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getEvents() {
    return interval(1000).pipe(map(() => ({ data: { hello: 'world' } })));
  }
}
