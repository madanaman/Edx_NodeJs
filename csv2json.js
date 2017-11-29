// const csv=require('csvtojson')
const path = require('path')
const fs = require('fs')
let finalJson = '['

const csvpath = path.join(__dirname,'customer-data.csv.xls')
const outputPath = path.join(__dirname,'customer-data.json')
// let csvpath = '/Users/amanmadan/Documents/workspace/edx_nodejs/Module1Lab/csv2json/customer-data.csv.xls'
// let outputPath = '/Users/amanmadan/Documents/workspace/edx_nodejs/Module1Lab/csv2json/customer-data.json'

// console.log(csvpath, "\n", outputPath);


// csv().fromFile(csvpath).on('json',(jsonobj)=>{
// //console.log(jsonobj)
// //console.log(jsonobj)
// // fs.writeFileSync(outputPath, jsonobj)
// finalJson += jsonobj
// })

// console.log(finalJson)
// console.log('Converted file is:  ', outputPath)


const csv = require('csvtojson')
// const csvpath = '/Users/amanmadan/Documents/workspace/edx_nodejs/Module1Lab/csv2json/customer-data.csv.xls'
// const outputPath = '/Users/amanmadan/Documents/workspace/edx_nodejs/Module1Lab/csv2json/customer-data.json'
// csv().
// fromFile(csvpath).
// on('json',(jsonobj)=>{
// 	// console.log(jsonobj)
// 	//fs.writeFileSync(outputPath, JSON.stringify(jsonobj))
// 	finalJson += JSON.stringify(jsonobj) 

// }).on('end',()=>{fs.writeFileSync(outputPath,finalJson)})
/* This is working code*/
// csv().
// fromFile(csvpath).
// on('json',(jsonobj)=>{
// 	// console.log(jsonobj)
// 	//fs.writeFileSync(outputPath, JSON.stringify(jsonobj))
// 	finalJson = finalJson + JSON.stringify(jsonobj) + ","

// }).on('end',()=>{
// 	finalJson1 = finalJson.substr(0,finalJson.length-1) + "]"
// 	fs.writeFileSync(outputPath,finalJson1)

// })
/*Working code ends*/

csv().
fromFile(csvpath).
on('end_parsed',(jsonobj)=>{
	// console.log(jsonobj)
	//fs.writeFileSync(outputPath, JSON.stringify(jsonobj))
	fs.writeFileSync(outputPath,JSON.stringify(jsonobj,null,2))
	//finalJson = finalJson + JSON.stringify(jsonobj)

}).on('end',()=>{
	//finalJson1 = finalJson.substr(0,finalJson.length-1) + "]"
	console.log("Complete")

})
