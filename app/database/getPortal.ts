import fastify from "../server";

export async function fetchDomainName(schemaId:number,localTenantId: number,integrationID:number) {
  try{
    const POOL = await fastify.pg.pool
    const CLIENT = await POOL.connect()
    try {
      await CLIENT.query('BEGIN');
      await CLIENT.query(`SET SEARCH_PATH To "schema_${schemaId}"`);
      await CLIENT.query(`SET ROLE To "t${localTenantId}"`);
      const QUERY = `SELECT "name" FROM "Domain" INNER JOIN "DomainRealm" ON "Domain"."id"="DomainRealm"."domainID" WHERE "DomainRealm"."integrationID"=$1;`
      const RES = await CLIENT.query(QUERY,[integrationID])
      await CLIENT.query('RESET ROLE');
      await CLIENT.query('RESET SEARCH_PATH;');
      await CLIENT.query('COMMIT');
      return RES.rowCount ? RES.rows : []
    } catch (e) {
      await CLIENT.query('ROLLBACK');
      console.log(e);
      throw new Error("something went wrong in fetchDomainName");
    } finally {
      CLIENT.release();
    }
  }catch(err){
    console.log(err);
    throw new Error("something went wrong in fetchDomainName");
  }
}