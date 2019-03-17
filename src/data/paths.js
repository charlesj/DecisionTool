const getPaths = () => {
  const paths = {}
  paths.decisionText = ['decisionText']

  const factors = 'factors'
  paths.factors = [factors]
  paths.factor = (factorId) => [factors, factorId]

  const choices = 'choices'
  paths.chocies = [choices]
  paths.choice = (choiceId) => [choices, choiceId]
  paths.choiceScores = (choiceId) => [...paths.choice(choiceId), 'scores']
  paths.choiceFactorScore = (choiceId, factorId) => [...paths.choiceScores(choiceId), factorId]

  return paths
}

export const paths = getPaths()
