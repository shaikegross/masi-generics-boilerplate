import { ExternalMasiEntity } from "../../types/masi/entities/external-masi-entity";
import { ExternalMasiEntityResponses } from "../../types/masi/responses/external-masi-entity-responses";

export abstract class MasiApiEntityController<
  Entity extends ExternalMasiEntity = ExternalMasiEntity,
  EntityResponse extends ExternalMasiEntityResponses<Entity> = ExternalMasiEntityResponses<Entity>> {
  abstract create(invoice: Entity): EntityResponse["createResponse"];
  abstract read(): EntityResponse["readResponse"];
  abstract update(invoice: Entity): EntityResponse["updateResponse"];
  abstract delete(invoice: Entity): EntityResponse["deleteResponse"];
}