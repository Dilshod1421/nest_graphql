import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { User } from './entities/user.entity';

@Resolver('users')
export class UsersResolver {
  constructor(private readonly usersService: UsersService) { }

  @Mutation(() => User)
  async create(@Args('createUser') createUserDto: CreateUserDto): Promise<User> {
    return this.usersService.create(createUserDto);
  }

  @Query(() => [User])
  async findAll() {
    return this.usersService.findAll();
  }

  @Query(() => User)
  async findOne(@Args('id') id: number): Promise<User> {
    return this.usersService.findOne(id);
  }

  @Mutation(() => User)
  async update(@Args('id') id: number, @Args('updateUser') updateUserDto: UpdateUserDto): Promise<User> {
    return this.usersService.update(id, updateUserDto);
  }

  @Mutation(() => User)
  async remove(@Args('id') id: number) {
    return this.usersService.remove(id);
  }

}
