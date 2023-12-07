const ATTACK_VALUE = 10
const STRONG_ATTACK_VALUE = 17
const MONSTER_ATTACK_VALUE = 14
const HEAL_VALUE = 20

const MODE_ATTACK = 'ATTACK'
const MODE_STRONG_ATTACK = 'STRONG_ATTACK'
const LOG_EVENT_PLAYER_ATTACK = 'PLAYER_ATTACK'
const LOG_EVENT_PLAYER_STRONG_ATTACK = 'PLAYER_STRONG_ATTACK'
const LOG_EVENT_MONSTER_ATTACK = 'MONSTER_ATTACK'
const LOG_EVENT_PLAYER_HEAL = 'PLAYER_HEAL'
const LOG_EVENT_GAME_OVER = 'GAME_OVER'

const eneteredValue = prompt('Max life for u and the monste. ', '100')

let chosenMaxLife = parseInt(eneteredValue)
let battleLog = []
let lastLogEntry

if(isNaN(chosenMaxLife) || chosenMaxLife <= 0){
  chosenMaxLife = 100
}

let currentMonsterHealth = chosenMaxLife
let currentPlayerHealth = chosenMaxLife
let hasBonusLife = true

adjustHealthBars(chosenMaxLife)

function reset() {
  currentMonsterHealth = chosenMaxLife
  currentPlayerHealth = chosenMaxLife
  resetGame(chosenMaxLife)
}

function writeToLog(event, value, monsterHealth, playerHealth){
  let logEntry = {
    event: event,
    value: value,
    finalMonsterHealth: monsterHealth,
    finalPlayerHealth: playerHealth
  }
  switch(event){
    case LOG_EVENT_PLAYER_ATTACK:
      case LOG_EVENT_PLAYER_STRONG_ATTACK:
          logEntry.target = 'MONSTER'
          break;
    case LOG_EVENT_MONSTER_ATTACK:
      case LOG_EVENT_PLAYER_HEAL:
        case LOG_EVENT_GAME_OVER:
          logEntry.target = 'PLAYER'
          break;
  }
  battleLog.push(logEntry)
}

function endRound() {
  const initialPlayerHealth = currentPlayerHealth
  const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE)
  currentPlayerHealth -= playerDamage
  writeToLog(LOG_EVENT_MONSTER_ATTACK, playerDamage, currentMonsterHealth, currentPlayerHealth)

  if(currentPlayerHealth <= 0 && hasBonusLife){
    hasBonusLife = false
    removeBonusLife()
    currentPlayerHealth = initialPlayerHealth
    setPlayerHealth(initialPlayerHealth)
    alert('You would be dead but the bonus life saved u!')
  }

  if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
    alert('You won!')
    writeToLog(LOG_EVENT_GAME_OVER, 'PLAYER WON', currentMonsterHealth, currentPlayerHealth)
  } else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
    alert('You lost!')
    writeToLog(LOG_EVENT_GAME_OVER, 'MONSTER WON', currentMonsterHealth, currentPlayerHealth)
  } else if (currentPlayerHealth <= 0 && currentMonsterHealth <= 0) {
    alert('You have a draw!')
    writeToLog(LOG_EVENT_GAME_OVER, 'A DRAW', currentMonsterHealth, currentPlayerHealth)
  }

  if(currentMonsterHealth <= 0 || currentPlayerHealth <= 0){
    reset()
  }
}

function attackMonster(mode) {
  let maxDamage
  let logEvent
  if (mode === MODE_ATTACK) {
    maxDamage = ATTACK_VALUE
    logEvent = LOG_EVENT_PLAYER_ATTACK
  } else if (mode === MODE_STRONG_ATTACK) {
    maxDamage = STRONG_ATTACK_VALUE
    logEvent = LOG_EVENT_PLAYER_STRONG_ATTACK
  }
  const damage = dealMonsterDamage(maxDamage)
  currentMonsterHealth -= damage
  writeToLog(logEvent, damage, currentMonsterHealth, currentPlayerHealth)
  endRound()
}

function attackHandler() {
  attackMonster(MODE_ATTACK)
}

function strongAttackHandler() {
  attackMonster(MODE_STRONG_ATTACK)
}

function healPlayerHandler() {
  let healValue
  if(currentPlayerHealth >= chosenMaxLife - HEAL_VALUE) {
    alert('You cannot heal urself to over than max health!')
    healValue = chosenMaxLife - currentPlayerHealth
  } else {
    healValue = HEAL_VALUE
  }
  increasePlayerHealth(healValue)
  currentPlayerHealth += healValue
  writeToLog(LOG_EVENT_PLAYER_HEAL, healValue, currentMonsterHealth, currentPlayerHealth)
  endRound()
}

function showLogshandler(){
  // for(let i = 0; i < battleLog.length; i++){
  //   console.log(battleLog[i])
  // }
  // let j = 0
  // while(j < battleLog.length){
  //   console.log(battleLog[j++])
  // }

  // let k = 0
  // do {
  //   console.log(battleLog[k++])
  // } while(k < battleLog.length)

  let = 0
  for(const log of battleLog){
    // if(!lastLogEntry && lastLogEntry !== 0 || lastLogEntry < i){
      console.log(`#${i++}`)
      // continue
      for(const key in log){
        console.log(`${key}: ${log[key]}`)
      }
      lastLogEntry = i
      // break
    // }
  }
}

attackBtn.addEventListener('click', attackHandler)
strongAttackBtn.addEventListener('click', strongAttackHandler)
healBtn.addEventListener('click', healPlayerHandler)
logBtn.addEventListener('click', showLogshandler)