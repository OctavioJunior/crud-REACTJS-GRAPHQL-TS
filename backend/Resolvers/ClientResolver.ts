import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { CreateClientInput } from "../database/InputDB/ClientInput";
import { ClientMongo } from "../database/SchemaDB/Client";
import { Client } from "./../Models/Client";

Resolver();
export class ClientResolver {
  @Query(() => [Client])
  async clients() {
    return await ClientMongo.find();
  }

  @Mutation(() => Client)
  async createClient(
    @Arg("createClientObject") createClientObject: CreateClientInput
  ) {
    const { name, email, cpf, adress, tel } = createClientObject;

    return await ClientMongo.create({
      name,
      email,
      cpf,
      adress,
      tel,
    });
  }
}
