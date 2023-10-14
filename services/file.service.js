const uuid = require('uuid')
const path = require('path')
const fs = require('fs')

class FileService {

    saveFile(file, way) {
        const fileName = uuid.v4() + '.png'
        const filePath = path.resolve(__dirname, '..', `static/${way}`)
        if (!fs.existsSync(fileName)) {
            fs.mkdirSync(filePath, { recursive: true })
        }
        file.mv(path.join(filePath, fileName))
        return fileName
    }

    removeFile(nameFile) {
        const filePath = path.resolve(__dirname, '..', `static/user-image/${nameFile}`)
        console.log(filePath)
        fs.rm(filePath, err => {
            if (err) throw err
            console.log('Файл успешно удалён')
        })
    }
}

module.exports = new FileService()