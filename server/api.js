const Entry = require('./models/entry');
const sharp = require('sharp');
const request = require('request').defaults({encoding: null});
const cloudinary = require('cloudinary');
const Vibrant = require('node-vibrant');

cloudinary.config({
    cloud_name: 'vverh',
    api_key: '482121622684964',
    api_secret: 'IZQlGEJqlPg9KXr0yxw9Rcap0dU',
});
cloudinary.v2.config({
    cloud_name: 'vverh',
    api_key: '482121622684964',
    api_secret: 'IZQlGEJqlPg9KXr0yxw9Rcap0dU',
});

const TextToSVG = require('text-to-svg');

class MainApi {
    async getMain() {
        return Entry.find().exec()
    }

    async getEntry(hash) {
        return Entry.findOne({hash}).exec()
    }

    async saveModel(hash, pic, name, role) {
        let model = new Entry({
            hash,
            pic,
            name,
            role
        });
        return model.save();
    }


    //server/fonts/OpenSans-Light.ttf
    static async getSvg(color, text, size) {
        const textToSVG = TextToSVG.loadSync('server/fonts/OpenSans-Regular.ttf');
        let attributes = {fill: 'black'};
        let options = {x: 0, y: 0, fontSize: size, anchor: 'top', attributes: attributes};
        options.attributes.fill = color;
        let svg = textToSVG.getSVG(text, options);

        return await sharp(Buffer.from(svg, 'utf8')).toBuffer()
    }


    getPic(name, role) {
        const options = {};

        const base = sharp('src/assets/template.png')
            .png()
            .toBuffer();

        const composite = [
            {image: MainApi.getSvg('#ffffff', `я — ${name}`, 140), options: {top: 155, left: 159}},
            {image: MainApi.getSvg('#ffffff',  `я ${role}`, 88), options: {top: 384, left: 112}},
        ]
            .reduce((input, overlay) => {
                return input.then((data) => {
                    return overlay.image.then((overlayBuff) => {
                        return sharp(data, options).overlayWith(overlayBuff, overlay.options).toBuffer();
                    });
                });
            }, base);

        return composite.then((data) => {
            console.log('compose done');
            return data
        });
    }


    async convertPic(params) {
        return new Promise(resolve => {
            let image = this.getPic(params.name, params.role);

            image.then((buff) => {
                // sharp(buff).png().toFile('output.png', function (err, info) {
                //     console.log(err);
                //     console.log(info);
                // });
                cloudinary.v2.uploader.upload_stream({resource_type: 'image'},
                    (error, result) => {
                        console.log('upload');
                        console.log(result);
                        console.log(error);

                        this.saveModel(
                            result.public_id,
                            result,
                            params.name,
                            params.role,
                        );
                        resolve({result});
                    })
                    .end(buff);
            });
        })
    }
}
module.exports = {
    MainApi
}
