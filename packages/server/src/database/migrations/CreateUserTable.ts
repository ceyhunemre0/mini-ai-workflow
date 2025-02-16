import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateUserTable1616500000000 implements MigrationInterface {
    name = 'CreateUserTable1616500000000';

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE IF NOT EXISTS "user" (
                "id" SERIAL NOT NULL, 
                "email" character varying NOT NULL, 
                "password" character varying NOT NULL, 
                CONSTRAINT "PK_user_id" PRIMARY KEY ("id"), 
                CONSTRAINT "UQ_user_email" UNIQUE ("email")
            );
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE IF EXISTS "user"`);
    }
}
