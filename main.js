var loopNumberBasket = 0;
var loopNumberTimePlayed = 0;
var loopNumbercurrentTask = 0;

mainVariables = ['limes', 'rottenLimes', 'coins', 'juice', 'megaCoins', 'alphaCoins', 'peeledLimes'];
//Main variables change color in options and are updated as numbers.

mainSkills = ['rottenWisdom', 'limebidextrous', 'knifebidextrous', 'intelligence', 'ambidextrous', 'keenEye'];
//Uses: Restart bar after reloading. Sets the level to the max level if it somehow goes above. Updates test for level / levelMax.

mainSciences = ['watertight', 'surveying', 'benevolence'];
//Uses: Updates time to complete science. Updates number of researchers allocated.

function mainGameLoopSlow() {
	
	if (gameData.autoStartSimulation)
		startSimulation()
	
	if (gameData.autoStartTask) 
		diseaseControlTask()
	
	if (gameData.autoCheckSimulation)
		checkResults()
	
	if (gameData.autoAdvertiseBroker)
	{
		if (gameData.currencyApplicantSpeed > gameData.autoAdvertiseSpeedValue || (gameData.smarterAdvertisingManagerBroker && gameData.currencyApplicantTransferAmount < gameData.autoAdvertiseAmountValue))
		{
			advertise()
		}
	}

	if(gameData.numberOfTiles >= 17)
	{
		tabs('mapTile-4-0', 'inline-block')
	}
	if(gameData.numberOfTiles >= 18)
	{
		tabs('mapTile-4-1', 'inline-block')
	}
	if(gameData.numberOfTiles >= 19)
	{
		tabs('mapTile-4-2', 'inline-block')
	}
	if(gameData.numberOfTiles >= 20)
	{
		tabs('mapTile-4-3', 'inline-block')
	}
	if(gameData.numberOfTiles >= 21)
	{
		gameData.numberOfTiles = 20
	}

	startCurrentTask(gameData.currentTask)	
	startCurrentTask(gameData.currentTask2)	

	
	if(gameData.currentSkill !== 'none')
		barStartGranularSkillBasic(gameData.currentSkill)

		
	if(gameData.bachelorsDegreeFinance)
	{
		if(beckyRandom(2) == 1 && gameData.alphaCoinsExchangeRate < 200)
			gameData.alphaCoinsExchangeRate += 1
		else if (gameData.alphaCoinsExchangeRate > 50)
			gameData.alphaCoinsExchangeRate -= 1
	}
	
	gameData.achievementBar = 0
    for (i = 1; i < 7; i++) {
		
		if (gameData['achievement' + i]) {
			gameData.achievementBar += 100 / 7
		}
	}
	
	gameData.lastSaveTime = Date.now()
	loopNumberTimePlayed += 1
	if(loopNumberTimePlayed == 2)
	{
		gameData.timePlayed += 1 
		loopNumberTimePlayed = 0
	}

	moveBar('achievement')
	updateMapTileAesthetic()
	setTimeout(mainGameLoopSlow, 500)
}

function mainGameLoop() {
	
	loopNumberBasket += 1	
	
	 if (gameData.basketBar < 100 && loopNumberBasket >= 24) {
        gameData.basketBar += 0.2;
		loopNumberBasket = 0
    }

	
	setTimeout(mainGameLoop, 50)
    updateValues()
}

function calculateOfflineProgress(){
	secondsOffline = Math.floor((Date.now() - gameData.lastSaveTime) / 1000)
	secondsOfflineThree = Math.floor(secondsOffline / 3)
	if(gameData.basketScarecrow)
	{
		if(gameData.basketBar + secondsOfflineThree < 100)
			gameData.basketBar += secondsOfflineThree
		else
			gameData.basketBar = 100
	}
	if(gameData.surveillanceCamera && secondsOffline > 60 && gameData.employeeWorking > 0)
	{
		for (i = 0; i < Math.floor(secondsOffline / 60) && gameData.employeeWorking > 0; i++) {
			
			gameData.employeeWorking -= 1
			gameData.limes += gameData.employeeCurrentSpeed

		}

		gameData.workingBar = 0

	}
	
	saveGame()

}

function sellMaxJuice() {
    if (gameData.juice < gameData.juiceBulkAmountMax) {
        gameData.juiceBulkAmountToggle = gameData.juice
    } else {
        gameData.juiceBulkAmountToggle = gameData.juiceBulkAmountMax
    }

    updateValues()
}

function collectingUpgrade() {
    if (gameData.limes >= gameData.nourishmentPrice) {

        gameData.limes -= gameData.nourishmentPrice
        gameData.nourishment += 1
        gameData.autoCollectingBar = 0

    }

    updateValues()
}

function randomizeApplication() {
	if(gameData.typeToHire == 0){
		
		if (gameData.firstApplicant == 1) {
			gameData.applicantSpeed = 100
			gameData.applicantPrice = 0
			gameData.applicantWage = 5
			gameData.applicantHunger = 1

			gameData.firstApplicant = 0
		} else {
			gameData.applicantSpeed = (Math.floor(Math.random() * (10 + gameData.betterTraining) + 1) * 100)
			gameData.applicantPrice = Math.floor(Math.random() * 200)
			gameData.applicantWage = Math.floor(Math.random() * 16) + 5
			gameData.applicantHunger = Math.floor(Math.random() * 20) + 1
		}
		
		gameData.applicationType = 0
	}
	else{
		gameData.currencyApplicantFee = beckyRandomMinMax(gameData.minBrokerApplicantFee, gameData.maxBrokerApplicantFee)
		gameData.currencyApplicantSpeed = beckyRandomMinMax(gameData.minBrokerApplicantSpeed, gameData.maxBrokerApplicantSpeed)
		gameData.currencyApplicantPrice = (Math.floor(Math.random() * 20) + 1) * 10000
		gameData.currencyApplicantTransferAmount = beckyRandomMinMax(gameData.minBrokerApplicantAmount, gameData.maxBrokerApplicantAmount)
		
		gameData.applicationType = 1

	}


    updateValues()
}




function deliveryToggleStandard() {
    if (gameData.fasterTransport == 0) {
        gameData.deliveryTypeToggle = 0
        gameData.deliveryPrice = 2
    } else {
        gameData.deliveryTypeToggle = 2
        gameData.deliveryPrice = 50
    }
    updateValues()
}

function deliveryToggleExpress() {
    gameData.deliveryTypeToggle = 1
    gameData.deliveryPrice = 5
    updateValues()
}

function foodToggleLimes() {
    gameData.foodTypeToggle = 0
    updateValues()
}

function foodToggleRottenLimes() {
    gameData.foodTypeToggle = 1
    updateValues()
}


function payEmployee() {
    if (gameData.coins >= gameData.employeeWage && gameData.employeeWorking < gameData.employeeWorkingMax) {
        gameData.employeeWorking += 1
        gameData.coins -= gameData.employeeWage
        working()
    }

    updateValues()
}

function hireApplicant() {
	if(gameData.applicationType == 0){
		if (gameData.coins >= gameData.applicantPrice && gameData.applicationReady == 1) {
			gameData.applicationReady = 0
			gameData.employeeWorking = 0
			gameData.workingBar = 0

			gameData.coins -= gameData.applicantPrice

			gameData.employeeHunger = gameData.applicantHunger
			gameData.employeeSpeed = gameData.applicantSpeed
			gameData.employeePrice = gameData.applicantPrice
			gameData.employeeWage = gameData.applicantWage

			gameData.employeeCurrentSpeed = -(gameData.employeeHunger * 60)

			gameData.employees = 1

			gameData.employeeIsWorking = 0
			gameData.workingBar = 0
			
			update("speedEmployee", "Speed: " + gameData.employeeSpeed.toLocaleString() + "% of what I'm taught.")
			update("wageEmployee", "Wages: " + gameData.employeeWage.toLocaleString() + " Coins per minute.")
			update("hungerEmployee", "Hunger: " + gameData.employeeHunger.toLocaleString() + " Limes per second.")
		}
	}
	else{
		if (gameData.coins >= gameData.currencyApplicantPrice && gameData.applicationReady == 1) {
			gameData.applicationReady = 0
			gameData.doesHaveCurrencyBroker = 1

			gameData.coins -= gameData.currencyApplicantPrice

			gameData.currencyBrokerFee = gameData.currencyApplicantFee
			gameData.currencyBrokerSpeed = gameData.currencyApplicantSpeed
			gameData.currencyBrokerPrice = gameData.currencyApplicantPrice
			gameData.currencyBrokerTransferAmount = gameData.currencyApplicantTransferAmount
			
			gameData.coinsToAlphaBar = 0

		}
	}
    updateValues()
}

function getLimesButton() {

	if (gameData.lookAround < 1)
		gameData.collectLimesAtBeginning += 1
	
	switch (gameData.collectLimesAtBeginning) {
	  case 10:
        update("newInfo", "Maybe you should try looking around!")
		break;
	  case 20:
        update("newInfo", "Seriously you aren't going to find anything.")
		break;
	  case 30:
        update("newInfo", "Do you see the Look Around button?")
		break;
	  case 40:
        update("newInfo", "There doesn't seem to be any limes here.")
		break;
	  case 50:
        update("newInfo", "Is that a lime?")
		break;
	  case 60:
        update("newInfo", "Nope, it's dirt.")
		break;
	  case 70:
        update("newInfo", "I would suggest looking around more.")
		break;
	  case 80:
        update("newInfo", "You aren't getting a secret achievement.")
		break;
	  case 90:
        update("newInfo", "This is literally just a waste of time.")
		break;
	  case 100:
        update("newInfo", "Can you please play the game correctly?")
		break;
	  case 110:
        update("newInfo", "Is that something priceless in the distance?")
		break;
	  case 120:
        update("newInfo", "Nope, it's dirt.")
		break;
	  case 130:
        update("newInfo", "I'm leaving.")

	}
	
    if (gameData.autoCollectingBar == 0 || gameData.autoCollectingBar == (gameData.nourishment + 1) * 100) {
        getLimes()
    }

}

function getLimes() {
	if( beckyRandom(gameData.keenEyeSkillLevelMax) <= gameData.keenEyeSkillLevel)
	{
		if (gameData.keenEyeSkillLevel != gameData.keenEyeSkillLevelMax)
		{
			update("newInfo", "You found something!")
		}
		
		
		if (Math.random() <= (gameData.rottenWisdom / 100)) {
			if (Math.random() <= (gameData.limebidextrous / 100)) {
				gameData.limes += gameData.limesPerClick
				if (gameData.teachBar > 0 && gameData.teachBar < 100) {
					gameData.employeeCurrentSpeed += (gameData.limesPerClick * gameData.employeeSpeed) / 10
				}
			}
			gameData.limes += gameData.limesPerClick
			if (gameData.teachBar > 0 && gameData.teachBar < 100) {
				gameData.employeeCurrentSpeed += (gameData.limesPerClick * gameData.employeeSpeed) / 10
			}
		} else {
			gameData.rottenLimes += gameData.limesPerClick
		}
		
	}
	else
	{
		if ((gameData.lookAround < 1 && gameData.collectLimesAtBeginning < 10) || gameData.lookAround >= 1)
			update("newInfo", "Couldn't find any limes...")
	}
		
    updateValues()
}

function peelLime() {
    if (gameData.limes >= 1) {
        gameData.limes -= 1
        if (Math.floor((Math.random() * 40) / gameData.knifebidextrous) == 0) {
            gameData.peeledLimes += 1
            gameData.limes -= 1
        }
        gameData.peeledLimes += 1
    }
    updateValues()
}

function buyTome() {
	if(gameData.tomes == 0)
	{
		if (gameData.coins >= 10) {
			gameData.coins -= 10
			gameData.tomes = 1
		}
	}
	else if(gameData.tomes == 1)
	{
		if (gameData.alphaCoins >= 100) {
			gameData.alphaCoins -= 100
			gameData.tomes = 2
		}
	}
    updateValues()
}

function typeToHire(id) {
	gameData.typeToHireToggle = id
	updateValues()
}

function buyAFork() {
    if (gameData.coins >= 1) {
        gameData.coins -= 1
        gameData.fork = 1
        gameData.eatBar = 0
    }
    updateValues()
}

function buyARobe() {
    if (gameData.coins >= 1e5) {
        gameData.coins -= 1e5
        gameData.silkRobe = 1
        gameData.respect += 50
    }
    updateValues()
}

function brokerApplicant(id, type) {

	if(gameData.alphaCoins >= gameData['brokerApplicant'+ id + 'Price'])
	{
		if(type == 'max')
		{
			if (gameData['maxBrokerApplicant' + id] > gameData['minBrokerApplicant' + id]) {
				
				brokerApplicantPrice(id)


				gameData['maxBrokerApplicant' + id] -= 1
			}
		}
		else if(type == 'maxup')
		{
			brokerApplicantPrice(id)
			gameData['maxBrokerApplicant' + id] += 1
		}
		else if(type == 'minup')
		{
			if (gameData['maxBrokerApplicant' + id] > gameData['minBrokerApplicant' + id]) {
				
				brokerApplicantPrice(id)

				gameData['minBrokerApplicant' + id] += 1
			}
		}
		else if(type == 'max100')
		{
			brokerApplicantPrice(id)
			gameData['maxBrokerApplicant' + id] -= 100
		}
		else if(type == 'min100')
		{
			if (gameData['maxBrokerApplicant' + id] > gameData['minBrokerApplicant' + id]) {
				
				brokerApplicantPrice(id)

				gameData['minBrokerApplicant' + id] -= 100
			}
		}
		else
		{
			if (gameData['minBrokerApplicant' + id] > 1) {
				
				brokerApplicantPrice(id)
				
				gameData['minBrokerApplicant' + id] -= 1
			}
		}
	}
    updateValues()
}

function brokerApplicantPrice(id){
	gameData.alphaCoins -= gameData['brokerApplicant'+ id + 'Price']
	gameData['brokerApplicant'+ id + 'Price'] += 5
}

function buyAdvertisingManager(){
    if (gameData.alphaCoins >= 10) {
        gameData.alphaCoins -= 10
        gameData.advertisingManagerBroker = 1
    }
    updateValues()
}

function increaseCreditScore() {
    if (gameData.megaCoins >= 2) {
        gameData.megaCoins -= 2
        gameData.megaCoinsInBankMax += 30
    }
    updateValues()
}

function increaseCreditScore2() {
    if (gameData.megaCoins >= 5) {
        gameData.megaCoins -= 5
        gameData.megaCoinsInBankMax += 150
        gameData.creditScore2 = 1

    }
    updateValues()
}

function increaseCreditScore3() {
    if (gameData.megaCoins >= 50) {
        gameData.megaCoins -= 50
        gameData.megaCoinsInBankMax += 800
        gameData.creditScore3 = 1

    }
    updateValues()
}

function buyABiggerWallet() {
    if (gameData.megaCoins >= 50) {
        gameData.megaCoins -= 50
        gameData.coinsMax += 1e6

    }
    updateValues()
}

function buyMegaCoins() {
    if (gameData.coins >= 10000 && gameData.megaCoinsInBank < gameData.megaCoinsInBankMax && gameData.buyMegaCoinsTimes < gameData.buyMegaCoinsTimesMax) {
        gameData.coins -= 10000
        gameData.megaCoinsInBank += 5
		gameData.buyMegaCoinsTimes += 1
    }
    updateValues()
}

function buyMegaCoinsWithAlphaCoins() {
    if (gameData.alphaCoins >= 10 && gameData.megaCoinsInBank < gameData.megaCoinsInBankMax) {
        gameData.alphaCoins -= 10
        gameData.megaCoinsInBank += 1
    }
    updateValues()
}


function buyBetterTraining() {
    if (gameData.megaCoins >= gameData.betterTraining) {
        gameData.megaCoins -= gameData.betterTraining
        gameData.betterTraining += 1
    }
    updateValues()
}

function upgradeMoreStorage() {
    if (gameData.megaCoins >= upgradeMoreStoragePrice) {
		
        gameData.megaCoins -= upgradeMoreStoragePrice

		gameData.juicersMax +=  500
		gameData.peelersMax +=  2500

		gameData.upgradeMoreStorage += 1


    }
    updateValues()
}

function travelToNextVillage() {
    if (window.prompt("你确定吗？如果你确定，请输入 'yes'") == "yes") {
		
		if (gameData.increaseJuicePricePermanance == 1) {
			saveBeforeWipe('juicePricePrice')
		    saveBeforeWipe('juicePriceCents')
		} 
		
		if (gameData.manuscripts > 0) {
			saveBeforeWipe('respectMilestone1000')
		} 
        saveBeforeWipe('manuscripts')

		
        saveBeforeWipe('increaseJuicePricePermanance')

		
        megaCoinsNow = gameData.megaCoinsInBank
		
		saveBeforeWipe('versionNumber')
		saveBeforeWipe('timePlayed')	
		saveBeforeWipe('alphaCoins')
		saveBeforeWipe('nationalJuiceMarketing')
		saveBeforeWipe('creditScore2')
		saveBeforeWipe('creditScore3')
		saveBeforeWipe('coinsMax')
		saveBeforeWipe('respectMilestone10000')
        saveBeforeWipe('unlockBenevolence')
        saveBeforeWipe('nationalTradeCert')
        saveBeforeWipe('bigGloves')
        saveBeforeWipe('desktopMode')
        saveBeforeWipe('nutritionists')
        saveBeforeWipe('megaCoinsInBankMax')
        saveBeforeWipe('betterTraining')
        saveBeforeWipe('autosave')
        saveBeforeWipe('showBarPercent')
        saveBeforeWipe('hideCompletedSkills')
        saveBeforeWipe('hideMaxedPurchases')
        saveBeforeWipe('researchers')
        saveBeforeWipe('upgradeMoreStorage')


        Object.assign(gameData, gameDataBase)



		if (increaseJuicePricePermananceNow == 1) {
			saveAfterWipe('juicePricePrice')
			saveAfterWipe('juicePriceCents')
			saveAfterWipe('increaseJuicePricePermanance')
		} 
		
        saveAfterWipe('manuscripts')
		if (gameData.manuscripts > 0) {
			saveAfterWipe('respectMilestone1000')
		} 
		
		saveAfterWipe('versionNumber')	
		saveAfterWipe('timePlayed')	
	    saveAfterWipe('upgradeMoreStorage')
		saveAfterWipe('alphaCoins')
		saveAfterWipe('creditScore2')
		saveAfterWipe('creditScore3')
		saveAfterWipe('nationalJuiceMarketing')
		saveAfterWipe('coinsMax')		
		saveAfterWipe('respectMilestone10000')
        saveAfterWipe('unlockBenevolence')
        saveAfterWipe('nationalTradeCert')
        saveAfterWipe('researchers')
        saveAfterWipe('megaCoins')
        saveAfterWipe('bigGloves')
        saveAfterWipe('desktopMode')
        saveAfterWipe('nutritionists')
        saveAfterWipe('megaCoinsInBankMax')
        saveAfterWipe('betterTraining')
        saveAfterWipe('autosave')
        saveAfterWipe('showBarPercent')
        saveAfterWipe('hideCompletedSkills')
        saveAfterWipe('hideMaxedPurchases')


		gameData.juicersMax = 100 + gameData.upgradeMoreStorage * 500
		gameData.peelersMax = 500 + gameData.upgradeMoreStorage * 2500


        gameData.villageNumber = 2
        saveGame()


        location.reload();
    }
}

function stopActions(){
	gameData.currentTask = 'none'
	gameData.currentTask2 = 'none'
}

function lookAround() {

    gameData.lookAroundNumber += 1

    if (gameData.lookAround < 1) {
        update("newInfo", "Maybe I should keep looking around...")

    }

    if (gameData.lookAround == 0) {
        if (gameData.lookAroundNumber == 10 || gameData.difficulty >= 1) {
            update("newInfo", "You see a nearby market.")
            gameData.lookAround = 1

        }
    } else if (gameData.lookAround == 1) {
        if (gameData.lookAroundNumber == 20 || gameData.difficulty >= 1) {
            update("newInfo", "You find a merchant willing to buy limes.")
            gameData.lookAround = 2

        }
    } else if (gameData.lookAround == 2) {
        if (gameData.lookAroundNumber == 30 || gameData.difficulty >= 1) {
            update("newInfo", "You find a merchant selling various items.")
            gameData.lookAround = 3
        }
    }
    updateValues()
}

function buyAMap() {
    if (gameData.coins >= 20 && gameData.maps == 0) {
        gameData.coins -= 20
        gameData.maps = 1
    } else if (gameData.coins >= 200 && gameData.maps == 1) {
        gameData.coins -= 200
        gameData.maps = 2
    } else if (gameData.coins >= 2000 && gameData.maps == 2) {
        gameData.coins -= 2000
        gameData.maps = 3
    } else if (gameData.coins >= 2e5 && gameData.maps == 3) {
        gameData.coins -= 2e5
        gameData.maps = 4
    } else if (gameData.coins >= 2e5 && gameData.maps == 4) {
        gameData.coins -= 2e5
        gameData.maps = 5
    }
    updateValues()
}


function storageJuicersUnlock() {
	
	if(gameData.confirmStorage)
	{
		if (window.prompt("你确定吗？如果你确定，请输入 'yes'") == "yes")
		{	
			if (gameData.coins >= 100) {
				gameData.coins -= 100
				gameData.storageJuicersUnlock = 1
				gameData.juicersMax *= 5
			}
		}
	}
	else
	{
		if (gameData.coins >= 100) {
			gameData.coins -= 100
			gameData.storageJuicersUnlock = 1
			gameData.juicersMax *= 5
		}
	}
    updateValues()
}

function storagePeelersUnlock() {
	if(gameData.confirmStorage)
	{
		if (window.prompt("你确定吗？如果你确定，请输入 'yes'") == "yes")
		{	
			if (gameData.coins >= 100) {
				gameData.coins -= 100
				gameData.storagePeelersUnlock = 1
				gameData.peelersMax *= 5
			}
		}
	}
	else
	{
		if (gameData.coins >= 100) {
			gameData.coins -= 100
			gameData.storagePeelersUnlock = 1
			gameData.peelersMax *= 5
		}
	}
    updateValues()
}

function changeZoomSize() {

	if (gameData.changeZoomSize == 150)
	{
		gameData.changeZoomSize = 100
		document.body.style.zoom=1.0;
	}
	else
	{
		gameData.changeZoomSize += 10
		document.body.style.zoom= gameData.changeZoomSize / 100;
	}
	
    updateValues()
}

function juiceLimesToggle() {
    gameData.limeTypeToJuice = 0
    updateValues()
}

function benevolenceToggle(){
	if (gameData.diseaseControlFinished)
		switchValue('benevolenceToggle')
}

function juicePeeledLimesToggle() {
    gameData.limeTypeToJuice = 1
    updateValues()
}


function increaseJuicePrice() {
	if(gameData.increaseJuicePricex10){
		for (i = 0; i < 10; i++) {
			if (gameData.coins >= gameData.juicePricePrice) {
				gameData.coins -= gameData.juicePricePrice
				gameData.juicePriceCents += 1
				gameData.juicePricePrice = gameData.juicePriceCents + 1

			}
		}
	}
	else
	{
		if (gameData.coins >= gameData.juicePricePrice) {
			gameData.coins -= gameData.juicePricePrice



			gameData.juicePriceCents += 1
		}
	}
    updateValues()
}


function decreaseJuiceSold() {
    if (gameData.juiceBulkAmountToggle >= 1) {
        if (gameData.juiceBulkAmountToggle > 100) {
            gameData.juiceBulkAmountToggle -= 10
        } else {
            gameData.juiceBulkAmountToggle -= 1
        }
    }

    updateValues()
}

function increaseJuiceSold() {
    if (gameData.juiceBulkAmountToggle < 100) {
        gameData.juiceBulkAmountToggle += 1
    } else if (gameData.juiceBulkAmountToggle < 500 && gameData.deliveryTypeToggle == 2 && gameData.fasterTransport > 0) {
        gameData.juiceBulkAmountToggle += 10
    }
    updateValues()
}

function moveBasket() {
    var elem = document.getElementById("basketBar");
    elem.style.height = gameData.basketBar + "%";
    elem.innerHTML = Math.floor(gameData.basketBar) + "%";
}

function moveAutoCollecting() {

    var elem = document.getElementById("autoCollectingBar");
    var x = Math.floor(gameData.autoCollectingBar / (gameData.nourishment + 1))

    elem.style.width = x + "%";
    elem.innerHTML = x + "%";
}


function buyABasket() {

    gameData.basketBar -= gameData.basketBar / (gameData.baskets + 1)
    bulkableBuyMax('baskets', 2)
}