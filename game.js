const game = {
    currentScene: 'entrance',
    inventory: [],
    scenes: {
        entrance: {
            description: 'You stand before the imposing gates of Mystery Manor. The iron-wrought gates are slightly ajar.',
            background: 'url("https://picsum.photos/800/400?random=1")',
            actions: {
                'Enter the manor': function() {
                    changeScene('foyer');
                },
                'Examine the gates': function() {
                    showDialog('The gates creak ominously as you touch them. You notice a strange symbol etched into the metal.');
                }
            }
        },
        foyer: {
            description: 'You\'re in a grand foyer. A dusty chandelier hangs overhead. There\'s a staircase leading up and a door to your right.',
            background: 'url("https://picsum.photos/800/400?random=2")',
            actions: {
                'Go upstairs': function() {
                    changeScene('upstairs');
                },
                'Enter the door': function() {
                    changeScene('library');
                },
                'Examine chandelier': function() {
                    if (!game.inventory.includes('key')) {
                        showDialog('You notice a small key hanging from one of the crystal pendants. You take it.');
                        game.inventory.push('key');
                        updateInventory();
                    } else {
                        showDialog('The chandelier sways slightly, casting eerie shadows.');
                    }
                }
            }
        },
        library: {
            description: 'Rows of ancient books line the walls. A locked cabinet catches your eye.',
            background: 'url("https://picsum.photos/800/400?random=3")',
            actions: {
                'Examine cabinet': function() {
                    if (game.inventory.includes('key')) {
                        showDialog('You use the key to unlock the cabinet. Inside, you find an old diary.');
                        game.inventory.push('diary');
                        updateInventory();
                    } else {
                        showDialog('The cabinet is locked. You need a key.');
                    }
                },
                'Return to foyer': function() {
                    changeScene('foyer');
                }
            }
        },
        upstairs: {
            description: 'You\'re in a dimly lit hallway. Portraits of stern-faced individuals watch your every move.',
            background: 'url("https://picsum.photos/800/400?random=4")',
            actions: {
                'Examine portraits': function() {
                    showDialog('The eyes of the portraits seem to follow you. It\'s unsettling.');
                },
                'Go back downstairs': function() {
                    changeScene('foyer');
                }
            }
        }
    }
};

function changeScene(sceneName) {
    game.currentScene = sceneName;
    const scene = game.scenes[sceneName];
    document.getElementById('scene').style.backgroundImage = scene.background;
    document.getElementById('scene').innerHTML = `
        <p>${scene.description}</p>
        ${Object.keys(scene.actions).map(action => `<button onclick="handleAction('${action}')">${action}</button>`).join('')}
    `;
}

function handleAction(action) {
    const scene = game.scenes[game.currentScene];
    if (scene.actions[action]) {
        scene.actions[action]();
    }
}

function showDialog(text) {
    const dialog = document.getElementById('dialog');
    dialog.textContent = text;
    dialog.style.display = 'block';
    setTimeout(() => {
        dialog.style.display = 'none';
    }, 3000);
}

function updateInventory() {
    document.getElementById('inventory').innerHTML = `
        Inventory: ${game.inventory.join(', ')}
    `;
}

// Initialize the game
changeScene('entrance');
updateInventory();
