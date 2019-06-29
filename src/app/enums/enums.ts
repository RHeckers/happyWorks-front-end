
// Default multiple choise answars NL
export enum multipleChoiseDefaultanswersNL {
    'Ik ben zeer tevreden hierover' = 1,
    'Ik ben tevreden hierover',
    'Ik ben hier neutraal over',
    'Ik ben niet niet tevreden over',
    'Ik ben helemaal niet tevreden hierover'
};
// Default miltiple choise answars ENG
export enum multipleChoiseDefaultanswersENG {
    'I am very happy about this' = 1,
    'I am happy about this',
    'I am neutral about this',
    'I am a bit unhappy about this',
    'I am totaly unhappy about this'
};

export const multipleChoiseDefaultanswers = [
    multipleChoiseDefaultanswersNL, 
    multipleChoiseDefaultanswersENG
]

// Range 100 Enums
export enum range100in3 {
    '0 - 33' = 1,
    '34 - 66',
    '67 - 100'
};
export enum range100in4 {
    '0 - 25' = 1,
    '26 - 50',
    '51 - 75',
    '76 - 100'
};
export enum range100in5 {
    '0 - 20' = 1,
    '21 - 40',
    '41 - 60',
    '61 - 80',
    '81 - 100'
};
export enum range100in10 {
    '0 - 10' = 1,
    '11 - 20',
    '21 - 30',
    '31 - 40',
    '41 - 50',
    '51 - 60',
    '61 - 70',
    '71 - 80',
    '81 - 90',
    '91 - 100'
};

// Button EnumTexts
export enum nextBtn {
    'VOLGENDE' = 1,
    'NEXT'
};
export enum completeBtn {
    'AFRONDEN' = 1,
    'COMPLETE'
};
export enum confirmBtn {
    'BEVESTIGEN' = 1,
    'CONFIRM'
};
export enum cancelBtn {
    'ANNULEREN' = 1,
    'CANCEL'
};
export enum addAnswerBtn {
    'ANTWOORD TOEVOEGEN' = 1,
    'ADD ANSWER'
};
export enum confirmNewAnswersBtn {
    'ANTWOORDEN GROEP OPSLAAN' = 1,
    'SAVE ANSWER GROUP'
};

// +++++++++++++++++++++++++++++++++++
// ++ Create Feedback Session Enums ++
// +++++++++++++++++++++++++++++++++++

// Question types NL
export enum questionTypes1 {
    'Multiple choise question' = 1,
    'Score slider question',
    'Score in range question',
    'Yes - No question'
};

// Question types ENG
export enum questionTypes2 {
    'Meerkeuze vragen' = 1,
    'Score slider vraag',
    'Van X tot Y score vraag',
    'Ja - Nee vraag'
};