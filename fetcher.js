const request = require('request');
const fs = require('fs'); //filesystem

const url = process.argv[2];
const filePath = process.argv[3];

// fs.write() 是 Node.js 中文件系统模块（fs）中的一个方法，用于向指定文件写入数据。具体来说，它可以用来：

// 写入一个指定的字符串 ./index.html、Buffer、TypedArray 或 DataView 到文件
// 写入指定文件的部分内容
// 写入文件的一个缓冲区的部分内容
// 等等

request(url, (error, response, body)=>{
  if (error) {
    console.log(`Error:  ${error}`);
  } else if (response.statusCode !== 200) {    //response.statCode, such as 404, 403 etc
    console.log(`Error: ${response.statusCode} ${response.statusMessage}`);
  } else {
    fs.writeFile(filePath, body, (error)=>{
      if (error) {
        console.log(`Error: ${error}`);
      } else {
        console.log(`Downloaded and saved ${body.length} bytes to ${filePath}`);
      }
    });
  }
});
