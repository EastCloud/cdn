


//有关随机密码的函数

const randomFunc = {
	lower: getRandomLower,
	upper: getRandomUpper,
	number: getRandomNumber,
	symbol: getRandomSymbol,
};
function getRandomLower() {
	return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
function getRandomUpper() {
	return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
function getRandomNumber() {
	return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
function getRandomSymbol() {
	const symbols = '~!@#$%^&*()_+{}":?><;.,';
	return symbols[Math.floor(Math.random() * symbols.length)];
}
function generatePassword(length, lower, upper, number, symbol) {
	let generatedPassword = "";
	const typesCount = lower + upper + number + symbol;
	const typesArr = [{ lower }, { upper }, { number }, { symbol }].filter(item => Object.values(item)[0]);
	if (typesCount === 0) {
		return "";
	}
	for (let i = 0; i < length; i++) {
		typesArr.forEach(type => {
			const funcName = Object.keys(type)[0];
			generatedPassword += randomFunc[funcName]();
		});
	}
	return generatedPassword.slice(0, length);
}
//数组乱序
function shuffle(arr) {
	var len = arr.length;
	for (var i = 0; i < len - 1; i++) {
		var index = parseInt(Math.random() * (len - i));
		var temp = arr[index];
		arr[index] = arr[len - i - 1];
		arr[len - i - 1] = temp;
	}
	return arr;
}
//删除重复
function removemore(arr) {
	var cardarr = [], hash = {};
	delarr = [];
	for (var i = 0, elem; (elem = arr[i]) != null; i++) {
		if (!hash[elem]) {
			cardarr.push(elem);
			hash[elem] = true;
		} else {
			delarr.push(elem);
		}
	}
	result = {'text':cardarr,'del':delarr}
	return result;
}