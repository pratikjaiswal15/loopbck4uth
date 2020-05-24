import {DefaultCrudRepository} from '@loopback/repository';
import {UserCred, UserCredRelations} from '../models';
import {MygodDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class UserCredRepository extends DefaultCrudRepository<
  UserCred,
  typeof UserCred.prototype.id,
  UserCredRelations
> {
  constructor(
    @inject('datasources.mygod') dataSource: MygodDataSource,
  ) {
    super(UserCred, dataSource);
  }
}
