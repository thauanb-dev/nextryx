import pg from 'pg'
import * as dotenv from 'dotenv'

dotenv.config()

async function testDBConnection() { 
const url = process.env.DATABASE_URL
const { Client } = pg
return url

}

testDBConnection()