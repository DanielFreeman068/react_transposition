// words.js
const words = {
    levelOne: [
        {
            originalText: "tackle",
            cipherText: "tca*kle",
            cipherKey: [2, 1, 3],
            hint: "An action where a player attempts to steal the ball from an opponent."
        },
        {
            originalText: "referee",
            cipherText: "er*reefe*",
            cipherKey: [2, 1, 3],
            hint: "An official who oversees the match and enforces the rules."
        },
        {
            originalText: "kickoff",
            cipherText: "cf*io*kkf",
            cipherKey: [3, 2, 1],
            hint: "The start of the game, marked by the first kick."
        },
        {
            originalText: "ball kick",
            cipherText: "a*clkkbli",
            cipherKey: [2, 3, 1],
            hint: "A move in soccer where a player strikes the ball with their foot."
        },
        {
            originalText: "coach",
            cipherText: "oh*cc*a**",
            cipherKey: [2, 1, 3],
            hint: "The person responsible for training and leading the soccer team."
        },
        {
            originalText: "subbed",
            cipherText: "sb*bd*ue*",
            cipherKey: [1, 3, 2],
            hint: "To replace a player during the match."
        },
        {
            originalText: "soccer",
            cipherText: "oe*cr*sc*",
            cipherKey: [2, 3, 1],
            hint: "The sport played with a round ball, where teams try to score goals by kicking the ball into the opponent's net."
        },
        {
            originalText: "striker",
            cipherText: "sirre*tk*",
            cipherKey: [1, 3, 2],
            hint: "A player whose primary role is to score goals."
        },
        {
            originalText: "defender",
            cipherText: "deefd*enr",
            cipherKey: [1, 3, 2],
            hint: "A player who defends their team's goal and prevents the opposition from scoring."
        },
        {
            originalText: "crosses",
            cipherText: "rs*cssoe*",
            cipherKey: [2, 1, 3],
            hint: "A type of pass made from one side of the field to another."
        },
    ],
    
    levelTwo: [
        {
            originalText: "goal save",
            cipherText: "glaaseo*v",
            cipherKey: [1, 3, 2],
            hint: "A defensive action where the goalkeeper prevents the ball from entering the net."
        },
        {
            originalText: "free kick",
            cipherText: "ekkr*cfei",
            cipherKey: [3, 2, 1],
            hint: "A set-piece awarded for a foul, where the ball is kicked from a stationary position."
        },
        {
            originalText: "hat trick",
            cipherText: "trkh*iatc",
            cipherKey: [3, 1, 2],
            hint: "In soccer, scoring three goals in one game earns you something magical, like pulling rabbits out of a hat."
        },
        {
            originalText: "goal kick",
            cipherText: "gliakko*c",
            cipherKey: [1, 3, 2],
            hint: "A goal kick is awarded when the ball goes over the goal line off an opposing player's last touch."
        },
        {
            originalText: "red card",
            cipherText: "ecdr*rda*",
            cipherKey: [2, 1, 3],
            hint: "A card given to a player for a serious foul or misconduct, resulting in ejection from the game."
        },
        {
            originalText: "own goal",
            cipherText: "o*awglno*",
            cipherKey: [1, 2, 3],
            hint: "A goal accidentally scored by a player into their own net."
        },
    ],

    levelThree: [
        {
            originalText: "yellow card",
            cipherText: "eocdyl*rlwa*",
            cipherKey: [2, 1, 3],
            hint: "A warning card given to a player for committing a foul."
        },
        {
            originalText: "header goal",
            cipherText: "eeglho*aaro*",
            cipherKey: [2, 1, 3],
            hint: "A goal scored by hitting the ball with the head."
        },
        {
            originalText: "penalty kick",
            cipherText: "payintkkel*c",
            cipherKey: [1, 3, 2],
            hint: "A free kick awarded after a foul within the penalty area."
        },
        {
            originalText: "corner kick",
            cipherText: "rri*cn*coekk",
            cipherKey: [3, 1, 2],
            hint: "A kick taken from the corner of the field after the ball goes over the goal line."
        },
        {
            originalText: "extra time",
            cipherText: "xai*ertet*m*",
            cipherKey: [2, 1, 3],
            hint: "Additional time played after the regular game time to decide a winner."
        },
        {
            originalText: "offside trap",
            cipherText: "oserfdtpfi*a",
            cipherKey: [1, 3, 2],
            hint: "A defensive strategy in soccer to catch opposing players offside."
        },
        {
            originalText: "clean sheet",
            cipherText: "lnhtcasee*e*",
            cipherKey: [2, 1, 3],
            hint: "When a team prevents the opponent from scoring a goal in a game."
        },
        {
            originalText: "match day",
            cipherText: "t*y*mcd*aha*",
            cipherKey: [3, 1, 2],
            hint: "The day when a soccer match is played."
        },
    ],

    levelFour: [
        {
            originalText: "midfielder",
            cipherText: "mfidl*ree",
            cipherKey: [3, 1, 2],
            hint: "A player who plays both defensive and attacking roles in the middle of the field."
        },
        {
            originalText: "goalkeeper",
            cipherText: "okp*gleraee*",
            cipherKey: [2, 1, 3],
            hint: "The player responsible for guarding the goal and preventing the opposing team from scoring."
        },   
        {
            originalText: "substitution",
            cipherText: "sstibitnutuo",
            cipherKey: [1, 3, 2],
            hint: "Replacing one player with another during a match."
        },
        {
            originalText: "clearance",
            cipherText: "lrc*can*eae*",
            cipherKey: [2, 1, 3],
            hint: "A defensive action where the ball is kicked away from the goal area."
        },
        {
            originalText: "lionel messi",
            cipherText: "oleiiemsln*s",
            cipherKey: [3, 2, 1],
            hint: "The greatest player of all time..."
        },
        {
            originalText: "la remontada",
            cipherText: "aendlroa*mta",
            cipherKey: [2, 1, 3],
            hint: "Barcelona's 6-1 comeback against Paris Saint Germain in 2017",
        },
        {
            originalText: "golden ball",
            cipherText: "gd*llna*oebl",
            cipherKey: [1, 3, 2],
            hint: "An annual football award presented by French magazine France Football since 1956 to honour the player deemed to have performed the best over the previous season",
        },
    ]
};

export default words;
