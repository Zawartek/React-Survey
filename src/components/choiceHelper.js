const choiceHelper = {
    addChoice: (choices, newChoiceValue) => [
        ...choices,
        {
            id: choices.length+1,
            value: newChoiceValue,
            nbVote:0,
            percent: 0
        }
    ],

    updateChoice: (choices, updatedChoiceId, updatedNbVote, nbTotalVote) =>
        choices.map(c => c.id!==updatedChoiceId
            ? {
                ...c,
                percent: (nbTotalVote === 0) ? 0 : Math.round(c.nbVote / nbTotalVote * 100)
            }
            : {
                ...c,
                nbVote: updatedNbVote,
                percent: (nbTotalVote === 0) ? 0 :Math.round(updatedNbVote / nbTotalVote * 100)
            })
};

export {choiceHelper};