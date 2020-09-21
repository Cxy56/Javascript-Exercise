const http = require("http")
const path = require("path")
const fse = require("fs-extra")
const multiparty = require("multiparty")
const server = http.createServer()

const UPLOAD_DIR = path.resolve(__dirname, '..', 'target')

const resolvePost = req =>
new Promise(resolve => {
  let chunk = ""
    req.on("data", data => {
      chunk += data;
    })
    req.on("end", () => {
      resolve(JSON.parse(chunk));
    })
  })

 // 合并切片
const mergeFileChunk = async (filePath, filename) => {
  const chunkDir = `${UPLOAD_DIR}/${filename}`;
  const chunkPaths = await fse.readdir(chunkDir);
  await fse.writeFile(filePath, "");
  chunkPaths.forEach(chunkPath => {
    fse.appendFileSync(filePath, fse.readFileSync(`${chunkDir}/${chunkPath}`));
    fse.unlinkSync(`${chunkDir}/${chunkPath}`);
  })
  fse.rmdirSync(chunkDir); // 合并后删除保存切片的目录
}


server.on("request", async(req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*")
  res.setHeader("Access-Control-Allow-Header", "*")
  if(req.method === "OPTIONS") {
    req.status = 200
    res.end()
    return
  }
  if (req.url === "/merge") {
    const data = await resolvePost(req)
    const { filename } = data
    const filePath = `${UPLOAD_DIR}/${filename}`
    await mergeFileChunk(filePath, filename)
    res.end(
      JSON.stringify({
        code: 0,
      message: "file merged success"
      })
    )
  }
    
  const multipart = new multiparty.Form()
  multipart.parse(req, async(err, fields, files) => {
    if(err) return
    const [chunk] = files.chunk
    const [hash] = files.hash
    const [filename] = files.filename
    const chunkDir = `${UPLOAD_DIR}/${filename}`

    // 切片目录不存在，创建切片目录
    if(!fse.existsSync(chunkDir)) {
      await fse.mkdir(chunkDir)
    }

    await fse.rename(chunk.path, `${chunkDir}/${hash}`)
    res.end("received file chunk")
  })
})
server.listen(3000, () => console.log("正在监听3000端口"))