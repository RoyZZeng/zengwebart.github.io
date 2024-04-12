// 定义一个变量来跟踪"W"键被按下的次数
let wKeyPressCountTextEffect = 0;

// 定义一个数组包含30个鼓励保护自然环境的句子
const encouragementPhrases = [
    "Let's nurture nature <br>for a better future",
    "Think green, live green",
    "Reduce, reuse, and recycle <br>for a healthier planet",
    "Every day is Earth Day; <br>treat it with care",
    "Plant a tree, plant <br>hope for tomorrow",
    "Conserve water; <br>every drop counts",
    "Embrace sustainable living; <br>it’s the best gift for our planet",
    "Protect wildlife; <br>they deserve the world too",
    "Keep our oceans blue, <br>our planet green, <br>and our animals safe",
    "Walk more, drive less; <br>cherish clean air",
    "Join hands to save lands",
    "Be a voice for the voiceless; <br>advocate for environmental protection",
    "Let's make our Earth a greener <br>place for generations to come",
    "Cherish the beauty of nature; <br>it’s a treasure trove of wonders",
    "Opt for eco-friendly products; <br>every choice matters",
    "Encourage others to join <br>the green movement; <br>unity is strength",
    "Keep our beaches clean; <br>oceans are not our waste bins",
    "Educate, enlighten, and inspire <br>others to act for the environment",
    "Make sustainability a lifestyle, <br>not just a duty",
    "Appreciate and protect biodiversity; <br>every species plays a role",
    "Embrace renewable energy; <br>the sun and wind are powerful allies",
    "Lead by example; <br>your actions inspire others",
    "Say no to plastic; <br>embrace alternatives",
    "Support conservation efforts; <br>every little helps",
    "Love nature as you love yourself; <br>we are one",
    "Foster a culture of <br>caring for our environment",
    "Engage in community clean-up days; <br>it’s rewarding",
    "Advocate for policies that <br>protect the environment",
    "Teach children the value of nature; <br>they are future guardians",
    "Celebrate the natural beauty <br>around you and work to preserve it",

    // 省略其他句子，确保总共有30个
];

// 监听键盘按下事件
document.addEventListener('keydown', function(event) {
    if (event.key === "W" || event.key === "w") {
        wKeyPressCountTextEffect++;
        // 当按键次数不超过30时，随机显示一句话
        if (wKeyPressCountTextEffect <= 30) {
            displayRandomPhrase();
        }
    }
});

// 显示随机句子的函数
function displayRandomPhrase() {
    const phraseIndex = Math.floor(Math.random() * encouragementPhrases.length);
    const phrase = encouragementPhrases[phraseIndex];

    // 创建一个新的p元素来显示句子
    const pElement = document.createElement('p');
    pElement.innerHTML = phrase; // 使用innerHTML来解释HTML标签
    pElement.style.position = 'absolute';
    pElement.style.color = 'white';
    pElement.style.left = `${Math.random() * 90}%`; // 随机位置
    pElement.style.top = `${Math.random() * 90}%`;
    pElement.style.fontFamily = "'Orbitron', sans-serif"; // 设置字体

    // 将新创建的p元素添加到canvasContainer中
    document.getElementById('canvasContainer').appendChild(pElement);
}

// 在你已有的变量和数组定义之后添加
const headerPhrases = [
    "This is 1",
    "Try pressing the W key multiple times",
    "This is 3",
    "That's right",
    "This is 5",
    "Keep going",
    "This is 7",
    "It needs more water",
    "This is 9",
    "The tree is growing",
    "This is 11",
    "Nice!!!",
    "This is 13",
    "Keep pressing W!",
    "This is 15",
    "Woooooooo",
    "This is 17",
    "Don't stop. Keep going.",
    "This is 19",
    "It needs more water",
    "This is 21",
    "It seems to have grown a little",
    "This is 23",
    "Very close. Continue!!!",
    "This is 25",
    "Keep pressing W until leaves grow",
    "This is 27",
    "WWWWWWWWWWWW, don't stop",
    "This is 29",
    "Until leaves are out, try clicking on the tree and pressing the G key"
]; 

document.addEventListener('keyup', function(event) {
    if (event.key === "W" || event.key === "w") {
        wKeyPressCountTextEffect++;
        // 确保索引从0开始，直接传入wKeyPressCountTextEffect
        if (wKeyPressCountTextEffect <= 30) {
            displayRandomPhrase();
            updateHeaderText(wKeyPressCountTextEffect); // 直接传入次数
        }
    }
});

function updateHeaderText(index) {
    // 索引调整为从0开始，因为数组是从0开始的
    index = index - 1; // 减1使得索引与数组同步
    console.log(index); // 现在应该打印出所有的索引，包括偶数和奇数
    if (index >= 0 && index < headerPhrases.length) {
        const newText = headerPhrases[index];
        document.getElementById('headerText').innerText = newText;
    }
}
