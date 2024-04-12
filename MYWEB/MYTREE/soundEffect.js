// 定义一个变量来跟踪"W"键被按下的次数
let wKeyPressCount = 0;
// 定义一个变量来标识是否可以触发G键的功能
let canTriggerG = false;

// 增加一个变量来标记是否允许触发treeshake.wav的播放
let canTriggerTreeShake = false;

document.addEventListener('keydown', function(event) {
    // 检查按下的键是否是"W"或"w"
    if (event.key === "W" || event.key === "w") {
        wKeyPressCount++; // 增加"W"键按下的计数
        console.log(`W键已按下${wKeyPressCount}次。`);

        // 在"W"键按下次数不超过30次时播放waterClick.wav
        if (wKeyPressCount <= 30) {
            // 获取waterClick.wav的音频元素并播放
            var waterClickSound = document.getElementById('waterClick');
            waterClickSound.volume = 0.2; // 设置音量，根据需要调整
            waterClickSound.play().catch(e => {
                console.error("播放waterClick.wav失败:", e);
                // 可选：可以在这里处理错误，例如显示一个错误消息
            });
        }

        // 如果"W"键被按下超过30次
        if (wKeyPressCount > 30) {
            canTriggerG = true; // 允许触发G键的功能
            canTriggerTreeShake = true; // 现在也允许触发treeshake.wav的播放

            // 获取rainBgm音频元素，设置音量为25%，并停止播放
            var rainBgm = document.getElementById('rainBgm');
            rainBgm.volume = 0.2; // 设置音量为25%
            if (!rainBgm.paused) {
                rainBgm.pause();
                rainBgm.currentTime = 0; // 可选：重置音乐到起始位置
            }

            // 获取comfortBgm音频元素，设置音量为25%，并开始循环播放
            var comfortBgm = document.getElementById('comfortBgm');
            comfortBgm.volume = 0.2; // 设置音量为25%
            comfortBgm.play().catch(e => console.error("播放comfortBgm.wav失败:", e));

            // 隐藏播放按钮
            var playMusicButton = document.getElementById('playMusic');
            if (playMusicButton) {
                playMusicButton.style.display = 'none';
            }
        }
    }

    // 检查按下的键是否是"G"或"g"，并且是否满足触发条件
    if ((event.key === "G" || event.key === "g") && canTriggerG) {
        // 获取bird.wav的音频元素，设置音量为50%，并播放
        var birdSound = document.getElementById('birdSound');
        birdSound.volume = 0.2; // 设置音量为50%
        birdSound.play().catch(e => {
            console.error("播放bird.wav失败:", e);
            // 可选：可以在这里处理错误，例如显示一个错误消息
        });
    }
});

// 在canvasContainer上添加点击事件监听器
document.getElementById('canvasContainer').addEventListener('click', function() {
    // 检查是否满足触发条件
    if (canTriggerTreeShake) {
        // 获取treeshake.wav的音频元素并播放
        var treeShakeSound = document.getElementById('treeshake');
        treeShakeSound.volume = 0.2; // 设置音量，根据需要调整
        treeShakeSound.play().catch(e => {
            console.error("播放treeshake.wav失败:", e);
            // 可选：可以在这里处理错误，例如显示一个错误消息
        });

        // 可选：如果你希望treeshake.wav只能被触发一次，可以在这里重置canTriggerTreeShake
        // canTriggerTreeShake = false;
    }
});

document.getElementById('playMusic').addEventListener('click', function() {
    var music = document.getElementById('rainBgm');
    music.volume = 0.2; // 设置音量为25%
    music.play()
    .then(() => {
        console.log("背景音乐开始播放。");
        this.style.display = 'none'; // 隐藏播放按钮或进行其他UI调整
    })
    .catch(e => {
        console.error("播放背景音乐失败:", e);
    });
});

