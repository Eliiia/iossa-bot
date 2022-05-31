import { CommandInteraction, Client, MessageEmbed } from "discord.js";

export async function run(interaction: CommandInteraction, client: Client) {
    const embed = new MessageEmbed()
        .setTitle("International hotlines:")
        .setDescription(
            "If you, or someone you know, are in an emergency situation, whatever that may be, please dial `911`, `999`, `112` or your local emergency number immediately.\nIf you are abroad or do not know the local emergency number, dial `999` or `112` and you will be connected to the local emergency services.\nThese numbers should work even without any signal.",
        )
        .addField(
            "Suicide Hotlines",
            "(If your country is not listed, [this](https://en.wikipedia.org/wiki/List_of_suicide_crisis_lines) may help\n\n**UK:** `116 123` (Samaritans); or `0800 58 58 58` (CALM; men ages 15-35); or `111` (option 2)\n**USA**: `1-800-273-TALK (8255) (National Suicide Prevention Lifeline); or `211` (emergency referrals to social and community services)\n**France:** `0800 235 236` (Professionals)\n**Germany:** `116 123`\n**Israel:** `1201`\n**Poland:** `89 19288`\n**Russia:** `007 (8202) 577-577` (Samaritans)\n**Sweden:** `90101`",
        )
        .addField(
            "Text-Based Suicide Hotlines",
            "(If your country is not listed, [this](https://en.wikipedia.org/wiki/List_of_suicide_crisis_lines) may help.\n\n**Worldwide:** [IMAlive](https://www.imalive.org/)\n**UK:** text `SHOUT` to `85258`\n**France:** [Sos amitié](https://www.sos-amitie.com/)\n**Germany:** [Telefonseelsorge](https://online.telefonseelsorge.de/)\n**Canada:** text `HOME` or `PARLER` to `686868`; or [Kids Help Phone](https://kidshelpphone.ca/)\n**Ireland:** text `HELLO` to `50808`\n**New Zealand:** `1737`, `234`, or `5626`\n**USA:** text `HOME` to `741-741`; OR [National Suicide Prevention Line](http://suicidepreventionlifeline.org/)\n**Israel:** `076-88444-00` (Sunday-Friday 2pm-6pm)\n**Japan:** [TELL](http://telljp.com/lifeline/) (English), [SPC Osaka](http://www.spc-osaka.org/) (Japanese)\n**Russia:** [Migsovet](http://migsovet.ru/)\n**South Africa:** `31393`\n**Sweden:** [Självmordslinjen](https://mind.se/hitta-hjalp/sjalvmordslinjen/)",
        )
        .addField(
            "LGBT hotlines",
            "(If your country is not listed, [this](https://en.wikipedia.org/wiki/List_of_suicide_crisis_lines) may help.\n\n**Canada:** `1-877-330-6366` (Trans Lifeline).\n**South Africa:** `(021) 712 6699` from 1pm to 9pm (Triangle Project)\n**US:** `1-866-488-7386` or text `START` to `678-678`(Trevor Project); or `1-877-565-8860` (Trans Lifeline).\n**Greece:** `11528`",
        )
        .addField(
            // to-do
            "Children's hotlines",
            "**UK:** `08001111` (Childline)\n**USA:** `1-800-932-0313` (ChildLine)\n**Europe**: `116 111` (redirects to your country's service)",
        );

    interaction.reply({ embeds: [embed] });
}
