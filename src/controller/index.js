import fs from 'fs';
const path = 'src/asset';

const readWriteFile = async (req, res) => {
    try {
        let dateTime = new Date().toLocaleTimeString();
        let formattedDateTime = dateTime.replace(/:/g, '_'); // Replace colon with underscore
        fs.writeFileSync(`${path}/${formattedDateTime}.txt`, dateTime, 'utf-8');

        let content = fs.readFileSync(`${path}/${formattedDateTime}.txt`, 'utf-8');

        res.status(200).send({
            message: "success",
            content
        });

    } catch (error) {
        res.status(500).send({ error });
    }
}

export default {
    readWriteFile
}
