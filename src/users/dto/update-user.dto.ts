import { Field, InputType, ID } from "@nestjs/graphql";

@InputType()
export class UpdateUserDto {
    @Field(() => ID)
    id: number;

    @Field({ nullable: true })
    name?: string;

    @Field({ nullable: true })
    email?: string;
}
