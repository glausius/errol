import { Pipe, PipeTransform } from '@angular/core';
import moment from 'moment';
/**
 * Generated class for the DatePipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'datePipe',
})
export class DatePipe implements PipeTransform {

 transform(date, format) {
    return moment(date).format('DD/MM/YY');
  }
}