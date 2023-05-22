export default function configureModule({ name, description }) {
    discord.interactions.commands.register({
        name,
        description
    }, async (interaction) => {
        await interaction.respond(`${name}: ${description}`);
    });
}