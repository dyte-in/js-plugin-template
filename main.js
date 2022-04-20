import DytePlugin from "@dytesdk/plugin-sdk";

// NOTE: The complete documentation and usage can be found at: https://www.npmjs.com/package/@dytesdk/plugin-sdk/v/latest#usage

let plugin;

const getSelf = async () => {
    const self = await plugin.getPeerInfo();
    console.log(self);
}

const sendChatMessage = () => {
    plugin.sendChatMessage({
        type: 'text',
        message: 'This is my awesome plugin!'
    });
}


const main = async () => {
    plugin = await DytePlugin.init();
    console.log(plugin);

    await getSelf();
    sendChatMessage();
};

main();