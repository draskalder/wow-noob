Ext.define('HelloWorld.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',
    requires: [
        'Ext.TitleBar',
        'Ext.Video',
        'Ext.Carousel'
    ],
    config: {
        tabBarPosition: 'top',

        items: [
            {
                title: 'Home',
                iconCls: 'home',

                styleHtmlContent: true,
                scrollable: true,

                items: {
                    docked: 'top',
                    xtype: 'titlebar',
                    title: 'Introduction to World of Warcraft'
                },

                html: [
                    "<h1>Welcome Adventurer!</h1> <p>Thanks for droping by on this friendly app that will let you know the basics of",
                    " World of Warcraft.</p>",
                    "<p style='text-align: center'><img src='http://hydra-media.cursecdn.com/wowpedia.org/6/65/World_of_Warcraft.png' />",
                    "<p>What is World of Warcraft? World of Warcraft is an online game where players from around the world assume the roles of heroic fantasy characters and explore a virtual world full of mystery, magic, and endless adventure.</p>"
                ].join("")
            },
            {
                title: 'Classes',
                iconCls: 'favorites',
                xtype: 'carousel',
                
                defaults: {
                	styleHtmlContent: true,
                	scrollable: true
                },

                items: [
                    {
                        html: [
                           	'<h2 style="color: #C41E3A">Death Knight</h2><p>When the Lich King’s control of his death knights was broken, his former champions sought revenge for the horrors committed under his command. After their vengeance was won, the death knights found themselves without a cause and without a home. One by one they trickled into the land of the living in search of a new purpose.</p><p style="text-align: center"><img src="http://www.draskalder.com/invasion/img/classes/deathknight.png" /></p><p><em>Through demonic punishment, the Lich King was born with a singular objective: controlling the massive throng of undead known as the Scourge.</em></p>'
                        ]
                    },
                    {
                        html: [
                           	'<h2 style="color: #FF7D0A">Druid</h2><p>Druids harness the vast powers of nature to preserve balance and protect life. With experience, druids can unleash nature’s raw energy against their enemies, raining celestial fury on them from a great distance, binding them with enchanted vines, or ensnaring them in unrelenting cyclones.</p><p style="text-align: center"><img src="http://www.draskalder.com/invasion/img/classes/druid.png" /></p><p><em>I felt our land being corrupted, just as if it were my own body.</em></p>'
                        ]
                    },
                    {
                        html: [
                           	'<h2 style="color: #AAD372">Hunter</h2><p>From an early age the call of the wild draws some adventurers from the comfort of their homes into the unforgiving primal world outside. Those who endure become hunters. Masters of their environment, they are able to slip like ghosts through the trees and lay traps in the paths of their enemies.</p><p style="text-align: center"><img src="http://www.draskalder.com/invasion/img/classes/hunter.png" /></p><p><em>Only beasts are above deceit.</em></p>'
                        ]
                    },
                    {
                        html: [
                           	'<h2 style="color: #68CCEF">Mage</h2><p>Students gifted with a keen intellect and unwavering discipline may walk the path of the mage. The arcane magic available to magi is both great and dangerous, and thus is revealed only to the most devoted practitioners. To avoid interference with their spellcasting, magi wear only cloth armor, but arcane shields and enchantments give them additional protection. To keep enemies at bay, magi can summon bursts of fire to incinerate distant targets and cause entire areas to erupt, setting groups of foes ablaze.</p><p style="text-align: center"><img src="http://www.draskalder.com/invasion/img/classes/mage.png" /></p><p><em>The accomplished wizard Jaina Proudmoore is the onetime ruler of destroyed Theramore, and the current leader of the wizards of the Kirin Tor.</em></p>'
                        ]
                    },
                    {
                        html: [
                           	'<h2 style="color: #00C77B">Monk</h2><p>When the pandaren were subjugated by the mogu centuries ago, it was the monks that brought hope to a seemingly dim future. Restricted from using weapons by their slave masters, these pandaren instead focused on harnessing their chi and learning weaponless combat. When the opportunity for revolution struck, they were well-trained to throw off the yoke of oppression.</p><p style="text-align: center"><img src="http://www.draskalder.com/invasion/img/classes/monk.png" /></p><p><em>Chen Stormstout is a wanderer, adventurer and keg-emptier -- and this world-class brewmaster has left an indelible mark on Azeroth\'s history.</em></p>'
                        ]
                    },
                    {
                        html: [
                           	'<h2 style="color: #F48CBA">Paladin</h2><p>This is the call of the paladin: to protect the weak, to bring justice to the unjust, and to vanquish evil from the darkest corners of the world. These holy warriors are equipped with plate armor so they can confront the toughest of foes, and the blessing of the Light allows them to heal wounds and, in some cases, even restore life to the dead.</p><p style="text-align: center"><img src="http://www.draskalder.com/invasion/img/classes/paladin.png" /></p><p><em>Vengeance cannot be a part of what we must do.</em></p>'
                        ]
                    },
                    {
                        html: [
                           	'<h2 style="text-shadow: 0px 0px 5px #333; color: #FFFFFF">Priest</h2><p>Priests are devoted to the spiritual, and express their unwavering faith by serving the people. For millennia they have left behind the confines of their temples and the comfort of their shrines so they can support their allies in war-torn lands. In the midst of terrible conflict, no hero questions the value of the priestly orders.</p><p style="text-align: center"><img src="http://www.draskalder.com/invasion/img/classes/priest.png" /></p><p><em>Young Prince Anduin carries a heavy burden, but it is the preservation of uneasy peace, not the stratagems of war.</em></p>'
                        ]
                    },
                    {
                        html: [
                           	'<h2 style="text-shadow: 0px 0px 5px #333; color: #FFF468">Rogue</h2><p>For rogues, the only code is the contract, and their honor is purchased in gold. Free from the constraints of a conscience, these mercenaries rely on brutal and efficient tactics. Lethal assassins and masters of stealth, they will approach their marks from behind, piercing a vital organ and vanishing into the shadows before the victim hits the ground.</p><p style="text-align: center"><img src="http://www.draskalder.com/invasion/img/classes/rogue.png" /></p><p><em>What has either faction ever done for me?</em></p>'
                        ]
                    },
                    {
                        html: [
                           	'<h2 style="color: #2359FF">Shaman</h2><p>Shaman are spiritual guides and practitioners, not of the divine, but of the very elements. Unlike some other mystics, shaman commune with forces that are not strictly benevolent. The elements are chaotic, and left to their own devices, they rage against one another in unending primal fury. It is the call of the shaman to bring balance to this chaos. Acting as moderators among earth, fire, water, and air, shaman summon totems that focus the elements to support the shaman’s allies or punish those who threaten them.</p><p style="text-align: center"><img src="http://www.draskalder.com/invasion/img/classes/shaman.png" /></p><p><em>The former slave known as Thrall brought unity to the Horde, turning ravagers into architects and securing a future for his people.</em></p>'
                        ]
                    },
                    {
                        html: [
                           	'<h2 style="color: #9382C9">Warlock</h2><p>In the face of demonic power, most heroes see death. Warlocks see only opportunity. Dominance is their aim, and they have found a path to it in the dark arts. These voracious spellcasters summon demonic minions to fight beside them. At first, they command only the service of imps, but as a warlock’s knowledge grows, seductive succubi, loyal voidwalkers, and horrific felhunters join the dark sorcerer’s ranks to wreak havoc on anyone who stands in their master’s way.</p><p style="text-align: center"><img src="http://www.draskalder.com/invasion/img/classes/warlock.png" /></p><p><em>I am darkness incarnate.</em></p>'
                        ]
                    },
                    {
                        html: [
                           	'<h2 style="color: #C69B6D">Warrior</h2><p>For as long as war has raged, heroes from every race have aimed to master the art of battle. Warriors combine strength, leadership, and a vast knowledge of arms and armor to wreak havoc in glorious combat. Some protect from the front lines with shields, locking down enemies while allies support the warrior from behind with spell and bow. Others forgo the shield and unleash their rage at the closest threat with a variety of deadly weapons.</p><p style="text-align: center"><img src="http://www.draskalder.com/invasion/img/classes/warrior.png" /></p><p><em>Garrosh Hellscream, former Warchief of the Horde, is a living testament to the dangers of unchecked aggression.</em></p>'
                        ]
                    }
                ]
            },
            {
                title: 'Music',
                iconCls: 'more',
                layout: {
                	type: 'vbox',
                	pack: 'center',
                	align: 'stretch'
                },
                items: [
					{
						xtype: 'toolbar',
						docked: 'top',
						title: 'The Clans Join'
					},
					{
						xtype: 'toolbar',
						docked: 'bottom',
						defaults: {
							xtype: 'button',
							handler: function () {
								var container = this.getParent().getParent(),
									audio = container.down('audio');
								audio.toggle();
								this.setText(audio.isPlaying() ? 'Pause' : 'Play');
							}
						},
						items: [{
							text: 'Play',
							flex: 1
						}]
					},
					{
						html: '<img src="http://media.blizzard.com/wow/warlords-of-draenor-6y1fz/media/artwork/artwork-24-full.jpg" style="display: block; margin: 0 auto; height: 100%; max-height: 600px;" />'
					},
					{
						xtype: 'audio',
						url: 'html/the_clans_join.mp3',
						hidden: true
					}
                ]
            }
        ]
    }
});
