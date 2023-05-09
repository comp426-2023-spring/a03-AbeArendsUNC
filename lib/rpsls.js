const hierarchy = {
    'rock': {
        'paper': 'win',
        'scissors': 'lose',
        'lizard': 'win',
        'spock': 'lose'
    },
    'paper': {
        'rock': 'win',
        'scissors': 'lose',
        'lizard': 'lose',
        'spock': 'win'
    },
    'scissors': {
        'rock': 'lose',
        'paper': 'win',
        'lizard': 'win',
        'spock': 'lose'
    },
    'lizard': {
        'rock': 'lose',
        'paper': 'win',
        'scissors': 'lose',
        'spock': 'win'
    },
    'spock': {
        'rock': 'win',
        'paper': 'lose',
        'scissors': 'win',
        'lizard': 'lose'
    }
}

export function rps(choice) {
    console.log(choice)
    const options = ['rock', 'paper', 'scissors'];
    if(!choice) {
        // player did not make a choice, generate random
        return {'player': options[Math.floor(Math.random() * 3)]}
    }
    choice = choice.toLowerCase();

    if (!options.includes(shoot)) {
        console.error('${choice} is invalid')
        throw new RangeError('bad boy')
    }

    const comp = options[Math.floor(Math.random() * 3)];
    return {'player': choice, 'opponent': comp, 'result': hierarchy[choice][comp]};
}

export function rpsls(choice) {
    console.log(choice);
    const options = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
    if(!choice) {
        // player did not make a choice, generate random
        return {'player': options[Math.floor(Math.random() * 5)]}
    }

    choice = choice.toLowerCase();

    if (!options.includes(shoot)) {
        console.error('${choice} is invalid')
        throw new RangeError('bad boy')
    }

    const comp = options[Math.floor(Math.random() * 5)];
    return {'player': choice, 'opponent': comp, 'result': hierarchy[choice][comp]};
}