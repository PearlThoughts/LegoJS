const { WorkspaceService } = require('../Services');

class WorkspaceController {
    constructor() {
        this.service = new WorkspaceService();
    }

    async getMessage(req, res) {
        const message = await this.service.getMessage();
        return res.status(200).send(message);
    }

    whoAmI(req, res) {
        const date = new Date();
        return res.status(200).send({
            blocks: [
                {
                    type: 'section',
                    text: {
                        type: 'mrkdwn',
                        text: 'Hello, i am *Edhuku Indha Bot:*. ',
                    },
                },
                {
                    type: 'divider',
                },
                {
                    type: 'section',
                    text: {
                        type: 'mrkdwn',
                        text: 'My Creator literally have no idea why he created me. Now he is using me to conduct 5Ws1H.',
                    },
                    accessory: {
                        type: 'image',
                        image_url:
                            'https://upload.wikimedia.org/wikipedia/en/9/92/Chitti_%28character%29.jpg',
                        alt_text: 'alt text for image',
                    },
                },
                {
                    type: 'divider',
                },
                {
                    type: 'section',
                    text: {
                        type: 'mrkdwn',
                        text: 'Ask him to stop or else pakshirajan will come looking for you....',
                    },
                    accessory: {
                        type: 'image',
                        image_url:
                            'https://www.americanbazaaronline.com/wp-content/uploads/2016/03/Akshay-Kumar-robot-2.jpg',
                        alt_text: 'alt text for image',
                    },
                },
                {
                    type: 'divider',
                },
            ],
        });
    }
}

module.exports = WorkspaceController;
