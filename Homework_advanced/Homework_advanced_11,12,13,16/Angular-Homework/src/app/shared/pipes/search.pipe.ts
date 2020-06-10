import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  // transform(usersPhone: Array<any> , name: string ): unknown {
  //   if(!name) return usersPhone
  //   if(!usersPhone) return []
  //   else return usersPhone.filter( user  => user.firstName.includes(name) | user.lastName.includes(name) | user.number.includes(name) )
  // };
  transform(usersPhone: Array<any>, name: any ): unknown {
    if(!name) return usersPhone;
    if(!usersPhone) return [];

    const filtFirstName  = usersPhone.filter(user => user.firstName.toLowerCase().includes(name));
    const filtLastName = usersPhone.filter(user => user.lastName.toLowerCase().includes(name));
    const filtNumber= usersPhone.filter(user => user.numberPhone.includes(name));
    const filterArr = [filtFirstName, filtLastName, filtNumber];
    const filterUser = filterArr.filter(a => a.length > 0);
    const filtered: Array<object> = filterUser.concat.apply([], filterUser);
    return filtered.filter((val, ind) => filtered.indexOf(val) === ind);
  }
}
