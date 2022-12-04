import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity("comer_parametrosmod", { schema: "sera" })
export class ComerParametrosmodEntity {
  @PrimaryColumn("character varying", { name: "parametro", length: 20 })
  parameterId: string;

  @PrimaryColumn("character varying", { name: "valor", length: 500 })
  worthId: string;

  @Column("character varying", { name: "descripcion", nullable: true, length: 200, })
  description: string;

  @PrimaryColumn("character varying", { name: "direccion", length: 1 })
  directionId: string;

  @Column("numeric", { name: "id_tpevento", nullable: true, precision: 3, scale: 0, })
  idTpevent: string;
}