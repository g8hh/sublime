function updateAfterLoad() {
	secondsOffline = Math.floor((Date.now() - gameData.lastSaveTime) / 1000)
	
	if (gameData.basketScarecrow) {
		if (gameData.basketBar + Math.floor(secondsOffline / 3) < 100)
			gameData.basketBar += Math.floor(secondsOffline / 3)
		else
			gameData.basketBar = 100
	}
	if (gameData.surveillanceCamera && secondsOffline > 60 && gameData.employeeWorking > 0) {
		for (i = 0; i < Math.floor(secondsOffline / 60) && gameData.employeeWorking > 0; i++) {
			gameData.employeeWorking -= 1
			gameData.limes += gameData.employeeCurrentSpeed
		}
		gameData.workingBar = 0
	}

	for (let i = 0; i < mainSkills.length; i++) {
		x = mainSkills[i]
		
		if (gameData[x + 'Bar'] < 100 && gameData[x + 'Bar'] != 0)
			runSkill(x)
		
		if (gameData[mainSkills[i] + 'SkillLevel'] > gameData[mainSkills[i] + 'SkillLevelMax'])
			gameData[mainSkills[i] + 'SkillLevel'] = gameData[mainSkills[i] + 'SkillLevelMax']
	}

	restartBar('learnANewSkill')
	restartBar('juicer')
	restartBar('peeler')
	restartBar('advertise')
	restartBar('eat')
	restartBar('teach')

	restartBar('coinsToAlpha')
	restartBar('convertCoinsNow')
	restartBar('alphaToBeta')
	restartBar('findPieCustomers')
	restartBar('bakePie')
	restartBar('harvestRice')
	restartBar('delivery')

	
	function restartBar(x) {
		if (gameData[x + 'Bar'] > 0)
			window[x + 'Bar']()
	}

	if (gameData.bellowsBar > 0)
		bellowsBar()

	updateBar('delivery')
	updateBar('bakePie')
	moveWell()

	if (gameData.workingBar <= 100 && (gameData.workingBar != 0 || gameData.employeeWorking > 0))
		workingBar()

	if (gameData.autoCollectingBar !== 0)
		autoCollectingBar()
}


function updateValues() {
	
	startCurrentTask(gameData.currentTask)	
	startCurrentTask(gameData.currentTask2)	
	
	if(gameData.currentSkill !== 'none')
		barStartGranularSkillBasic(gameData.currentSkill, false)
	
	addAesthetic()
	fixOverMaxedVariables()

	gameData.juicePricePrice = gameData.juicePriceCents + 1
	gameData.nourishmentPrice = Math.pow(10, gameData.nourishment);

	if (gameData.showBarPercent) {
		theColor = "#222222"
		update('barPercentButton', 'Bar Percent Shown')
	}
	else {
		theColor = 'rgba(0, 0, 0, 0)'
		update('barPercentButton', 'Bar Percent Hidden')
	}
	
	barTypes = ['skillBar', 'verticalBar', 'skillBarColored', 'smallContainerBar']
	
	for (j = 0; j < barTypes.length; j++) {
		var x = document.getElementsByClassName(barTypes[j])
		for (i = 0; i < x.length; i++) {
			x[i].style.color = theColor
		}
	}

	gameData.limesInBaskets = Math.floor(gameData.baskets * (gameData.basketBar / 4))

	for (let i = 0; i < mainVariables.length; i++) {
		id = mainVariables[i]
		elem = "textFor" + upperFirstChar(id)
		valRaw = gameData[id]

		if (valRaw > 1e9)
			val = valRaw.toExponential(3)
		else
			val = valRaw.toLocaleString()

		if ((gameData[id + 'UnlockedVariable'] && gameData[id + 'ShowVariable']) || id == 'limes') {
			show(elem + 'Div')
			show(elem + 'Br')
			show(elem + 'P')
			show(elem)
		} else {
			hide(elem + 'Div')
			hide(elem + 'Br')
			hide(elem + 'P')
			hide(elem)
		}
		
		update(elem, val)
	}
	
	
	if (gameData.coins > 0) {
		gameData.showAchievements = 1
	}

	if (gameData.showAchievements) {
		show('achievementsButton', 'inline')
	}

	for (let i = 1; i < mainVariables.length; i++) {
		if (gameData[mainVariables[i]] > 0)
			gameData[mainVariables[i] + 'UnlockedVariable'] = true

		if (gameData[mainVariables[i] + 'UnlockedVariable'])
			show('currencyDisplay(' + i + ')', 'inline')
		else
			hide('currencyDisplay(' + i + ')')
	}
	
	updateScience()

	if (gameData.nationalJuiceMarketing) {
		hide('juiceMarketing')
		show('upgradeJuiceMarketing')
	} else {
		hide('upgradeJuiceMarketing')
		show('juiceMarketing')
	}
	
	updateObj = [
		 'textForMegaCoinsInBank'            , gameData.megaCoinsInBank.toLocaleString() + ' / ' + gameData.megaCoinsInBankMax.toLocaleString() + ' Mega Coins In Bank'
		,'textForRespect'                    , gameData.respect.toLocaleString() + ' Respect'
		,'textForTimePlayed'                 , 'Total Time Played: ' + gameData.timePlayed.toLocaleString() + ' Seconds'
		,'textForLakes'                      , gameData.limeDiseaseLakes.toLocaleString() + ' Lakes'
		,'currentSpeedEmployee'              , 'Current speed: ' + gameData.employeeCurrentSpeed.toLocaleString() + ' limes per minute.'
		,'speedEmployee'                     , 'Speed: ' + gameData.employeeSpeed.toLocaleString() + '% Of What I&#39m Taught.'
		,'textForJuicePricePrice'            , 'Price: ' + (gameData.juicePricePrice + gameData.increaseJuicePricex10 * (gameData.juicePricePrice * 9 + 45)).toLocaleString() + ' Coins'
		,'textForNourishmentPrice'           , 'You Need: ' + gameData.nourishmentPrice.toLocaleString() + ' Limes'
		,'juicersAmount'                     , gameData.juicers.toLocaleString() + ' / ' + gameData.juicersMax.toLocaleString() + ' Juicers'
		,'peelersAmount'                     , gameData.peelers.toLocaleString() + ' / ' + gameData.peelersMax.toLocaleString() + ' Peelers'
		,'basketsAmount'                     , gameData.baskets.toLocaleString() + ' / ' + gameData.basketsMax.toLocaleString() + ' Baskets'
		,'maxBaskets'                        , gameData.basketsMax.toLocaleString() + ' baskets fit under the current tree.'
		,'buyMegaCoinsTimes'                 , 'Transfer times: ' + gameData.buyMegaCoinsTimes + ' / ' + gameData.buyMegaCoinsTimesMax
		,'textForAutomaticallyCollectsLimes' , 'Automatically collects limes at ' + (gameData.shoes + 1) + '/s'
		,'textForBetterTraining'             , 'Current maximum: ' + (gameData.betterTraining + 10).toLocaleString() + '00%'
		,'textForCoinsMax'                   , 'Current maximum: ' + gameData.coinsMax.toLocaleString() + ' Coins'
		,'textForCurrentEmployees'           , 'Current Employees: ' + gameData.employees.toLocaleString() + ' / ' + gameData.maxEmployees.toLocaleString()
		,'numberOfCivilians'                 , 'Number Of Civilians: ' + gameData.civiliansTotal.toLocaleString()
		,'betterTrainingPrice'               , 'Price: ' + gameData.betterTraining.toLocaleString() + ' Mega Coins'
		,'sellYourJuiceAmount'               , 'You Will Deliver ' + gameData.juiceBulkAmountToggle.toLocaleString() + ' / ' + gameData.juiceBulkAmountMax.toLocaleString() + ' Juice'
		,'sellYourJuiceReward'               , 'You Will Get ' + ((gameData.nationalJuiceMarketing + 1) * Math.floor(gameData.juiceBulkAmountToggle * (1 + (gameData.juicePriceCents / 100)))).toLocaleString() + ' Coins'
		,'sellYourJuicePrice'                , 'You Need ' + gameData.deliveryPrice.toLocaleString() + ' Coins For Delivery'
		,'upgradeMoreStoragePrice'           , 'Price: ' + upgradeMoreStoragePrice.toLocaleString() + ' Mega Coins'
		,'betaCoinExhangeRate'               , 'Exchange Rate: ' + gameData.betaCoinsExchangeRate.toLocaleString() + ' Alpha Coins -> 1 Beta Coin'
		,'betaCoinTotalPrice'                , 'Total Price: ' + (gameData.betaCoinsExchangeRate * (gameData.textForA2BBrokerAmountToggle * (gameData.basicA2BBrokerAmount - 1) + 1)).toLocaleString() + ' Alpha Coins'
 		,'piePrice'                          , 'Current Price: ' + gameData.piePrice.toLocaleString() + ' Pie Coins'
 
	]
	
	for (i = 0; i < updateObj.length / 2; i++) {
		update(updateObj[i * 2], updateObj[i * 2 + 1])
	}
	
	checkShowOrHideObj = [
	 'juicers'               , 'inventoryButton'
	,'employees'             , 'companyButton'
	,'baskets'               , 'forestButton'
	,'hasGottenJuice'        , 'juiceMarket'
	,'upgradeMoreStorage'    , 'upgradeMoreLand'
	,'betterTraining'        , 'upgradeBetterTraining'
	,'bitterSpeedSkillLevel' , 'eatGoldenLimeProgress'
	,'bitterSpeedSkillLevel' , 'eatGoldenLime'
	]
	
	for (i = 0; i < checkShowOrHideObj.length / 2; i++) {
		txt = checkShowOrHideObj[i * 2 + 1]
		if (gameData[checkShowOrHideObj[i * 2]] >= 1)
			show(txt)
		else
			hide(txt)	
	}

	upgradeMoreStoragePrice = Math.pow(2, gameData.upgradeMoreStorage) * 50


	if (gameData.forestTreeType == 1)
		update('limesInBaskets', gameData.limesInBaskets.toLocaleString() + ' Limes')
	else
		update('limesInBaskets', gameData.limesInBaskets.toLocaleString() + ' Limes + ' + gameData.goldenLimesInBaskets.toLocaleString() + ' Golden Limes')


	updateBrokers()


	if (gameData.villageNumber > 1 || gameData.betterTraining > 0 || gameData.increaseJuicePricePermanance == 1)
		show('megaCoinUpgradesButton')
	else
		hide('megaCoinUpgradesButton')




	if (gameData.employeeWorking > 0)
		update('workingEmployee', 'Working time left: ' + gameData.employeeWorking.toLocaleString() + ' / 10 minutes.')
	else
		update('workingEmployee', 'Employee is idle.')
	

	updateHiringArea()
	
	checkShow(!gameData.forestWell, 'buyAWell')
	
	checkShow(gameData.respectMilestone10000 && !gameData.rottenActualWisdom, 'rottenActualWisdom')



	if (gameData.respectMilestone10000) {
		show('upgradeMoreStorage')
		if (!gameData.bachelorsDegreeFinance)
			show('earnBachelorFinance')
		else
			hide('earnBachelorFinance')
				
		if (!gameData.creditScore2)
			show('increaseCreditScore2')
	} else {
		hide('upgradeMoreStorage')
		hide('earnBachelorFinance')
		hide('increaseCreditScore2')
		hide('buyABiggerWallet')
	}
	

	checkShow(gameData.hasSoldPie && !gameData.trainTransport, 'trainTransportDiv')


	updateBar('teach')
	updateBar('working')
	moveBasket()
	moveAutoCollecting()

	for (let i = 0; i < mainSkills.length; i++) {
		update(mainSkills[i] + 'SkillLevel', gameData[mainSkills[i] + 'SkillLevel'] + ' / ' + gameData[mainSkills[i] + 'SkillLevelMax'])
	}

	update('rottenWisdom', 100 * gameData.rottenWisdomSkillLevel / gameData.rottenWisdomSkillLevelMax + '% Chance')
	update('keenEye', gameData.keenEyeSkillLevel * 5 + '% Chance')
	update('limebidextrous', gameData.limebidextrous + '% Chance')
	update('intelligence', Math.floor(((gameData.intelligenceSkillLevel * 2) / gameData.intelligenceSkillLevelMax) * 100) + '% Faster')
	update('knifebidextrous', gameData.knifebidextrous * 2.5 + '% Chance')



	update('eat', gameData.eat + ' / 100')

	if (gameData.lookAround >= 1)
		divVisibility('navigateButtons', 'visible')

	if (gameData.limeTypeToJuice == 0)
		update('juicerInfo', gameData.limesPerJuice + ' Limes -> 1 Juice')
	else
		update('juicerInfo', gameData.peeledLimesPerJuice + ' Peeled Limes -> 1 Juice')


	if (gameData.deliveryTypeToggle == 2 && gameData.fasterTransport > 0)
		gameData.juiceBulkAmountMax = 500
	else if (gameData.deliveryTypeToggle == 3)
		gameData.juiceBulkAmountMax = 2000
	else
		gameData.juiceBulkAmountMax = 100

	if (gameData.pinUnlock == 1) {
		hide('pinUnlockDiv')
		var x = document.getElementsByClassName('pinButton');
		for (i = 0; i < x.length; i++) {
			x[i].style.display = 'inline-block';
		}

	} else
		show('pinUnlockDiv')




	if (gameData.bigGloves) {
		hide('buyBigGloves')
		show('upgradeBigGloves')
		gameData.limesPerClick = 2
	} else {
		show('buyBigGloves')
		hide('upgradeBigGloves')
		gameData.limesPerClick = 1
	}


	if (gameData.coinsMax > 1e6)
		show('upgradeWallet')
	else
		hide('upgradeWallet')

	if (gameData.forestWell) {
		document.getElementById('forest').style.width = '760px'
		show('forestWellDiv', 'inline')
	}
	else {
		document.getElementById('forest').style.width = '380px'
		hide('forestWellDiv')
	}

	checkRespectMilestone(10, 'lime', 'Automatically start tasks', 'autoStartTaskButton')
	checkRespectMilestone(25, 'lime', 'Automatically start simulation', 'autoStartSimulationButton')
	checkRespectMilestone(50, 'lime', 'Allow entrance to the Special Shopping District')
	checkRespectMilestone(100, 'lime', 'Automatically check simulation', 'autoCheckSimulationButton')
	checkRespectMilestone(500, 'lime', 'Automatically situate a civilian', 'autoPlaceACivilianDiv')
	checkRespectMilestone(1000, 'lime', 'Unlock scientific research', 'scienceButton')
	checkRespectMilestone(10000, 'red', 'Unlock more mega coin upgrades')

	function checkRespectMilestone(number, color, text, id) {
		milestone = number + 'RespectMilestone'
		
		if (gameData.respect >= number)
			gameData['respectMilestone' + number] = 1
		if (gameData['respectMilestone' + number]) {
			if (id !== undefined) {
				if (number == 500)
					show(id)
				else
					show(id, 'inline')
			}
			
			elem = ''
			if(number == 10000)
				elem = '<span class="tooltiptext">Yes, you have this unlocked. The red means that it is permanent.</span>'
			update(number + 'RespectMilestone', number.toLocaleString() + ' Respect: ' + text + elem)
			
			
			if (color == 'lime')
				colorChanger(milestone, limesRelatedAccent)
			if (color == 'red')
				colorChanger(milestone, '#FF999A')
		} else {
			if (id !== undefined)
				hide(id)
			colorChanger(milestone, grayAccentLight)
		}
	}

	if (gameData.respectMilestone50)
		show('patrician')
	else
		hide('patrician')

	if (gameData.increaseJuicePricePermanance < 1) {
		show('increaseJuicePricePermanance', 'inline')
		hide('upgradeJuicePricePermanance')
	} else {
		hide('increaseJuicePricePermanance')
		show('upgradeJuicePricePermanance')
	}

	if (gameData.ambidextrousSkillLevel == gameData.ambidextrousSkillLevelMax)
		show('stopActionsButton', 'inline')
	else
		hide('stopActionsButton')


	if (gameData.manuscripts) {
		hide('buyManuscriptsDiv')
		show('upgradeManuscripts')
	} else {
		hide('upgradeManuscripts')
		show('buyManuscriptsDiv')
	}

	if (gameData.baskets > 0 && !gameData.basketScarecrow)
		show('offlineBasket')
	else
		hide('offlineBasket')

	if (gameData.creditScore2) {
		hide('increaseCreditScore2')
		if (!gameData.creditScore3)
			show('increaseCreditScore3')
		else
			hide('increaseCreditScore3')
	} else {
		show('increaseCreditScore2', 'inline')
		hide('increaseCreditScore3')
	}





	if (!gameData.multitasking && gameData.learnANewSkill > 0)
		show('buySkillToggler')
	else
		hide('buySkillToggler')


	if (gameData.pieBucket == 1 && gameData.pieFlourBucket == 1)
		show('bucketThinSteelPlating')
	else
		hide('bucketThinSteelPlating')

	update('bucketHeight', 'Current heights: ' + (gameData.bucketThinSteelPlating * 5 + 20).toLocaleString() + ' Units')

	if (gameData.diseaseControlFinished == 1) {
		hide('diseaseControlStart')
		show('startDiseaseTask')
	} else {
		show('diseaseControlStart')
		hide('startDiseaseTask')

	}

	if (gameData.megaCoinsInBankMax > 20) {
		hide('increaseCreditScore')
		show('upgradeCreditScore')
	} else {
		show('increaseCreditScore')
		hide('upgradeCreditScore')
	}

	if (gameData.nutritionists > 0) {
		hide('hireANutritionist')
		show('upgradeNutritionist')
	} else {
		show('hireANutritionist')
		hide('upgradeNutritionist')
	}

	if (gameData.fasterTransport == 0)
		update('deliveryToggleStandardButton', 'Standard Delivery')
	else
		update('deliveryToggleStandardButton', 'Hyper Delivery')

	if (gameData.shiftClickOption) {
		update('shiftClickOption', 'Don&#39t Toggle: Shift Click')
		hide('toggleActionsButton')
	} else {
		update('shiftClickOption', 'Don&#39t Toggle: Button Option')
		if(gameData.learnANewSkill > -2)
			show('toggleActionsButton', 'inline')
	}

	if (gameData.deliveryManager == 0) {
		hide('sellMaxJuiceButton')
		show('decreaseJuiceSoldButton', 'inline')
		show('increaseJuiceSoldButton', 'inline')
	} else {
		show('sellMaxJuiceButton', 'inline')
		hide('decreaseJuiceSoldButton')
		hide('increaseJuiceSoldButton')
	}

	if (gameData.deliveryManager == 0 && gameData.maps >= 3)
		show('buyADeliveryManager')
	else
		hide('buyADeliveryManager')
	
	if (gameData.maps > 0) {
		show('marketMainButtonsDiv', 'inline')
		show('marketStore', 'inline')
		document.getElementById('marketMainButtonsDiv').style.width = '360px'
	}

	if (gameData.maps > 1) {
		show('hiringAreaButton', 'inline')
		show('marketStore', 'inline')
	}
	
	if (gameData.maps == 0)
		show('buyAMapDiv1')
	else
		hide('buyAMapDiv1')
	
	if (gameData.maps == 1)
		show('buyAMapDiv2')
	else
		hide('buyAMapDiv2')

	if (gameData.maps == 2)
		show('buyAMapDiv3')
	else
		hide('buyAMapDiv3')
	
	if (gameData.maps == 3)
		show('buyAMapDiv4')
	else
		hide('buyAMapDiv4')
	
	if (gameData.maps == 4)
		show('buyAMapDiv5')
	else
		hide('buyAMapDiv5')
	
	
	if (gameData.maps > 3) {
		show('tasksButton')
	}

	if (gameData.maps > 2 || gameData.villageNumber > 1)
		show('travelButton', 'inline')
	
	
	if (gameData.autoCurrencyConversionBuy)
		hide('autoCurrencyConversion')
	else if (gameData.maps == 4)
		show('autoCurrencyConversion')
	
	if (gameData.maps > 2) {
		show('travellingArea')
		show('increaseJuicePrice')
		if (gameData.fasterTransport == 0)
			show('fasterTransportDiv')
		else
			hide('fasterTransportDiv')
	} else {
		hide('travellingArea')
		hide('fasterTransportDiv')
	}

	if (gameData.maps > 3) {
		update('specialAchievement2', 'Buy a Giant Map after only sending one delivery in that town')

		if (gameData.respectBillboard == 0)
			show('respectBillboard', 'inline')
		else
			hide('respectBillboard')
	}
	
	if (gameData.maps > 4) {
		show('earnBetaCoins')
		show('buyPie')
		if (gameData.basicAlphaToBetaBroker == 0) {
			show('basicAlphaToBetaBroker')
			hide('basicAlphaToBetaBrokerRule')
		} else {
			hide('basicAlphaToBetaBroker')
			show('basicAlphaToBetaBrokerRule')
		}
	}

	if (gameData.maps >= 2 && gameData.bulkBuyUnlock == 0)
		show('bulkBuyUnlockDiv')
	else if (gameData.maps < 2 && gameData.bulkBuyUnlock == 1)
		hide('bulkBuyUnlockDiv')
	else if (gameData.maps >= 2 && gameData.bulkBuyUnlock == 1) {
		hide('bulkBuyUnlockDiv')
		if (gameData.bulkBuyUnlock2)
			hide('bulkBuyUnlock2Div')
		else
			show('bulkBuyUnlock2Div')
	} 
	else if (gameData.bulkBuyUnlock == 0 && gameData.maps < 2)
		hide('bulkBuyUnlockDiv')




	if (gameData.maps >= 2 && gameData.storageUnlock == 0) {
		show('storageUnlockDiv')
		hide('storageDiv')
	} 
	else if (gameData.maps < 2) {
		hide('storageUnlockDiv')
		hide('storageDiv')
	} 
	else if (gameData.maps >= 2 && gameData.storageUnlock == 1) {
		show('storageDiv')
		hide('storageUnlockDiv')

		if (gameData.storageJuicersUnlock == 1 && gameData.storagePeelersUnlock == 1)
			hide('storageDiv')
	}
	
	if (gameData.fork == 0 && gameData.learnANewSkill > -2)
		show('buyAForkDiv')
	else
		hide('buyAForkDiv')


	if (gameData.shoes == 0 && gameData.learnANewSkill > -1)
		show('buyShoesDiv')
	else
		hide('buyShoesDiv')

	if (gameData.hideCompletedSkills == 0)
		update('hideCompletedSkillsButton', 'Completed Skills Shown')
	else
		update('hideCompletedSkillsButton', 'Completed Skills Hidden')

	if (gameData.hideMaxedPurchases == 0)
		update('hideMaxedPurchasesButton', 'Maxed Purchases Shown')
	else
		update('hideMaxedPurchasesButton', 'Maxed Purchases Hidden')



	if (gameData.hasAdvertised && !gameData.surveillanceCamera)
		show('offlineEmployee')
	else
		hide('offlineEmployee')


	if (gameData.respectMilestone10000)
		update('specialAchievement1', 'Get a 5x multplier with Buy More Land purchased')

	if (gameData.advertisingLevel1 == 0) {
		hide('advertisingMethods')
		if (gameData.hasAdvertised == 1)
			show('researchBetterAdvertising')
		else
			hide('researchBetterAdvertising')
	} else {
		show('advertisingMethods')
		hide('researchBetterAdvertising')
	}


	if (gameData.bulkBuyUnlock == 0) {
		hide('peelersBulkButton')
		hide('basketsBulkButton')
		hide('juicersBulkButton')
	} else {
		show('peelersBulkButton', 'inline')
		show('basketsBulkButton', 'inline')
		show('juicersBulkButton', 'inline')
	}

	if (gameData.bulkBuyUnlock2) {
		update('peelersBulkButton', 'x100')
		update('basketsBulkButton', 'x100')
		update('juicersBulkButton', 'x100')
	}
	
	
	checkShow(!gameData.advertisingLevel2, 'advertisingLeaflets')
	checkShow(!gameData.advertisingLevel3, 'advertisingBillboard')
	checkShow(!gameData.storagePeelersUnlock, 'storagePeelersDiv')
	checkShow(!gameData.storageJuicersUnlock, 'storageJuicersDiv')
	checkShow(!gameData.changeResearchersBy10Unlock, 'changeResearchersBy10Unlock')
	checkShow(!gameData.forestTree2, 'buyANewTree')

	
	checkShow(gameData.forestTree2, 'treeTypeDiv')
	checkShow(gameData.changeResearchersBy10Unlock, 'upgradeChangeResearchersBy10')
	checkShow(gameData.rottenActualWisdom, 'upgradeRottenActualWisdomUnlock')


	updatePieStuff()


	if (gameData.lookAround >= 2)
		show('sellYourLimesDiv')

	if (gameData.lookAround >= 3) {
		if (gameData.hideMaxedPurchases == 1 && gameData.juicers == gameData.juicersMax)
			hide('buyAJuicerDiv')
		else
			show('buyAJuicerDiv')

		if (gameData.hideMaxedPurchases == 1 && gameData.baskets == gameData.basketsMax)
			hide('buyABasketDiv')
		else
			show('buyABasketDiv')
	}


	checkShow(!gameData.tomes, 'tomeDiv')


	for (i = 1; i <= 3; i++) {
		if (gameData.tomes == i)
			show('tomeDiv' + (i + 1))
		else
			hide('tomeDiv' + (i + 1))
	}

	if (gameData.tomes > 3)
		show('goldenBarDiv')

	if (gameData.autoCollectingBar == (gameData.nourishment + 1) * 100 || gameData.autoCollectingBar == 0)
		gameData.isAutoCollecting = 0
	else
		gameData.isAutoCollecting = 1

	if (gameData.villageNumber > 1)
		show('marketMainButtonsDiv', 'inline')

	if (gameData.peeledLimes >= 1) {
		show('textForPeeledLimes', 'inline')
		show('juiceLimesToggleButton', 'inline')
		show('juicePeeledLimesToggleButton', 'inline')
	}

	if (gameData.knife >= 1) {
		show('knifeDiv')

		if (gameData.hideMaxedPurchases == 1 && gameData.peelers == gameData.peelersMax)
			hide('buyAPeelerDiv')
		else if (gameData.knifebidextrousSkillLevel == gameData.knifebidextrousSkillLevelMax)
			show('buyAPeelerDiv')

		if (gameData.knifebidextrousSkillLevel == gameData.knifebidextrousSkillLevelMax && gameData.maps > 1)
			show('sharperPeelerDiv')
		else
			hide('sharperPeelerDiv')

		hide('buyKnifeDiv')
	} else {
		hide('buyAPeelerDiv')
		hide('sharperPeelerDiv')
	}


	checkShow(!gameData.sharperPeelers, 'sharperPeelerDiv')
	checkShow(!gameData.silkRobe, 'buyARobe')
	checkShow(!gameData.unlockDiseaseAreaSwamp, 'unlockDiseaseAreaSwamp')


	if (gameData.juicers >= 2)
		divVisibility('makeMaxJuiceButton', 'visible')

	if (gameData.peelers >= 2)
		show('peelerPeelMaxButton', 'inline')

	
	checkShow(!gameData.lightRobe, 'lightRobe')
	checkShow(!gameData.skillTrainer, 'skillTrainer')

	
	checkShow(gameData.peelers, 'peelerDiv')


	if (gameData.advertisingLevel2 && gameData.advertisingLevel3) {
		hide('researchBetterAdvertising')
		hide('advertisingBillboard')
		hide('advertisingLeaflets')
	}

	for (i = 1; i <= numberOfBasicAchievements; i++) {
		if (gameData.coins >= Math.pow(10, i))
			gameData['achievement' + i] = 1
	}

	for (i = 1; i <= numberOfSpecialAchievements; i++) {
		if (gameData['specialAchievement' + i])
			show('specialAchievement' + i)
	}

	if (gameData.learnANewSkill - 3 == gameData.tomes) {
		document.getElementById('learnANewSkillButton').style.backgroundColor = 'darkgray';
		gameData.learnANewSkillBar = 100;
	} else
		document.getElementById('learnANewSkillButton').style.backgroundColor = '#FFBB9A';

	if (gameData.learnANewSkill >= 0) {
		show('autoCollectingDiv')
		show('nourishment')
		show('skillInfoButton', 'inline')
	}

	if (gameData.learnANewSkill >= 5)
		show('motivateEmployeeButton')

	if (gameData.forestTreeType == 2)
		show('goldenLimesInfo')
	else
		hide('goldenLimesInfo')

	if (gameData.learnANewSkill >= -1) {
		show('eatFoodDiv')
	}

	for (let i = 0; i < mainSkills.length; i++) {
		if ((gameData.hideCompletedSkills && gameData[x + 'SkillLevel'] == gameData[x + 'SkillLevelMax']) || gameData.learnANewSkill < i)
			hide(mainSkills[i] + "Div")
		else
			show(mainSkills[i] + "Div")
	}
	

	
	if (gameData.endScreen == 0) {
		if (gameData.soulArea == 'start')
			show('sublimeMain')
	} else
		hide('sublimeMain')
	
	checkShow(gameData.endScreen, 'endScreen')

	update('endStats', 'Total Time Played: ' + gameData.timePlayed.toLocaleString() + ' Seconds')

	update('bucketThinSteelPlatingPrice', 'Price: ' + (gameData.bucketThinSteelPlating * 5 + 20).toLocaleString() + ' Pie Coins')

	if(gameData.trainTransport)
		show('deliveryToggleTrainButton', 'inline')
		
	if(gameData.pieCoinsInWell == 200)
		show('enterTheWell', 'inline')
	else
		hide('enterTheWell')

	if(gameData.forestWell)
		update('textForLimesDiv', '&#39Limes&#39')
	
	
	setTimeout(updateValues, 15)
}