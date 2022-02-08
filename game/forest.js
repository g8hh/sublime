mainTabs.push (
	{
		id: 'forest',
		text: 'Forest',
		color1: 'BBBBBB',
		color2: '898989'
	},
)

Object.assign ( gameDataBase, {
	forestTree2: 0,
	forestTreeType: 1,
} )

function buyABasket() {
    gameData.basketBar -= gameData.basketBar / (gameData.baskets + 1)
    bulkableBuyMax('baskets', 2)
}

function throwPieCoinsWell() {
	if (gameData.pieCoinsInWell + gameData.pieCoins <= 200) {
		gameData.pieCoinsInWell += gameData.pieCoins
		gameData.pieCoins = 0
	}
	else {
		gameData.pieCoinsInWell = 200
		gameData.pieCoins -= (200 - gameData.pieCoinsInWell)
	}
}

function basket() {
    gameData.basketBar = 0
    gameData.limes += gameData.limesInBaskets
	gameData.goldenLimes += gameData.goldenLimesInBaskets
    gameData.limesInBaskets = 0
    gameData.goldenLimesInBaskets = 0
}

loopNumberBasket = 0

function mainGameLoopForest () {
	loopNumberBasket += 1	
	
	if (gameData.basketBar < 100 && loopNumberBasket >= 24) {
        gameData.basketBar += 0.2;
		loopNumberBasket = 0
		
		if (beckyRandom(100) == 1 && gameData.forestTreeType == 2)
			gameData.goldenLimesInBaskets += 1
    }
}

function onLoadForest () {
	if (gameData.basketScarecrow) {
		if (gameData.basketBar + Math.floor(secondsOffline / 3) < 100)
			gameData.basketBar += Math.floor(secondsOffline / 3)
		else
			gameData.basketBar = 100
	}
}

function updateValuesForest () {
	basicToggle("basketInfo")
	gameData.limesInBaskets = Math.floor(gameData.baskets * (gameData.basketBar / 4))
	update('basketsAmount', gameData.baskets.toLocaleString() + ' / ' + gameData.basketsMax.toLocaleString() + ' Baskets')
	update('maxBaskets', gameData.basketsMax.toLocaleString() + ' baskets fit under the current tree.')
	
	if (gameData.forestTreeType == 1)
		update('limesInBaskets', gameData.limesInBaskets.toLocaleString() + ' Limes')
	else
		update('limesInBaskets', gameData.limesInBaskets.toLocaleString() + ' Limes + ' + gameData.goldenLimesInBaskets.toLocaleString() + ' Golden Limes')

    var elem = document.getElementById("basketBar")
    elem.style.height = gameData.basketBar + "%"
    elem.innerHTML = Math.floor(gameData.basketBar) + "%"

	ifMaxDarkGray("basket")

	checkShow(gameData.baskets && !gameData.basketScarecrow, 'offlineBasket')
	checkShow(gameData.pieCoinsInWell == 200, 'enterTheWell', 'inline')
	checkShow(gameData.forestWell, 'forestWellDiv', 'inline')

	
	if (gameData.forestWell)
		document.getElementById('forest').style.width = '760px'
	else
		document.getElementById('forest').style.width = '380px'
	
	checkShow(!gameData.forestTree2, 'buyANewTree')
	checkShow(gameData.forestTree2, 'treeTypeDiv')
	basicToggle("basketsBulk")
	
	if (gameData.forestTreeType == 1) {
		colorChanger('forestTree1', "#4DFE89")
		colorChanger('forestTree2', "gray")
	} else {
		colorChanger('forestTree2', "#4DFE89")
		colorChanger('forestTree1', "gray")
	}
	
	checkShow(gameData.baskets, 'forestButton')
	
	checkShow(gameData.forestTreeType == 2, 'goldenLimesInfo')


    var elem = document.getElementById("wellBar")
    elem.style.height = (gameData.pieCoinsInWell / 2) + "%"
    elem.innerHTML = Math.floor(gameData.pieCoinsInWell / 2) + "%"
}

