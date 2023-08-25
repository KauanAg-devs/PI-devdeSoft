import express from 'express'
import run from './models/db/db.conn'

run()
 .then(()=>{
    console.log(`database loading...`)
})