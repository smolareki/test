module.exports = {

    async compress(request, response){
        const { compress } = require('compress-images/promise');
        const INPUT_path_to_your_images = 'input_img/**/*.{jpg,JPG,jpeg,JPEG,png}';
        const STAGING_path = './staging_img/';
        //const OUTPUT_path = './output_img/';

        const processImages = async () => {
            const result = await compress({
                source: INPUT_path_to_your_images,
                destination: STAGING_path,
                //destination: STAGING_path,
                enginesSetup: {
                   png: { engine: 'pngout', command: ['-f5', '-kp', '-s0']},
                   jpg: { engine: 'pngout', command: ['-f5', '-kp', '-s2']},
                   gif: { engine: 'pngout', command: ['-f5', '-kp', '-s2']},

                }
            });

            const { statistics, errors } = result;
            // statistics - all processed images list
            // errors - all errros happened list
        };

        processImages();
    },

    async reduce(request, response){
        const { compress } = require('compress-images/promise');
        const INPUT_path_to_your_images = 'staging_img/**/*.{jpg,JPG,jpeg,JPEG,png}';
        const OUTPUT_path = './output_img/';

        const processImages = async () => {
            const result = await compress({
                source: INPUT_path_to_your_images,
                destination: OUTPUT_path,
                //destination: STAGING_path,
                enginesSetup: {
                   png: { engine: 'pngquant', command: ['--quality=89','-']},
                   jpg: { engine: 'pngquant', command: ['-','--quality=83-100']},
                   gif: { engine: 'pngquant', command: ['-','--quality=83-100']},

                }
            });

            const { statistics, errors } = result;
            // statistics - all processed images list
            // errors - all errros happened list
        };

        processImages();
    }


}