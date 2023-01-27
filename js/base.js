if (window.pet) {
    var opt = {
        drag: true,
        showChat: true,
        color: "brown",
        size: "auto",
        menu: {
            $title: '你想做什么呢？',
            '关于小精灵': () => {
                window.open("https://www.npmjs.com/package/pet2");
            },
            "帮它洗澡": {
                $title: "洗啊洗啊洗澡澡",
                "蓝色": () => {
                    pet.changeColor("blue");
                },
                "绿色": () => {
                    pet.changeColor("green");
                },
                "黄色": () => {
                    pet.changeColor("yellow");
                },
                "红色": () => {
                    pet.changeColor("red");
                },
                "粉红": () => {
                    pet.changeColor("pink");
                },
                "紫色": () => {
                    pet.changeColor("purple");
                },
                "黑色": () => {
                    pet.changeColor("black");
                },
                "棕色": () => {
                    pet.changeColor("brown");
                }
            },
            "改变大小": {
                $title: "变变变",
                "超大": () => {
                    pet.changeSize("large");
                },
                "大": () => {
                    pet.changeSize("big");
                },
                "正常": () => {
                    pet.changeSize("small");
                },
                "小": () => {
                    pet.changeSize("mini");
                },
            },
            "还原设置": {
                $title: "你想还原哪项设置？",
                所有: () => {
                    pet.clearAll();
                    pet.sayWords("操作成功");
                },
                大小: () => {
                    pet.clearAll("size");
                    pet.sayWords("操作成功");
                },
                颜色: () => {
                    pet.clearAll("color");
                    pet.sayWords("操作成功");
                },
                位置: () => {
                    pet.clearAll("pos");
                    pet.sayWords("操作成功");
                },
            },
            '隐藏小精灵': () => {
                pet.hide();
            },
        },
        words: [
            "我们一起聊天吧 ヽ(✿ﾟ▽ﾟ)ノ",
            "咦你想说什么 oAo ?",
            "o(╯□╰)o主人你今天是不是忘记吃药了！",
            "你走，我没有你这么蠢的主人╮(╯▽╰)╭",
            "不要调戏我，我生气超凶的٩(๑`^´๑)۶",
            "看什么看，没见过这么可爱的的小精灵吗？(o°ω°o)",
            "咕~~(╯﹏╰)b，铲屎的，我已经很久没洗澡了，你看着办！",
        ]
    }
    pet.init(opt)
}