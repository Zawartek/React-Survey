import { choiceHelper } from '../components/choiceHelper'

it('add Choice to a default list', () => {
  const firstChoiceList = [
    {id:1, value:'Reponse A', nbVote:10, percent:10},
    {id:2, value:'Reponse B', nbVote:20, percent:20},
    {id:3, value:'Reponse C', nbVote:30, percent:30},
	  {id:4, value:'Reponse D', nbVote:40, percent:40}
  ];

  const newChoiceToAdd = choiceHelper.addChoice(firstChoiceList, 'Reponse E');
  const secondChoiceList = [
    ...firstChoiceList,
    newChoiceToAdd[4]
  ];

  expect(newChoiceToAdd).toEqual(secondChoiceList);
});

it('does not change my first list to add a choice', () => {
  const firstChoiceList = [
    {id:1, value:'Reponse A', nbVote:10, percent:10},
    {id:2, value:'Reponse B', nbVote:90, percent:90},
  ];

  const secondChoiceList = [
    ...firstChoiceList];

  choiceHelper.addChoice(firstChoiceList, 'Reponse C');
  expect(firstChoiceList).toEqual(secondChoiceList);
});

it('update nbVote in a choice', () => {
  const firstChoiceList = [
    {id:1, value:'Reponse A', nbVote:10, percent:10},
    {id:2, value:'Reponse B', nbVote:90, percent:90},
  ];

  const choiceToUpdate = choiceHelper.updateChoice(firstChoiceList, 1, 20, 110);
  const secondChoiceList = [
    {id:1, value:'Reponse A', nbVote:20, percent:18},
    {id:2, value:'Reponse B', nbVote:90, percent:82},
  ];

  expect(choiceToUpdate).toEqual(secondChoiceList);
});

it('does not change my first list after updating a choice nbVote', () => {
  const firstChoiceList = [
    {id:1, value:'Reponse A', nbVote:10, percent:10},
    {id:2, value:'Reponse B', nbVote:90, percent:90},
  ];

  const secondChoiceList = [
    ...firstChoiceList];

  choiceHelper.updateChoice(firstChoiceList, 1, 20, 110);
  
  expect(firstChoiceList).toEqual(secondChoiceList);
});

