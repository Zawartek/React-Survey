const choiceHelper = {
    addChoice: (choices, newChoiceValue) => [
        ...choices,
        {
            id: Math.floor((Math.random * 10000)+1),
            value: newChoiceValue,
            nbVote:0
        }
    ],

    updateChoice: (choices, updatedChoiceId) =>
        choices.map(c => c.id!==updatedChoiceId
            ? c
            : {
                ...c,
                nbVote:c.nbVote
            })
};

export {choiceHelper};